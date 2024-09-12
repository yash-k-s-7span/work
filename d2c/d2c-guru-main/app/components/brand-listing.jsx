"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/utils/directus";
import { aggregate, readItems } from "@directus/sdk";
import NoData from "./no-data";
import BrandCard from "./brand-card";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FilterIcon } from "./icons/filter-icon";
import Select from "./select";
import TagsSkeleton from "./skeleton/tag-skeleton";
import { Close } from "./icons/close";
import BrandCardSkeleton from "./skeleton/brand-card-skeleton";
import Pagination from "./pagination";

const BrandListing = ({ query }) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const limit = 30;
  const [isLoading, setIsLoading] = useState({
    brandData: true,
    categoriesData: true,
    tagsData: true,
  });
  const [totalCounts, setTotalCounts] = useState(null);

  const searchParams = useSearchParams();
  const selectedCateories = decodeURIComponent(searchParams.get("category"));
  const selectedTags = decodeURIComponent(searchParams.get("tag"));
  const [selectedFilters, setSelectedFilters] = useState({
    category: searchParams.get("category")
      ? [selectedCateories.split(",")]
      : [],
    tag: searchParams.get("tag") ? [selectedTags.split(",")] : [],
  });
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
  const router = useRouter();

  const options = [
    { label: "A to Z", value: "name" },
    { label: "Z to A", value: "-name" },
  ];
  const [selectedSort, setSelectedSort] = useState(
    searchParams.get("sort") || options[0].value
  );

  const totalPages = Math.ceil(totalCounts / limit);

  const getData = async () => {
    try {
      setIsLoading({ brandData: true });

      let totalCount = await client.request(
        aggregate("dg_brands", {
          query: {
            search: query,
            filter: {
              status: "published",
              ...(selectedFilters.category.length > 0 && {
                categories: {
                  dg_categories_id: {
                    slug: { _in: selectedFilters.category },
                  },
                },
              }),
              ...(selectedFilters.tag.length > 0 && {
                tags: {
                  dg_tags_id: {
                    slug: { _in: selectedFilters.tag },
                  },
                },
              }),
            },
          },

          aggregate: { count: "*" },
        })
      );
      setTotalCounts(totalCount[0].count);

      let newBrands = await client.request(
        readItems("dg_brands", {
          fields: [
            "name",
            "bio",
            "tags.dg_tags_id.id",
            "tags.dg_tags_id.label",
            "tags.dg_tags_id.slug",
            "logo",
            "slug",
            "launch_date",
            "categories.dg_categories_id.id",
            "categories.dg_categories_id.label",
            "categories.dg_categories_id.slug",
            "status",
          ],
          limit: limit,
          search: query,
          page: currentPage,
          filter: {
            status: "published",
            ...(selectedFilters.category.length > 0 && {
              categories: {
                dg_categories_id: {
                  slug: { _in: selectedFilters.category },
                },
              },
            }),
            ...(selectedFilters.tag.length > 0 && {
              tags: {
                dg_tags_id: {
                  slug: { _in: selectedFilters.tag },
                },
              },
            }),
          },
          sort: selectedSort ? selectedSort : "",
        })
      );
      if (currentPage === 1) {
        setBrands(newBrands);
      } else {
        setBrands([...newBrands]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading({ brandData: false });
    }
  };
  useEffect(() => {
    getData();
  }, [query, searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const categoryParam = params.get("category");
    const tagParam = params.get("tag");
    setSelectedFilters({
      category: categoryParam ? categoryParam.split(",") : [],
      tag: tagParam ? tagParam.split(",") : [],
    });
  }, [searchParams]);

  useEffect(() => {
    if (!searchParams) return;
    const params = new URLSearchParams(searchParams);

    if (selectedFilters.category.length > 0) {
      params.set("category", selectedFilters.category);
    } else {
      params.delete("category");
    }
    if (selectedFilters.tag.length > 0) {
      params.set("tag", selectedFilters.tag);
    } else {
      params.delete("tag");
    }
    if (selectedSort) {
      params.set("sort", selectedSort);
    } else {
      params.delete("sort");
    }
    params.set("page", currentPage);
    if (searchParams && pathname) {
      router.replace(`${pathname}?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters, currentPage, selectedSort]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let fetchedCategories = await client.request(
          readItems("dg_categories", {
            fields: ["label", "slug", "status"],
            sort: "label",
            limit: -1,
            filter: { status: "published" },
          })
        );
        setCategories(fetchedCategories);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading({ categoriesData: false });
      }
    };

    const fetchTags = async () => {
      try {
        setIsLoading({ tagsData: true });
        let fetchedTags = await client.request(
          readItems("dg_tags", {
            fields: ["label", "slug", "status"],
            filter: { status: "published" },
            sort: "label",
            limit: -1,
          })
        );
        setTags(fetchedTags);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading({ tagsData: false });
      }
    };

    fetchCategories();
    fetchTags();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsFilterVisible(true);
      } else {
        setIsFilterVisible(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-2 pt-10">
        <div className="w-full flex justify-center sm:justify-end sm:hidden mb-5">
          <div className="flex flex-row gap-4">
            {selectedFilters?.category?.length > 0 ||
            selectedFilters?.tag?.length > 0 ? (
              <div
                className="flex items-center border border-primary-500 w-fit py-1 px-2 text-lg cursor-pointer"
                onClick={() => {
                  setSelectedFilters({ category: [], tag: [] });
                  router.push(location.pathname);
                }}
              >
                <Close className="text-primary-500 mr-4 h-6 w-6" />
                Clear
              </div>
            ) : (
              <></>
            )}
            <button
              className={`relative flex gap-3 items-center border px-5 font-semibold mr-4 ${
                isFilterVisible
                  ? "bg-black text-white"
                  : "text-primary-500 border-primary-500"
              }`}
              onClick={toggleFilter}
            >
              {selectedFilters.category.length + selectedFilters.tag.length >
                0 && (
                <div
                  className={`absolute -top-2 -right-1.5 h-5 w-5 flex justify-center items-center rounded-full border border-primary-500 text-xs ${
                    isFilterVisible
                      ? " text-primary-500 bg-white"
                      : " bg-primary-500 text-white"
                  }`}
                >
                  {selectedFilters.category.length +
                    selectedFilters.tag.length <
                  10
                    ? selectedFilters.category.length +
                      selectedFilters.tag.length
                    : "9+"}
                </div>
              )}
              <FilterIcon />
              <span>Filter</span>
            </button>
          </div>
          <Select
            options={options}
            onSelect={(value) => {
              setSelectedSort(value);
            }}
          />
        </div>
        <div
          className={`h-full sticky top-0 bg-white w-60 max-w-72 mx-auto ${
            isFilterVisible ? "block" : "hidden"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">Filter</h2>

          <h3 className="text-xl font-bold mb-3">Categories</h3>
          {isLoading.categoriesData ? (
            <TagsSkeleton />
          ) : (
            <div className="flex flex-wrap mt-3 h-60 overflow-y-scroll">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsLoading({ brandData: true });
                      setBrands([]);
                      setCurrentPage(1);
                      setSelectedFilters((prevFilters) => ({
                        ...prevFilters,
                        category: prevFilters?.category?.includes(
                          category?.slug
                        )
                          ? prevFilters?.category?.filter(
                              (val) => val !== category?.slug
                            )
                          : [...prevFilters?.category, category?.slug],
                      }));
                    }}
                    className={`border rounded-full px-3 py-1 font-medium my-1 hover:bg-black hover:text-white mr-2 cursor-pointer text-xs  ${
                      selectedFilters.category.includes(category?.slug)
                        ? "bg-primary-500 text-white"
                        : "text-primary-400 border-primary-400"
                    }`}
                  >
                    {category?.label}
                  </button>
                );
              })}
            </div>
          )}

          <h3 className="text-xl font-bold mt-10 mb-3">Tags</h3>
          {isLoading.tagsData ? (
            <TagsSkeleton />
          ) : (
            <div className="flex flex-wrap mt-3 h-60 overflow-y-scroll">
              {tags.map((tag, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsLoading({ brandData: true });
                      setBrands([]);
                      setCurrentPage(1);
                      setSelectedFilters((prevFilters) => ({
                        ...prevFilters,
                        tag: prevFilters?.tag?.includes(tag.slug)
                          ? prevFilters?.tag?.filter((val) => val !== tag?.slug)
                          : [...prevFilters?.tag, tag?.slug],
                      }));
                    }}
                    className={`border rounded-full px-3 py-1 my-1 font-medium hover:bg-black hover:text-white mr-2 cursor-pointer text-xs  ${
                      selectedFilters.tag.includes(tag?.slug)
                        ? "bg-primary-500 text-white"
                        : "text-primary-400 border-primary-400"
                    }`}
                  >
                    {tag?.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div
          className={`flex flex-col ${
            isFilterVisible ? "ml-10" : "ml-0"
          } items-start w-full relative`}
        >
          <div className="w-full sm:flex justify-center sm:justify-end hidden">
            {selectedFilters?.category?.length > 0 ||
            selectedFilters?.tag?.length > 0 ? (
              <div
                className="flex items-center border border-primary-500 w-fit py-1 px-2 text-lg cursor-pointer mr-4"
                onClick={() => {
                  setSelectedFilters({ category: [], tag: [] });
                  router.push(location.pathname);
                }}
              >
                <Close className="text-primary-500 mr-2 h-6 w-6" />
                Clear
              </div>
            ) : (
              <></>
            )}
            <button
              className={`relative flex gap-3 items-center border px-5 font-semibold mr-4 ${
                isFilterVisible
                  ? "bg-black text-white"
                  : "text-primary-500 border-primary-500"
              }`}
              onClick={toggleFilter}
            >
              {selectedFilters.category.length + selectedFilters.tag.length >
                0 && (
                <div
                  className={`absolute -top-2 -right-1.5 h-5 w-5 flex justify-center items-center rounded-full border border-primary-500 text-xs ${
                    isFilterVisible
                      ? " text-primary-500 bg-white"
                      : " bg-primary-500 text-white"
                  }`}
                >
                  {selectedFilters.category.length +
                    selectedFilters.tag.length <
                  10
                    ? selectedFilters.category.length +
                      selectedFilters.tag.length
                    : "9+"}
                </div>
              )}
              <FilterIcon />
              <span>Filter</span>
            </button>
            <Select
              options={options}
              onSelect={(value) => {
                setSelectedSort(value);
              }}
            />
          </div>

          {isLoading.brandData ? (
            <div className="flex w-full flex-wrap mt-10">
              {Array.from({ length: 12 }).map((_, index) => (
                <BrandCardSkeleton
                  key={index}
                  className={`sm:pl-8 mb-8 ${
                    isFilterVisible
                      ? "w-full lg:w-1/2 xl:w-1/3"
                      : "w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div
              className={`mt-14 w-full h-full
                ${isFilterVisible ? "hidden sm:block" : "block"}`}
            >
              {brands.length === 0 && <NoData />}
              <div
                className={` ${isFilterVisible ? "hidden sm:block" : "block"}`}
              >
                <div className="flex flex-wrap justify-start">
                  {brands.map((brand, index) => (
                    <BrandCard
                      className={`sm:pl-8 mb-8 ${
                        isFilterVisible
                          ? "w-full lg:w-1/2 xl:w-1/3"
                          : "w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                      }`}
                      key={index}
                      title={brand?.name}
                      tags={brand?.tags}
                      desc={brand?.bio}
                      imageSrc={brand?.logo}
                      href={brand?.slug}
                    />
                  ))}
                </div>

                <div className="flex w-full justify-center mt-10">
                  {totalCounts > limit && (
                    <Pagination
                      limit={limit}
                      totalCounts={totalCounts}
                      totalPages={totalPages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BrandListing;

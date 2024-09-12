"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Logo } from "./icons/logo";
import { Menu } from "./icons/menu";
import { Close } from "./icons/close";
import Search from "../ui/Search";
import { useRouter } from "next/navigation";
import NavLink from "../ui/nav-links";

export default function Header() {
  const [isHeader, setIsHeader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const navLinks = [
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
    { href: "/about-us", label: "About us" },
    {
      href: "/blog",
      label: "Blogs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > 160) {
        setIsHeader(true);
      } else {
        setIsHeader(false);
      }

      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        // Adjust 60 to your header height
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={
        visible
          ? "fixed top-0 inset-x-0  z-10 transform -translate-y-full transition-all duration-100"
          : "fixed top-0 inset-x-0 bg-primary-500 z-10 translate-y-0 transition-all duration-100"
      }
    >
      <div className={isHeader ? "py-4" : "py-10"}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <Link href="/">
                <Logo isBig={isHeader ? false : true} className="w-52 h-fit" />
              </Link>

              <NavLink
                links={navLinks}
                linkClassName="hidden md:flex ml-10 items-center gap-10 justify-center"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <Search placeholder="Search Brands..." />
              </div>

              <div
                onClick={() => {
                  setNav(!nav);
                }}
                className="cursor-pointer z-40 text-white md:hidden"
              >
                {nav ? <Close size={30} /> : <Menu size={30} />}
              </div>
            </div>

            {nav && (
              <ul className="px-20 pt-28 z-30 absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
                <li className="flex flex-col gap-4 cursor-pointer capitalize text-lg">
                  <button
                    className="flex justify-center items-center"
                    onClick={() => {
                      setNav(!nav);
                      router.push("/categories");
                    }}
                  >
                    <span className="mr-1"> Categories</span>
                  </button>

                  <button
                    onClick={() => {
                      setNav(!nav);
                      router.push("/brands");
                    }}
                  >
                    Brands
                  </button>

                  <button
                    onClick={() => {
                      setNav(!nav);
                      router.push("/about-us");
                    }}
                  >
                    About us
                  </button>
                  <button
                    onClick={() => {
                      setNav(!nav);
                      router.push("/blog");
                    }}
                  >
                    Blogs
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

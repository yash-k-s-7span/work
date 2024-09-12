"use client";
import PaginationLeftArrow, {
  PaginationRighArrow,
} from "../assets/icons/pagination-arrow";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalCounts,
  totalPages,
  limit,
}) {
  const handlePageChange = (val) => {
    setCurrentPage(val);
  };
  const pages = [];
  pages.push(
    <button
      key="prev"
      className="px-3 py-2 border mx-1 cursor-pointer disabled:cursor-default disabled:opacity-40"
      disabled={currentPage <= 1}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      <PaginationLeftArrow className="disabled:opacity-10" />
    </button>
  );

  if (currentPage > 2) {
    pages.push(
      <button
        key={1}
        className={`px-4 py-2 border mx-1 ${
          currentPage === 1 ? "bg-primary-500 text-white" : ""
        }`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );
    if (currentPage > 2) {
      pages.push(
        <span key="ellipsis1" className="px-4 py-2 mx-1">
          ...
        </span>
      );
    }
  }

  pages.push(
    <button
      key={currentPage}
      className="px-4 py-2 border mx-1 bg-primary-500 text-white"
      onClick={() => handlePageChange(currentPage)}
    >
      {currentPage}
    </button>
  );

  if (currentPage < totalPages) {
    if (currentPage < totalPages - 1) {
      pages.push(
        <span key="ellipsis2" className="px-4 py-2 mx-1">
          ...
        </span>
      );
    }
    pages.push(
      <button
        key={totalPages}
        className={`px-4 py-2 border mx-1 ${
          currentPage === totalPages ? "bg-primary-500 text-white" : ""
        }`}
        onClick={() => handlePageChange(totalPages)}
      >
        {totalPages}
      </button>
    );
  }

  pages.push(
    <button
      key="next"
      className={`px-3 py-2 border mx-1 cursor-pointer disabled:cursor-default disabled:opacity-40`}
      onClick={() => handlePageChange(Number(currentPage) + 1)}
      disabled={currentPage === Math.ceil(totalCounts / limit)}
    >
      <PaginationRighArrow />
    </button>
  );

  return pages;
}

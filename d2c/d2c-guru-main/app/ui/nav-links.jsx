import Link from "next/link";
import React from "react";

function NavLink({ className, linkClassName, links = [] }) {
  return (
    <div className={className}>
      <ul className={linkClassName}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.href}
                target={link.target}
                className="relative text-base w-fit block after:block after:content-[''] after:absolute after:-bottom-1 after:h-[1px] after:bg-primary-200 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white font-medium py-2 hover:text-primary-200"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavLink;

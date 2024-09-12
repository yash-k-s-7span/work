import React from "react";
import Link from "next/link";

const ButtonLink = ({ href, children, className, icon, target }) => {
  return (
    <Link
      href={href}
      target={target}
      className={`flex items-center text-nowrap gap-2 ${className}`}
    >
      {children}
      {icon && <span className="mr-2">{icon}</span>}
    </Link>
  );
};

export default ButtonLink;

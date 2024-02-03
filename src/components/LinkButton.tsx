import React from "react";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  children: React.ReactNode;
  to: string;
};

export const LinkButton = ({ children, to }: LinkButtonProps) => {
  return (
    <Link
      className="mx-auto my-2 block min-w-28 rounded-md bg-sky-500 px-3 py-2 text-center text-lg font-bold text-white hover:bg-sky-700 disabled:bg-sky-300"
      to={to}
    >
      {children}
    </Link>
  );
};

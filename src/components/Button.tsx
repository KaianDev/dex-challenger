import { ComponentProps } from "react";

const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="mx-auto my-2 block min-w-28 rounded-md bg-sky-500 px-3 py-2 text-lg font-bold text-white hover:bg-sky-700 disabled:bg-sky-300"
    >
      {children}
    </button>
  );
};

export default Button;

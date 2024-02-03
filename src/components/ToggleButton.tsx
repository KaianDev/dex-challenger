import { ComponentProps } from "react";
import { useAppSelector } from "../hooks/hooks";
import { FaMoon, FaSun } from "react-icons/fa6";

export const ToggleButton = ({ ...props }: ComponentProps<"button">) => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <button
      {...props}
      className="flex items-center justify-between rounded-md bg-red-600 p-1 text-white"
    >
      {theme === "light" ? (
        <FaMoon className="size-6" />
      ) : (
        <FaSun className="size-6" />
      )}
    </button>
  );
};

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { FaMoon, FaSun } from "react-icons/fa6";
import { toggleTheme } from "../redux/theme/slice";

export const ToggleButton = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const [icon, setIcon] = useState(<FaMoon className="size-6" />);

  const handleToggleTheme = () => dispatch(toggleTheme());

  useEffect(() => {
    setIcon(
      theme === "light" ? (
        <FaMoon className="size-6" />
      ) : (
        <FaSun className="size-6" />
      ),
    );
  }, [theme]);

  return (
    <button
      onClick={handleToggleTheme}
      className="flex items-center justify-between rounded-md bg-red-600 p-1 text-white"
    >
      {icon}
    </button>
  );
};

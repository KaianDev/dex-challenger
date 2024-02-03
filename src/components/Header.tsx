import { Link } from "react-router-dom";
import { ToggleButton } from "./ToggleButton";

export const Header = () => {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
      <Link to="/">
        <div className="flex items-center gap-1">
          <img src="/pokeball.png" className="size-10" />
          <p className="text-3xl font-bold tracking-wide">Dex</p>
        </div>
      </Link>
      <ToggleButton />
    </header>
  );
};

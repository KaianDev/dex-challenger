import { Header } from "./components/Header";
import { useEffect } from "react";
import { useAppSelector } from "./hooks/hooks";
import MainRoutes from "./routes/main-routes";

const App = () => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-dvh bg-gradient-to-t from-zinc-300 to-sky-300 text-zinc-800 dark:from-rose-950 dark:to-zinc-800 dark:text-white">
      <Header />
      <MainRoutes />
    </div>
  );
};

export default App;

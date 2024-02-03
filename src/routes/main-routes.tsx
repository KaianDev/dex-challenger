import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import Home from "../pages/Home";
import PokemonPage from "../pages/PokemonPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:pokemon" element={<PokemonPage />} />
      <Route path="*" element={<NotFound message="Página não encontrada" />} />
    </Routes>
  );
};
export default MainRoutes;

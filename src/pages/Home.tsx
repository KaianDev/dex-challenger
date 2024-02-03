import { useEffect, useState } from "react";
import { Pokemon } from "../types/Pokemon";
import { getOne } from "../data/pokemon";
import PokemonItem from "../components/PokemonItem";
import Button from "../components/Button";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/baseUrl";

const Home = () => {
  const [initial, setInitial] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [inputSearch, setInputSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true);
      const pokemons: Pokemon[] = [];
      for (let i = initial; i <= limit; i++) {
        const pokemon = await getOne(`${BASE_URL}${i}`);
        if (pokemon) pokemons.push(pokemon);
      }
      setPokemonList((prev) => [...prev, ...pokemons]);
      setLoading(false);
    };
    loadPokemons();
  }, [limit, initial]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 10);
    setInitial((prev) => prev + 10);
  };

  const handleSearchButton = () => {
    if (inputSearch.trim() !== "") {
      navigate(`pokemon/${inputSearch}`);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6 pb-6">
      <div className="flex items-center gap-2 pb-6 pt-3">
        <input
          placeholder="Digite o nome ou número do Pokémon"
          type="search"
          className="w-full rounded-md p-3 text-black outline-none"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button
          onClick={handleSearchButton}
          className="flex items-center gap-1 rounded-md bg-sky-500 p-3 text-white hover:bg-sky-800"
        >
          <FaSearch />
          Pesquisar
        </button>
      </div>

      <div className="mb-6 grid grid-cols-1 justify-center gap-3 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 xl:grid-cols-5">
        {pokemonList?.map((item) => (
          <PokemonItem key={item.id} pokemon={item} />
        ))}
      </div>

      <Button disabled={loading} onClick={handleLoadMore}>
        {loading ? "Carregando..." : "Carregar mais"}
      </Button>
    </div>
  );
};

export default Home;

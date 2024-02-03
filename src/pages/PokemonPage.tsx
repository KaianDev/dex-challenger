import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../types/Pokemon";
import { getAbility, getOne } from "../data/pokemon";
import { BASE_URL } from "../constants/baseUrl";
import { TYPE_COLORS } from "../constants/TypeColors";
import Loading from "../components/Loading";
import { NotFound } from "../components/NotFound";
import { LinkButton } from "../components/LinkButton";

const PokemonPage = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [abilities, setAbilities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const list = [];
      const data = await getOne(`${BASE_URL}${params.pokemon}`);
      if (data) {
        for (let i of data.abilities) {
          const ability = await getAbility(i.ability.url);
          if (ability) {
            list.push(ability);
          }
        }
        setPokemon(data);
        setAbilities(list);
      }
      setLoading(false);
    };
    loadPokemon();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="item-center mx-auto flex max-w-5xl flex-col justify-center px-6 pb-6">
      {pokemon && (
        <>
          <div className="my-6 flex flex-col gap-2 space-y-2 md:flex-row">
            <div className="flex flex-col items-center">
              <h1 className="text-center text-5xl font-bold capitalize sm:text-5xl">
                {pokemon.name}
              </h1>
              <img
                src={pokemon.sprite}
                alt={pokemon.name}
                className="max-w-80"
              />
              <div className="flex gap-2">
                {pokemon.types.map((item) => (
                  <span
                    key={item.type.name}
                    className="w-full min-w-24 rounded-md border-2 p-2 py-1 text-center text-xl font-bold uppercase text-white"
                    style={{ backgroundColor: TYPE_COLORS[item.type.name] }}
                  >
                    {item.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div>
                <strong className="text-xl uppercase">Abilities</strong>
                {pokemon.abilities.map((item, index) => (
                  <div key={item.ability.name} className="mb-2">
                    <p className="font-bold capitalize">{item.ability.name}</p>
                    <p className="dark:text-zinc-300">{abilities[index]}</p>
                  </div>
                ))}
              </div>
              <div>
                <strong className="text-xl uppercase">Some Movements</strong>
                <p className="capitalize dark:text-zinc-300">
                  (
                  {pokemon.moves
                    .splice(0, 20)
                    .map((item) => item.move.name.replace("-", " "))
                    .join(", ")}
                  ...)
                </p>
              </div>
            </div>
          </div>
          <LinkButton to="/">Voltar</LinkButton>
        </>
      )}
      {!pokemon && (
        <NotFound message="Nenhum resultado encontrado para essa consulta!" />
      )}
    </div>
  );
};

export default PokemonPage;

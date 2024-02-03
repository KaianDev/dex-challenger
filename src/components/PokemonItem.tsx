import { Link } from "react-router-dom";
import { TYPE_COLORS } from "../constants/TypeColors";
import { getNumberPokemon } from "../helpers/getNumberPokemon";
import { Pokemon } from "../types/Pokemon";

type PokemonItemProps = {
  pokemon: Pokemon;
};

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  const color = TYPE_COLORS[pokemon.types[0].type.name];
  const numberPokemon = getNumberPokemon(pokemon.id);

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div
        className={
          "group flex cursor-pointer items-center justify-center rounded-md bg-[] p-1 sm:aspect-square sm:flex-col"
        }
        style={{ background: color }}
      >
        <div className="flex w-full justify-between rounded-md bg-zinc-800 p-6 px-2 capitalize text-white sm:py-0">
          <strong>{pokemon.name}</strong>
          <span>{numberPokemon}</span>
        </div>
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          className="aspect-square size-20 duration-200 ease-linear sm:size-40 sm:group-hover:scale-125 "
        />
      </div>
    </Link>
  );
};

export default PokemonItem;

import { TYPE_COLORS } from "../constants/TypeColors";

export type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: TypePokemon[];
  abilities: AbilityPokemon[];
  moves: MovePokemon[];
};

type TypePokemon = {
  type: {
    name: NameType;
  };
};

type AbilityPokemon = {
  ability: {
    name: string;
    url: string;
  };
};

type MovePokemon = {
  move: {
    name: string;
  };
};

type NameType = keyof typeof TYPE_COLORS;

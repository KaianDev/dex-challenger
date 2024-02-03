import { Pokemon } from "../types/Pokemon";

export const getOne = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pokemon: Pokemon = {
      id: data.id,
      name: data.name,
      abilities: data.abilities,
      moves: data.moves,
      sprite: data.sprites.other["official-artwork"].front_default,
      types: data.types,
    };
    return pokemon;
  } catch (error) {
    return false;
  }
};

export const getAbility = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.effect_entries[1].effect as string;
  } catch (error) {
    return false;
  }
};

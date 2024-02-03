export const getNumberPokemon = (n: number) => {
  if (n < 10) return `#000${n}`;
  if (n >= 10) return `#00${n}`;
  if (n >= 100) return `#0${n}`;
  if (n >= 1000) return `#${n}`;
};

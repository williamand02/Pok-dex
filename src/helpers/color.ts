import { colorsPokemon } from "helpers/colorsPokemon";

export function colorType(types) {
  const color = colorsPokemon[types];
  return color;
}

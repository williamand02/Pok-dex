/* eslint-disable no-use-before-define */
import { Pokemon, SmallPokemon } from "types/getAllPokemons";
import { pokemonApi } from "../services/api";

export const getAllPokemons = async (): Promise<Pokemon[]> => {
  const { data } = await pokemonApi.get("pokemon?limit=100000&offset=0");
  const smallPokemonList = data.results;
  const pokemonArr = listPokemons(smallPokemonList);
  const pokemonsFull = getPokemonsFull(pokemonArr);
  return pokemonsFull;
};

export const getQuantityPokemons = async (
  quantity: number = 10
): Promise<Pokemon[]> => {
  const response = await pokemonApi.get(`/pokemon/?limit=${quantity}`);
  const smallPokemonList = response.data.results;
  const pokemonArr = listPokemons(smallPokemonList);

  return pokemonArr;
};

const listPokemons = (smallPokemonList: SmallPokemon[]): Pokemon[] => {
  const pokemonArr: Pokemon[] = smallPokemonList.map((poke) => {
    const pokeArr = poke.url.split("/");
    const id = pokeArr[6];

    return {
      id,
      name: poke.name,
    };
  });

  return pokemonArr;
};

const getPokemon = async (id: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get(`/pokemon/${id}`);
  const { name, types, sprites } = data;
  const pic = sprites.other["official-artwork"].front_default;
  const type = types.map((type) => type.type.name);

  return {
    id,
    name,
    pic,
    type,
  };
};

const getPokemonsFull = async (pokemons: Pokemon[]): Promise<Pokemon[]> => {
  const pokemonFull = await Promise.all(
    pokemons.map(async (pokemon) => {
      const { id, name, pic, type } = await getPokemon(pokemon.id);

      return {
        id,
        name,
        pic,
        type,
      };
    })
  );

  return pokemonFull;
};

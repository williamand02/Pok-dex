import { useState, useEffect } from "react";

import { getAllPokemons } from "../../helpers/getPokemons";
import { Pokemon } from "../../types/getAllPokemons";

export const usePokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getAllPokemons().then((pokes) => {
      setIsLoading(false);
      setPokemons(pokes);
    });
  }, []);

  return {
    isLoading,
    pokemons,
  };
};

import { useState } from "react";
import Card from "components/Card";
import Main from "components/Main";
import Search from "components/Search";
import Modal from "components/Modal";

import { Pokemon } from "../../types/getAllPokemons";
import { usePokemon } from "../../redux/hooks/usePokemon";
import * as S from "./styled";

export function PokemonsList() {
  const { isLoading, pokemons } = usePokemon();
  const [currentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);

  const filteredPokemons = (): Pokemon[] => {
    if (search.length >= 3) {
      return pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return pokemons.slice(currentPage, currentPage + 10);
  };

  const displayPokemons = filteredPokemons().map(({ id, name, pic, type }) => {
    return (
      <Card
        key={id}
        id={id}
        name={name}
        pic={pic}
        type={type}
        onClick={() => setModal(true)}
      />
    );
  });

  return (
    <S.Container>
      <Main />

      {isLoading ? (
        <S.Loading>
          <S.LoadingImage src="/img/Pokeball.svg" />
        </S.Loading>
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          <S.List>{displayPokemons}</S.List>
        </>
      )}
      <Modal active={modal} setModal={setModal} />
    </S.Container>
  );
}

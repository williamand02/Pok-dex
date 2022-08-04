/* eslint-disable radix */
import React from "react";
import { IPokemon } from "types/Card";
import * as S from "./styles";

function formatNumber(id: string) {
  const number = parseInt(id);
  const resultSlice = `000${number}`.slice(-3);
  return `#${resultSlice}`;
}
function Card(pokemon: IPokemon) {
  const { id, pic, name, type, onClick } = pokemon;
  return (
    <S.Container type={type} onClick={onClick}>
      <S.Wrapper type={type}>
        <S.Number>{formatNumber(id)}</S.Number>
        <S.Image src={pic} />
      </S.Wrapper>
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}

export default Card;

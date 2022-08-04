import React, { Dispatch, SetStateAction } from "react";
import * as S from "./styled";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

function Search({ search, setSearch }: Props) {
  return (
    <S.Container>
      <S.Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Procurar"
      />
    </S.Container>
  );
}

export default Search;

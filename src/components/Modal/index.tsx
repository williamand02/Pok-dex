import React, { Dispatch, SetStateAction } from "react";
import * as S from "./styled";

interface Props {
  active: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

function Modal({ active, setModal }: Props) {
  return (
    <S.Modal active={active} onClick={() => setModal(false)}>
      <S.Content>
        <S.Container>
          <S.Header>
            <S.Info>
              <S.Name>bubalsalro</S.Name>
              <S.Number>#001</S.Number>
            </S.Info>
            <S.Pokebola src="/img/Pokeball-glass.svg" />
          </S.Header>
          <S.Body>
            <S.Pokemon src="/img/image 9.png" />
            <S.Types>
              {["grass", "poison"].map((type) => (
                <S.Type key={type} type={type}>
                  {type}
                </S.Type>
              ))}
            </S.Types>
            <S.Title>Habilidades</S.Title>
            <S.Abilites>
              {["overgrow", "chlorophyll"].map((abilite) => (
                <S.Ability key={abilite}>{abilite}</S.Ability>
              ))}
            </S.Abilites>
          </S.Body>
        </S.Container>
      </S.Content>
    </S.Modal>
  );
}

export default Modal;

import { colorType } from "helpers/color";

import styled from "styled-components";

const colorPokemonSelected = "#74CB48";

export const Modal = styled.div<{ active: Boolean }>`
  display: ${(props) => (props.active ? "flex" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Content = styled.div`
  min-width: 360px;
  min-height: 453px;
  margin: auto;
  background-color: #fff;
  position: relative;
  padding: 0;
  outline: 0;
  border-radius: 8px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${colorPokemonSelected};
  border-radius: 8px 8px 0px 0px;
  position: relative;
`;

export const Info = styled.div`
  width: 100%;
  color: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
`;
export const Name = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: capitalize;
`;
export const Number = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Pokebola = styled.img`
  width: 87px;
  height: 87px;
  float: right;
  padding: 1em;
`;

export const Body = styled.div`
  position: absolute;
  padding-top: 3em;
`;
export const Pokemon = styled.img``;

export const Types = styled.div`
  color: #ffffff;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Type = styled.div<{ type: string }>`
  background-color: ${(props) => colorType(props.type)};
  padding: 0.5em 1.5em;
  border-radius: 15px;
  margin: 0.5em;
`;

export const Title = styled.div`
  color: ${colorPokemonSelected};
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  padding: 0.5em;
`;
export const Abilites = styled.div`
  color: #ffffff;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Ability = styled.div`
  // adcionar função para buscar a cor do tipo de habilidade
  background-color: #858585;
  padding: 0.5em 1.5em;
  border-radius: 15px;
  margin: 0.5em;
`;

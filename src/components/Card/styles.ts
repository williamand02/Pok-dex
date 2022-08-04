import styled from "styled-components";
import { colorType } from "helpers/color";

const corSelecionada = "#B7B9D0";
export const Container = styled.div<{ type: string[] }>`
  color: #fff;
  min-width: 104px;
  height: 112px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 6px;
  background-color: #fff;
  transition: box-shadow 0.2s;
  :hover {
    box-shadow: 0px 2px 4px #0000007d;
    cursor: pointer;
  }
  p:first-child {
    color: ${(props) => colorType(props.type[0])};
  }

  p:last-child {
    background-color: ${(props) => colorType(props.type[0])};
  }
`;

export const Wrapper = styled.div<{ type: string[] }>`
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  border: 1px solid ${(props) => colorType(props.type[0])};
`;

export const Number = styled.p`
  color: ${corSelecionada};
  text-align: right;
  padding: 0 0.5em;
`;

export const Image = styled.img`
  height: 72px;
  width: 72px;
  margin: 0 auto;
  border-radius: 0px;
  background-color: white;
`;

export const Name = styled.p`
  background-color: ${corSelecionada};
  flex-grow: 1;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 10px;
  min-height: 24px;
`;

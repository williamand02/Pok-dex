import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  background-color: transparent;
  color: var(--branco);
  border-radius: 24px;
  width: 100%;
  padding: 1em;

  border: 1px solid #e0e0e0;
  height: 24.000000476837045px;
  width: 1046.0000597238468px;
  left: 16px;
  top: 64px;
  border-radius: 10px;

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    background: url(../img/lupa.svg);
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: 0.5em;
    padding-left: 2em;
  }
`;

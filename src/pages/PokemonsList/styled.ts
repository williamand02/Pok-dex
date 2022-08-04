import styled from "styled-components";

export const Container = styled.div`
  margin: 1em 2em;
  background-color: #f7f7f7;
  box-shadow: 0px 0px 6px #151313;
  border-radius: 8px;
  padding: 2em;
  max-width: 1080px;
  margin: 2em auto;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Loading = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
export const LoadingImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  animation: loading 2s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

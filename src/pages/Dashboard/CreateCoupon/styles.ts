import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};

  @media screen and (min-width: 1281px) {
    justify-content: flex-start;
  }
`;

const GoBackWrapper = styled.div`
  width: 80%;
  display: flex;
  padding-bottom: 10px;
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 1281px) {
    margin: 30px 0;
  }
`;

export { Container, GoBackWrapper, TextWrapper };

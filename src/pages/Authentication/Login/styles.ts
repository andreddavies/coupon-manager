import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
`;

const TextWrapper = styled.div`
  margin-bottom: 20px;
`;

export { Container, TextWrapper };

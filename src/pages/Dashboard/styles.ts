import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

export { Container, ContentWrapper };

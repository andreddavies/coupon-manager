import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  display: flex;
  padding: 30px 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.footer.background};
`;

export { Container };

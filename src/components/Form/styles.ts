import styled from "styled-components";

const Container = styled.form`
  width: 80%;
  display: flex;
  padding: 30px 0;
  max-width: 622px;
  max-height: 620px;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.form.border};
  background-color: ${({ theme }) => theme.form.background};

  @media screen and (min-width: 1281px) {
    padding: 50px 0;
  }
`;

const Button = styled.button`
  border: 0;
  width: 80%;
  outline: 0;
  height: 40px;
  font-weight: 600;
  max-width: 328px;
  font-size: 1.2rem;
  border-radius: 20px;
  color: ${({ theme }) => theme.form.button.text};
  background-color: ${({ theme }) => theme.form.button.background};

  &:hover {
    background-color: ${({ theme }) => theme.form.button.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.form.button.active};
  }

  @media screen and (min-width: 1281px) {
    height: 50px;
    border-radius: 30px;
  }
`;

export { Container, Button };

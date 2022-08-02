import styled from "styled-components";

type Props = {
  width?: string;
  disabled?: boolean;
  btnStyle: "primary" | "secondary";
};
const Button = styled.button<Props>`
  height: 48px;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.75rem 0;
  border-radius: 12px;
  transition: all, linear 100ms;
  width: ${({ width }) => (!width && "237px") || `${width}`};
  color: ${({ theme, btnStyle }) => theme.button[btnStyle].text};
  background: ${({ theme, btnStyle }) => theme.button[btnStyle].background};
  border: 1px solid ${({ theme, btnStyle }) => theme.button[btnStyle].border};

  &&[disabled],
  &&[disabled]:active,
  &&[disabled]:focus {
    background: ${({ theme }) => theme.button.disabled.background};
    border: 1px solid ${({ theme }) => theme.button.disabled.border};
    color: ${({ theme }) => theme.button.disabled.text};
  }

  &&:hover {
    cursor: pointer;
  }

  &&:active {
    background: ${({ theme, btnStyle }) =>
      theme.button[btnStyle].activeBackground};
    border: 1px solid
      ${({ theme, btnStyle }) => theme.button[btnStyle].activeBorder};
    color: ${({ theme, btnStyle }) => theme.button[btnStyle].activeText};
  }

  &&:focus {
    background: ${({ theme, btnStyle }) =>
      theme.button[btnStyle].focusBackground};
    border: 1px solid
      ${({ theme, btnStyle }) => theme.button[btnStyle].focusBorder};
    color: ${({ theme, btnStyle }) => theme.button[btnStyle].focusText};
  }
`;

export { Button };

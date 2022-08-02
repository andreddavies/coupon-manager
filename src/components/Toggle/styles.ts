import styled from "styled-components";

type TProps = {
  active: boolean;
};

const Toggle = styled.input<TProps>`
  outline: 0;
  width: 44px;
  height: 24px;
  transition: 1s;
  cursor: pointer;
  appearance: none;
  position: relative;
  border-radius: 100px;
  -webkit-appearance: none;
  background: ${({ theme, active }) =>
    theme.toggleCheckbox[active ? "active" : "default"].background};

  &::before {
    top: -2px;
    left: 0;
    width: 28px;
    content: "";
    height: 28px;
    position: absolute;
    border-radius: 14px;
    transition: 0.3s ease all;
    border: 2px solid
      ${({ theme, active }) =>
        theme.toggleCheckbox[active ? "active" : "default"].border};
    background: ${({ theme }) => theme.toggleCheckbox.beforeBackground};
  }

  &&:checked::before {
    top: -2px;
    left: 16px;
    width: 28px;
    content: "";
    height: 28px;
    position: absolute;
    border-radius: 14px;
    transition: 0.3s ease all;
  }
`;

export { Toggle };

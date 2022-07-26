import styled from "styled-components";

type ContainerProps = {
  width?: string;
  marginVertical?: number;
};

type VariationProps = {
  variation: "initial" | "invalid" | "valid";
};

type LabelProps = {
  focused: boolean;
};

const Container = styled.div<ContainerProps>`
  max-width: 582px;
  position: relative;
  width: ${({ width }) => (!width && "279px") || `${width}`};
  margin: ${({ marginVertical }) =>
    (marginVertical && `${marginVertical}rem 0`) || "0.70rem 0"};
`;

const InputContainer = styled.div<VariationProps>`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  box-shadow: 0 0 2px 1px ${({ theme }) => theme.input.shadow};
  border: 1px solid ${({ theme, variation }) => theme.input[variation].border};

  &:hover {
    box-shadow: 0 0 8px 2px ${({ theme }) => theme.input.shadow};
  }
`;

const Label = styled.label<LabelProps>`
  transition: 0.1s;
  margin-left: 8px;
  font-size: 0.8rem;
  position: absolute;
  color: ${({ theme }) => theme.input.label};
  top: ${({ focused }) => (!focused && "21.6px") || "2px"};

  @media screen and (min-width: 1281px) {
    font-size: 1rem;
  }
`;

const Input = styled.input<VariationProps>`
  outline: 0;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.input.background};
  color: ${({ theme, variation }) => theme.input[variation].text};
`;

const MessageText = styled.span`
  margin-left: 8px;
  font-weight: 600;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.input.messageText};
`;

export { Container, InputContainer, Label, Input, MessageText };

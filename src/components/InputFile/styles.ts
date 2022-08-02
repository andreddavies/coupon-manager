import styled from "styled-components";

type InputProps = {
  width?: string;
};

const Input = styled.input`
  border: none;
  margin: 2rem 0;
  max-width: 582px;
  width: ${({ width }) => (!width && "279px") || `${width}`};
`;

export { Input };

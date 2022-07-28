import styled from "styled-components";

type ContainerProps = {
  width?: string;
};

const Container = styled.div<ContainerProps>`
  height: 100%;
  width: ${({ width }) => (width ? width : "90%")};
`;

export { Container };

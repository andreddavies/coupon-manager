import styled from "styled-components";

type Props = {
  size: number;
  color: string;
  align?: string;
  weight: "400" | "500" | "600" | "700" | "900";
};

const Container = styled.div<Props>`
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}rem`};
  color: ${({ theme, color }) => theme.heading[color]};

  & > strong {
    font-weight: ${({ weight }) =>
      weight !== "900" && (parseInt(weight) + 100).toString()};
  }
`;

export { Container };

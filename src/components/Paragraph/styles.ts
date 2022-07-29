import styled from "styled-components";

type Props = {
  size: number;
  color: string;
  align?: string;
  pointer?: boolean;
  weight: "400" | "500" | "600" | "700" | "900";
};

const Paragraph = styled.p<Props>`
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}rem`};
  cursor: ${({ pointer }) => pointer && "pointer"};
  color: ${({ theme, color }) => theme.paragraph[color]};

  & > strong {
    font-weight: ${({ weight }) =>
      weight !== "900" && (parseInt(weight) + 100).toString()};
  }
`;

export { Paragraph };

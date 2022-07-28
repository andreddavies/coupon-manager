import React from "react";

import * as S from "./styles";

type Props = {
  size: number;
  color: string;
  align?: string;
  type: "h1" | "h2" | "h3" | "h4";
  weight: "400" | "500" | "600" | "700" | "900";
  children: React.ReactElement | React.ReactElement[] | string;
};

const Heading = ({
  children,
  size = 1,
  type = "h1",
  weight = "500",
  align = "center",
  color = "primary",
}: Props): React.ReactElement => {
  return (
    <S.Container
      as={type}
      size={size}
      color={color}
      align={align}
      weight={weight}
    >
      {children}
    </S.Container>
  );
};

export default Heading;

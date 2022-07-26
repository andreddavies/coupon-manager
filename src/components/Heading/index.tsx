import React from "react";

import * as S from "./styles";

type Props = {
  size: number;
  color: string;
  align?: string;
  pointer?: boolean;
  type: "h1" | "h2" | "h3" | "h4";
  weight: "400" | "500" | "600" | "700" | "900";
  children: React.ReactElement | React.ReactElement[] | string;
  onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
};

const Heading = ({
  size,
  type,
  color,
  weight,
  onClick,
  pointer,
  children,
  align = "center",
}: Props): React.ReactElement => {
  return (
    <S.Container
      as={type}
      size={size}
      color={color}
      align={align}
      weight={weight}
      onClick={onClick}
      pointer={pointer}
    >
      {children}
    </S.Container>
  );
};

export default Heading;

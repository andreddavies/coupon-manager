import React from "react";

import * as S from "./styles";

type Props = {
  size: number;
  color: string;
  align?: string;
  pointer?: boolean;
  weight: "400" | "500" | "600" | "700" | "900";
  children: React.ReactElement | React.ReactElement[] | string;
  onClick?: (event: React.MouseEvent<HTMLParagraphElement>) => void;
};

const Paragraph = ({
  size,
  color,
  align,
  weight,
  onClick,
  pointer,
  children,
}: Props): React.ReactElement => {
  return (
    <S.Paragraph
      size={size}
      color={color}
      align={align}
      weight={weight}
      pointer={pointer}
      onClick={onClick}
    >
      {children}
    </S.Paragraph>
  );
};

export default Paragraph;

import React from "react";

import * as S from "./styles";

type TProps = {
  text: string;
  width?: string;
  disabled?: boolean;
  btnStyle: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  text,
  type,
  width,
  onClick,
  btnStyle,
  disabled = false,
}: TProps): React.ReactElement => {
  return (
    <S.Button
      width={width}
      onClick={onClick}
      btnStyle={btnStyle}
      disabled={disabled}
      type={!type ? "submit" : type}
    >
      {text}
    </S.Button>
  );
};

export default Button;

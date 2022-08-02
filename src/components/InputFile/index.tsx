import React from "react";

import * as S from "./styles";

type TProps = {
  id: string;
  width?: string;
  onChangeCapture: React.ChangeEventHandler<HTMLInputElement>;
};

const InputFile = ({
  id,
  width,
  onChangeCapture,
}: TProps): React.ReactElement => {
  return (
    <S.Input
      id={id}
      type="file"
      width={width}
      onChangeCapture={onChangeCapture}
      accept="image/png, image/jpg, image/jpeg"
    />
  );
};

export default InputFile;

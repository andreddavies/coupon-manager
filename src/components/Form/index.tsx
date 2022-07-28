import React from "react";

import * as S from "./styles";

type Props = {
  id: string;
  buttonText?: string;
  children: React.ReactElement | React.ReactElement[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({
  id,
  children,
  onSubmit,
  buttonText = "Finalizar",
}: Props): React.ReactElement => {
  return (
    <S.Container id={id} onSubmit={onSubmit}>
      {children}

      <S.Button form={id}>{buttonText}</S.Button>
    </S.Container>
  );
};

export default Form;

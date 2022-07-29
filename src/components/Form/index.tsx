import React from "react";

import * as S from "./styles";

type Props = {
  id: string;
  buttonText?: string;
  buttonDisabled: boolean;
  children: React.ReactElement | React.ReactElement[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({
  id,
  children,
  onSubmit,
  buttonDisabled,
  buttonText = "Finalizar",
}: Props): React.ReactElement => {
  return (
    <S.Container id={id} onSubmit={onSubmit}>
      {children}

      <S.Button form={id} disabled={buttonDisabled}>
        {buttonText}
      </S.Button>
    </S.Container>
  );
};

export default Form;

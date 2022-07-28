import React, { useState } from "react";

import * as S from "./styles";

type Props = {
  id: string;
  label: string;
  value: string;
  width?: string;
  validationCriteria: string[];
  isValid: (value: boolean) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  width,
  label,
  value,
  isValid,
  onChange,
  validationCriteria,
}: Props): React.ReactElement => {
  const [focused, setFocused] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event);

    isValid(true);
    validationCriteria.map((criterion) => {
      console.log(criterion);
      return criterion;
    });

    setMessageText("Erro");
  };

  return (
    <S.Container width={width}>
      <S.InputContainer>
        <S.Label htmlFor={id} focused={focused}>
          {label}
        </S.Label>

        <S.Input
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </S.InputContainer>

      <S.MessageText>{messageText}</S.MessageText>
    </S.Container>
  );
};

export default Input;

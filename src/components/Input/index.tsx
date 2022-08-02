import React, { useState } from "react";

import * as S from "./styles";
import { TInputVariation } from "./types";

type TValidationCriteria = {
  criterionRegExp: RegExp;
  errorMessage: string;
};

type Props = {
  id: string;
  label: string;
  value: string;
  width?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  marginVertical?: number;
  storeDispatch?: () => void;
  isValid: (value: boolean) => void;
  validationCriteria: TValidationCriteria[];
  type: "number" | "email" | "text" | "password" | "tel";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  type,
  label,
  width,
  value,
  isValid,
  onChange,
  minLength,
  maxLength,
  storeDispatch,
  marginVertical,
  disabled = false,
  validationCriteria,
}: Props): React.ReactElement => {
  const [focused, setFocused] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [variation, setVariation] = useState<TInputVariation>("initial");

  const handleChangeCapture = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onChange(event);
    const errors: string[] = [];

    validationCriteria.map((criterion) => {
      const { criterionRegExp, errorMessage } = criterion;
      const status = criterionRegExp.test(event.target.value);

      if (!status) errors.push(errorMessage);

      return { status };
    });

    setVariation(errors.length === 0 ? "valid" : "invalid");
    setErrorMessage(errors[0]);

    isValid(variation === "valid");

    if (storeDispatch && variation !== "invalid") {
      storeDispatch();
    }
  };

  return (
    <S.Container width={width} marginVertical={marginVertical}>
      <S.InputContainer variation={variation}>
        <S.Label htmlFor={id} focused={!!value ?? focused}>
          {label}
        </S.Label>

        <S.Input
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          variation={variation}
          onChange={handleChangeCapture}
          onFocus={() => setFocused(true)}
          onBlur={() => !value && setFocused(false)}
        />
      </S.InputContainer>

      <S.MessageText>{errorMessage}</S.MessageText>
    </S.Container>
  );
};

export default Input;

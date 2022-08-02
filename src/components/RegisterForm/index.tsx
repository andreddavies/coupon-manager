import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import Form from "../Form";
import Input from "../Input";
import Heading from "../Heading";

import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import * as S from "./styles";
import {
  EMAIL_VALIDATION,
  REQUIRED_VALIDATION,
} from "../../constants/validations";
import UserAPI from "../../services/UserAPI";

const RegisterForm = (): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const data = await UserAPI.create({ name, email, password });

      if (data) {
        alert("Usuário cadastrado com sucesso!");
        window.location.reload();
      }
    } catch (err) {
      const errors = err as Error | AxiosError;

      if (axios.isAxiosError(errors)) {
        if (!errors.response) throw new Error("Erro inesperado!");
        else
          alert(
            (errors.response?.data as { message: string }).message as string
          );
      }
    }
  };

  useEffect(() => {
    setIsFormValid(isNameValid && isEmailValid && isPasswordValid);
  }, [isNameValid, isEmailValid, isPasswordValid]);

  return (
    <Form
      id="registerForm"
      buttonText="Cadastrar"
      onSubmit={handleSubmit}
      buttonDisabled={!isFormValid}
    >
      <S.HeadingWrapper>
        <Heading
          pointer
          type="h2"
          weight="500"
          color="tertiary"
          size={isMobile ? 0.8 : 1}
          onClick={() => router("/")}
        >
          <>
            Já tem conta? <strong>Efetue login</strong>
          </>
        </Heading>
      </S.HeadingWrapper>

      <Input
        id="name"
        width="80%"
        type="text"
        label="Nome"
        value={name}
        marginVertical={0.25}
        isValid={(value) => setIsNameValid(value)}
        validationCriteria={[REQUIRED_VALIDATION]}
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        id="email"
        width="80%"
        type="text"
        value={email}
        label="E-mail"
        marginVertical={0.25}
        isValid={(value) => setIsEmailValid(value)}
        onChange={(event) => setEmail(event.target.value)}
        validationCriteria={[REQUIRED_VALIDATION, EMAIL_VALIDATION]}
      />

      <Input
        width="80%"
        label="Senha"
        id="password"
        type="password"
        value={password}
        marginVertical={0.25}
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsPasswordValid(value)}
        onChange={(event) => setPassword(event.target.value)}
      />
    </Form>
  );
};

export default RegisterForm;

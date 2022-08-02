import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Form from "../Form";
import Input from "../Input";

import Heading from "../Heading";
import Paragraph from "../Paragraph";

import UserAPI from "../../services/UserAPI";
import { setUser } from "../../store/models/auth";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import * as S from "./styles";
import {
  EMAIL_VALIDATION,
  REQUIRED_VALIDATION,
} from "../../constants/validations";

const LoginForm = (): React.ReactElement => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const { isMobile } = useDeviceDetect();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const data = await UserAPI.login({ email, password });

      dispatch(setUser({ ...data, authenticated: true }));
      router("/dashboard");
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
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  return (
    <Form
      id="loginForm"
      buttonText="Entrar"
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
          onClick={() => router("/register")}
        >
          <>
            Não tem conta? <strong>Cadastre-se</strong>
          </>
        </Heading>
      </S.HeadingWrapper>

      <Input
        id="email"
        width="80%"
        type="email"
        value={email}
        label="E-mail"
        marginVertical={0.6}
        isValid={(value) => setIsEmailValid(value)}
        onChange={(event) => setEmail(event.target.value)}
        validationCriteria={[REQUIRED_VALIDATION, EMAIL_VALIDATION]}
      />

      <Input
        width="80%"
        id="password"
        label="Senha"
        type="password"
        value={password}
        marginVertical={0.6}
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsPasswordValid(value)}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Paragraph
        pointer
        weight="500"
        color="tertiary"
        size={isMobile ? 0.75 : 0.9}
        onClick={() => router("/register")}
      >
        Esqueci a senha
      </Paragraph>
    </Form>
  );
};

export default LoginForm;

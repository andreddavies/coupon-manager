import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import Input from "../Input";

import { setUser } from "../../store/models/auth";
import { Dispatch, RootState } from "../../store";

import {
  EMAIL_VALIDATION,
  REQUIRED_VALIDATION,
} from "../../constants/validations";
import UserAPI from "../../services/UserAPI";

const UpdateAccountForm = (): React.ReactElement => {
  const dispatch = useDispatch<Dispatch>();
  const store = useSelector((state: RootState) => state);

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
      const data = await UserAPI.update(
        { name, email, password },
        store.auth.id!,
        store.auth.token!
      );

      if (data) {
        const { token } = store.auth;
        dispatch(setUser({ ...data.user, authenticated: true, token }));
        alert("Usuário foi atualizado!");
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
    setIsFormValid(isNameValid || isPasswordValid || isEmailValid);
  }, [isNameValid, isPasswordValid, isEmailValid]);

  return (
    <Form
      id="updateAccount"
      buttonText="Atualizar"
      onSubmit={handleSubmit}
      buttonDisabled={!isFormValid}
    >
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

export default UpdateAccountForm;

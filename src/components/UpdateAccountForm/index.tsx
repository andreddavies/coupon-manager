import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../Form";
import Input from "../Input";

import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import {
  EMAIL_VALIDATION,
  REQUIRED_VALIDATION,
} from "../../constants/validations";

const UpdateAccountForm = (): React.ReactElement => {
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

    await console.log("submit");
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
        type="text"
        label="Senha"
        id="password"
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

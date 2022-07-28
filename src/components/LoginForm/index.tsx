import React, { useState } from "react";

import Form from "../Form";
import Input from "../Input";

import * as S from "./styles";
import {
  EMAIL_VALIDATION,
  REQUIRED_VALIDATION,
} from "../../constants/validations";

const LoginForm = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  return (
    <Form id="loginForm" onSubmit={() => console.log("olá")}>
      <Input
        id="email"
        width="80%"
        type="email"
        value={email}
        label="E-mail"
        isValid={(value) => setIsEmailValid(value)}
        onChange={(event) => setEmail(event.target.value)}
        validationCriteria={[REQUIRED_VALIDATION, EMAIL_VALIDATION]}
      />
    </Form>
  );
};

export default LoginForm;

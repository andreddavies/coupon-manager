import React, { useState } from "react";

import Form from "../Form";
import Input from "../Input";

import * as S from "./styles";

const LoginForm = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");

  return (
    <Form id="loginForm" onSubmit={() => console.log("olá")}>
      <Input
        id="email"
        width="80%"
        value={email}
        label="E-mail"
        validationCriteria={[""]}
        isValid={(value) => console.log(value)}
        onChange={(event) => setEmail(event.target.value)}
      />
    </Form>
  );
};

export default LoginForm;

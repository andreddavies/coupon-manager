import React from "react";

import Form from "../Form";

import * as S from "./styles";

const LoginForm = (): React.ReactElement => {
  return (
    <Form id="loginForm" onSubmit={() => console.log("olá")}>
      <h1>LoginForm</h1>
    </Form>
  );
};

export default LoginForm;

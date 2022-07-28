import React from "react";

import LoginForm from "../../../components/LoginForm";

import * as S from "./styles";

const Login = (): React.ReactElement => {
  return (
    <S.Container>
      <div>
        <h1>Login</h1>

        <LoginForm />
      </div>
    </S.Container>
  );
};

export default Login;

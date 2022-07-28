import React from "react";

import Heading from "../../../components/Heading";
import LoginForm from "../../../components/LoginForm";

import { useDeviceDetect } from "../../../hooks/useDeviceDetect";

import * as S from "./styles";

const Login = (): React.ReactElement => {
  const { isMobile } = useDeviceDetect();

  return (
    <S.Container>
      <S.TextWrapper>
        <Heading
          type="h2"
          weight="500"
          color="primary"
          size={isMobile ? 1.2 : 1.8}
        >
          <>
            Efetue seu <strong>login</strong>
          </>
        </Heading>
      </S.TextWrapper>

      <LoginForm />
    </S.Container>
  );
};

export default Login;

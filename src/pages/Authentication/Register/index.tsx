import React from "react";

import Heading from "../../../components/Heading";
import RegisterForm from "../../../components/RegisterForm";

import { useDeviceDetect } from "../../../hooks/useDeviceDetect";

import * as S from "./styles";

const Register = (): React.ReactElement => {
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
            Efetue seu <strong>cadastro</strong>
          </>
        </Heading>
      </S.TextWrapper>

      <RegisterForm />
    </S.Container>
  );
};

export default Register;

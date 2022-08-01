import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Heading from "../../../components/Heading";
import UpdateAccountForm from "../../../components/UpdateAccountForm";

import { RootState } from "../../../store";
import { useDeviceDetect } from "../../../hooks/useDeviceDetect";

import * as S from "./styles";

const Settings = (): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  const handleDeleteAccount = async (): Promise<void> => {
    await console.log("deleted");
  };

  useEffect(() => {
    if (!store.auth.token) {
      router("/");
    }
  }, [store, router]);

  return (
    <S.Container>
      <S.GoBackWrapper>
        <Heading
          pointer
          type="h2"
          weight="600"
          color="tertiary"
          size={isMobile ? 0.6 : 1}
          onClick={() => router("/dashboard")}
        >
          Voltar
        </Heading>
      </S.GoBackWrapper>

      <S.TextWrapper>
        <Heading
          type="h2"
          weight="500"
          color="primary"
          size={isMobile ? 1.2 : 1.8}
        >
          <>
            Atualize seus <strong>dados</strong>
          </>
        </Heading>
      </S.TextWrapper>

      <UpdateAccountForm />

      <S.FinishAccountWrapper>
        <Heading
          pointer
          type="h3"
          weight="600"
          color="primary"
          size={isMobile ? 1 : 1.2}
          onClick={() => handleDeleteAccount()}
        >
          Encerrar conta
        </Heading>
      </S.FinishAccountWrapper>
    </S.Container>
  );
};

export default Settings;

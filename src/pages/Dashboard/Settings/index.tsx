import React, { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Heading from "../../../components/Heading";
import UpdateAccountForm from "../../../components/UpdateAccountForm";

import { RootState } from "../../../store";
import UserAPI from "../../../services/UserAPI";
import { clearUser } from "../../../store/models/auth";
import { useDeviceDetect } from "../../../hooks/useDeviceDetect";

import * as S from "./styles";

const Settings = (): React.ReactElement => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  const handleDeleteAccount = async (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const deleted = await UserAPI.deleteUser(
        store.auth.id!,
        store.auth.token!
      );

      if (deleted) {
        alert(deleted.message);
        dispatch(clearUser());
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
          weight="900"
          color="primary"
          size={isMobile ? 1 : 1.2}
          onClick={() => dispatch(clearUser())}
        >
          SAIR
        </Heading>

        <Heading
          pointer
          type="h3"
          weight="600"
          color="danger"
          size={isMobile ? 1 : 1.2}
          onClick={(event) => handleDeleteAccount(event)}
        >
          Encerrar conta
        </Heading>
      </S.FinishAccountWrapper>
    </S.Container>
  );
};

export default Settings;

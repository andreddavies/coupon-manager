import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Heading from "../Heading";
import CenterContainer from "../CenterContainer";

import { Dispatch, RootState } from "../../store";
import { setTheme } from "../../store/models/theme";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import SettingIcon from "../../icons/SettingIcon";

import * as S from "./styles";

const Header = (): React.ReactElement => {
  const router = useNavigate();
  const dispatch = useDispatch<Dispatch>();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  return (
    <S.Container>
      <S.AbsoluteContainer>
        <S.Toggle
          onClick={() => {
            dispatch(
              setTheme({ theme: store.theme === "light" ? "dark" : "light" })
            );
          }}
        >
          Mudar tema
        </S.Toggle>

        {store.auth.authenticated && (
          <S.IconWrapper onClick={() => router("/dashboard/settings")}>
            <SettingIcon
              color="tertiary"
              width={isMobile ? 24 : 40}
              height={isMobile ? 24 : 40}
            />
          </S.IconWrapper>
        )}
      </S.AbsoluteContainer>

      <CenterContainer>
        <S.ContentContainer>
          <S.LogoContainer>
            <img
              alt="Logo do Gerenciador de Cupom"
              src={`/${store.theme}/logo1000.png`}
            />
          </S.LogoContainer>

          <Heading
            type="h1"
            weight="600"
            align="center"
            size={isMobile ? 1.15 : 2}
            color={store.theme === "light" ? "secondary" : "primary"}
          >
            {(store.auth.name && `Cupons de ${store.auth.name}`) ||
              "Gerenciador de cupons"}
          </Heading>
        </S.ContentContainer>
      </CenterContainer>
    </S.Container>
  );
};

export default Header;

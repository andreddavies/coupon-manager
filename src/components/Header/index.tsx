import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Heading from "../Heading";
import CenterContainer from "../CenterContainer";

import { RootState } from "../../store";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import SettingIcon from "../../icons/SettingIcon";

import * as S from "./styles";

const Header = (): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  return (
    <S.Container>
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
            Gerenciador de Cupons
          </Heading>
        </S.ContentContainer>
      </CenterContainer>

      <S.IconWrapper onClick={() => router("/dashboard/settings")}>
        <SettingIcon
          color="tertiary"
          width={isMobile ? 24 : 40}
          height={isMobile ? 24 : 40}
        />
      </S.IconWrapper>
    </S.Container>
  );
};

export default Header;

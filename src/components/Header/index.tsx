import React from "react";
import { useSelector } from "react-redux";

import Heading from "../Heading";
import CenterContainer from "../CenterContainer";

import { RootState } from "../../store";

import * as S from "./styles";

const Header = (): React.ReactElement => {
  const store = useSelector((state: RootState) => state);

  return (
    <S.Container>
      <CenterContainer>
        <S.ContentContainer>
          <S.LogoContainer>
            <img alt="Logo do Gerenciador de Cupom" src="/logo1000.png" />
          </S.LogoContainer>

          <Heading
            type="h1"
            size={1.15}
            weight="600"
            align="center"
            color={store.theme === "light" ? "secondary" : "primary"}
          >
            Gerenciador de Cupons
          </Heading>
        </S.ContentContainer>
      </CenterContainer>
    </S.Container>
  );
};

export default Header;

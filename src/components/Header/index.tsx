import React from "react";

import Heading from "../Heading";
import CenterContainer from "../CenterContainer";

import * as S from "./styles";

const Header = (): React.ReactElement => {
  return (
    <S.Container>
      <CenterContainer>
        <S.ContentContainer>
          <S.LogoContainer>
            <img alt="Logo do Gerenciador de Cupom" src="/logo1000.png" />
          </S.LogoContainer>

          <Heading
            align="center"
            type="h1"
            color="secondary"
            weight="600"
            size={1.15}
          >
            Gerenciador de Cupons
          </Heading>
        </S.ContentContainer>
      </CenterContainer>
    </S.Container>
  );
};

export default Header;

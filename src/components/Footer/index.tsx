import React from "react";
import { useSelector } from "react-redux";

import Heading from "../Heading";

import { RootState } from "../../store";

import * as S from "./styles";

const Footer = (): React.ReactElement => {
  const store = useSelector((state: RootState) => state);

  return (
    <S.Container>
      <Heading
        type="h4"
        size={1}
        weight="600"
        color={store.theme === "light" ? "secondary" : "primary"}
      >
        © Todos os direitos reservados!
      </Heading>
    </S.Container>
  );
};

export default Footer;

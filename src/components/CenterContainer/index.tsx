import React from "react";

import * as S from "./styles";

type Props = {
  width?: string;
  children: React.ReactElement | React.ReactElement[];
};

const CenterContainer = ({ width, children }: Props): React.ReactElement => {
  return <S.Container width={width}>{children}</S.Container>;
};

export default CenterContainer;

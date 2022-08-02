import React from "react";

import * as S from "./styles";

type TProps = {
  onClose: () => void;
};

const CloseButton = ({ onClose }: TProps): React.ReactElement => {
  return (
    <S.Container>
      <S.Button onClick={() => onClose()}>X</S.Button>
    </S.Container>
  );
};

export default CloseButton;

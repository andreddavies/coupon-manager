import React from "react";

import * as S from "./styles";

type TProps = {
  id: string;
  value: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Toggle = ({
  id,
  value,
  onChange,
  disabled = false,
}: TProps): React.ReactElement => {
  return (
    <S.Toggle
      id={id}
      active={value}
      type="checkbox"
      checked={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Toggle;

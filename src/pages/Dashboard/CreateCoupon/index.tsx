import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Heading from "../../../components/Heading";
import CouponForm from "../../../components/CouponForm";

import { RootState } from "../../../store";
import { useDeviceDetect } from "../../../hooks/useDeviceDetect";

import * as S from "./styles";

type Props = {};

const CreateCoupon = ({}: Props): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  useEffect(() => {
    if (!store.auth.authenticated) {
      router("/");
    }
  }, [store, router]);

  return (
    <S.Container>
      <Heading
        type="h2"
        weight="500"
        color="primary"
        size={isMobile ? 1.2 : 1.8}
      >
        <S.TextWrapper>
          <>
            Crie um <strong>cupom</strong>
          </>
        </S.TextWrapper>
      </Heading>

      <CouponForm formType="create" />
    </S.Container>
  );
};

export default CreateCoupon;

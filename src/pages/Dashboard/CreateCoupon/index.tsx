import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Heading from "../../../components/Heading";
import CouponForm from "../../../components/CouponForm";

import { RootState } from "../../../store";
import { useDeviceDetect } from "../../../hooks/useDeviceDetect";

import * as S from "./styles";

const CreateCoupon = (): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

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
            Crie um <strong>cupom</strong>
          </>
        </Heading>
      </S.TextWrapper>

      <CouponForm formType="create" />
    </S.Container>
  );
};

export default CreateCoupon;

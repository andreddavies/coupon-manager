import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/Heading";
import CouponList from "../../components/CouponList";
import CenterContainer from "../../components/CenterContainer";

import { RootState } from "../../store";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import * as S from "./styles";

const Dashboard = (): React.ReactElement => {
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
      <CenterContainer>
        <S.ContentWrapper>
          <Heading
            type="h2"
            weight="600"
            color="primary"
            size={isMobile ? 1.2 : 1.8}
          >
            Lista de cupons
          </Heading>

          <CouponList />
        </S.ContentWrapper>
      </CenterContainer>
    </S.Container>
  );
};

export default Dashboard;

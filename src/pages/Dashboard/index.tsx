import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../store";

import * as S from "./styles";

const Dashboard = (): React.ReactElement => {
  const router = useNavigate();
  const store = useSelector((state: RootState) => state);

  useEffect(() => {
    if (!store.auth.authenticated) {
      router("/");
    }
  }, [store]);

  return (
    <S.Container>
      <div>
        <h1>Dashboard</h1>
      </div>
    </S.Container>
  );
};

export default Dashboard;

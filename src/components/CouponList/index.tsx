import React from "react";

import CouponCard from "../CouponCard";

import * as S from "./styles";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CouponList = (): React.ReactElement => {
  return (
    <S.CouponList>
      {arr.map((el) => (
        <CouponCard key={el} />
      ))}
    </S.CouponList>
  );
};

export default CouponList;

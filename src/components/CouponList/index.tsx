import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import Paragraph from "../Paragraph";
import CouponCard from "../CouponCard";
import CouponModal from "../CouponModal";

import { RootState } from "../../store";
import CouponAPI from "../../services/CouponAPI";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import * as S from "./styles";
import type { TCoupon } from "./types";

const CouponList = (): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  const [couponList, setCouponList] = useState<TCoupon[]>([]);

  const [editModal, setEditModal] = useState<boolean>(false);
  const [targetCoupon, setTargetCoupon] = useState<TCoupon>();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const handleCouponList = async (): Promise<void> => {
    try {
      const data = await CouponAPI.list(store.auth.token!);

      setCouponList(data.coupon_list);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleCouponList();
  }, []);

  return (
    <S.CouponList>
      <Button
        text="Criar cupom"
        onClick={() => router("/dashboard/create-coupon")}
        btnStyle={store.theme === "light" ? "primary" : "secondary"}
      />
      {(editModal || deleteModal) && (
        <>
          <S.Backdrop
            onClick={() => {
              setEditModal(false);
              setDeleteModal(false);
            }}
          />
          <CouponModal
            setClose={() => {
              setEditModal(false);
              setDeleteModal(false);
            }}
            data={targetCoupon as TCoupon}
            type={editModal ? "edit" : "delete"}
          />
        </>
      )}

      {couponList?.length === 0 && (
        <Paragraph color="primary" weight="600" size={isMobile ? 1.2 : 1.8}>
          Você ainda não tem nenhum cupom
        </Paragraph>
      )}

      {couponList
        ?.sort((a, b) => {
          return b.discount_percentage - a.discount_percentage;
        })
        .map((data) => (
          <CouponCard
            key={data._id}
            data={data}
            setModal={(value) => {
              setTargetCoupon(data);
              window.scrollTo({ top: 0 });
              value === "edit" ? setEditModal(true) : setDeleteModal(true);
            }}
          />
        ))}
    </S.CouponList>
  );
};

export default CouponList;

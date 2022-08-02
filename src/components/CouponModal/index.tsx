import React from "react";
import axios, { AxiosError } from "axios";
import { useSelector } from "react-redux";

import Button from "../Button";
import Paragraph from "../Paragraph";
import CouponForm from "../CouponForm";
import CloseButton from "../CloseButton";

import { RootState } from "../../store";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import CouponAPI from "../../services/CouponAPI";

import * as S from "./styles";

type TProps = {
  data: {
    _id: string;
    link: string;
    logo: string;
    code: string;
    due_date: Date;
    description: string;
    company_name: string;
    discount_percentage: number;
    status: "active" | "inactive";
  };
  setClose: () => void;
  type: "edit" | "delete";
};

const CouponModal = ({ type, data, setClose }: TProps): React.ReactElement => {
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  const handleDelete = async (): Promise<void> => {
    try {
      const deleted = await CouponAPI.deleteCoupon(data._id, store.auth.token!);

      alert(deleted.message);
      window.location.reload();
    } catch (err) {
      const errors = err as Error | AxiosError;

      if (axios.isAxiosError(errors)) {
        if (!errors.response) throw new Error("Erro inesperado!");
        else
          alert(
            (errors.response?.data as { message: string }).message as string
          );
      }
    }
  };

  return (
    <S.Container type={type}>
      <CloseButton onClose={() => setClose()} />
      {type === "edit" ? (
        <CouponForm formType="update" updateData={data} />
      ) : (
        <S.DeleteContainer>
          <Paragraph
            weight="500"
            size={isMobile ? 1.2 : 1.8}
            color={store.theme === "light" ? "primary" : "secondary"}
          >
            Deseja excluir esse cupom?
          </Paragraph>

          <Button
            btnStyle="primary"
            text="Excluir"
            onClick={() => handleDelete()}
          />
          <Button
            text="Cancelar"
            btnStyle="secondary"
            onClick={() => setClose()}
          />
        </S.DeleteContainer>
      )}
    </S.Container>
  );
};

export default CouponModal;

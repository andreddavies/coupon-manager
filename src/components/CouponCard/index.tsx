import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useSelector } from "react-redux";

import Paragraph from "../Paragraph";
import TrashIcon from "../../icons/TrashIcon";
import PencilIcon from "../../icons/PencilIcon";

import { RootState } from "../../store";
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import * as S from "./styles";
import CouponAPI from "../../services/CouponAPI";

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
  setModal: (value: "edit" | "delete") => void;
};

const CouponCard = ({ data, setModal }: TProps): React.ReactElement => {
  const { isMobile } = useDeviceDetect();
  const store = useSelector((state: RootState) => state);

  const now = Date.now();
  const due_date = new Date(
    `${data.due_date.toString().split("T")[0]}T03:00:00.000Z`
  ).getTime();
  let difference = due_date - now;

  const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;
  const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;
  const minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;
  const [secondsDifference, setSecondsDifference] = useState<number>(0);

  const urgent =
    daysDifference === 0 &&
    hoursDifference === 0 &&
    minutesDifference === 0 &&
    secondsDifference >= 0;

  useEffect(() => {
    if (
      (urgent && minutesDifference && secondsDifference === 1) ||
      daysDifference < 0
    ) {
      (async () => {
        try {
          const deleted = await CouponAPI.deleteCoupon(
            data._id,
            store.auth.token!
          );

          if (deleted) {
            window.location.reload();
          }
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
      })();
    }

    setTimeout(() => {
      setSecondsDifference(Math.floor(difference / 1000));
    }, 1000);
  }, [secondsDifference]);

  return (
    <S.Card urgent={urgent}>
      <S.CardHeader>
        <S.CompanyLogo
          alt="Logo da Coupon Manager"
          src={`http://localhost:4000/${data.logo}`}
        />

        <S.ClickableWrapper>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://${data.link}`}
            style={{ fontSize: "0.7rem", color: urgent ? "#fff" : "#0000ff" }}
          >
            Ver cupom
          </a>

          <S.IconWrapper urgent={urgent} onClick={() => setModal("edit")}>
            <PencilIcon
              width={24}
              height={24}
              color={urgent ? "urgent" : "default"}
            />
          </S.IconWrapper>

          <S.IconWrapper urgent={urgent} onClick={() => setModal("delete")}>
            <TrashIcon
              width={24}
              height={24}
              color={urgent ? "urgent" : "default"}
            />
          </S.IconWrapper>
        </S.ClickableWrapper>
      </S.CardHeader>

      <S.InfoContainer>
        <Paragraph
          color={urgent ? "urgent" : "secondary"}
          weight="600"
          size={isMobile ? 1 : 1.8}
        >
          <>Código: {data.code}</>
        </Paragraph>

        <Paragraph
          color={urgent ? "urgent" : "secondary"}
          weight="500"
          size={isMobile ? 0.8 : 1.8}
        >
          <>Descrição: {data.description}</>
        </Paragraph>

        <Paragraph
          color={urgent ? "urgent" : "secondary"}
          weight="600"
          size={isMobile ? 0.8 : 1.8}
        >
          <>
            {daysDifference} dias
            <br />
            {hoursDifference}:{String(minutesDifference).padStart(2, "0")}:
            {String(secondsDifference).padStart(2, "0")}
          </>
        </Paragraph>

        <Paragraph
          color={urgent ? "urgent" : "secondary"}
          weight="500"
          size={isMobile ? 0.8 : 1.8}
        >
          <>
            Nome da loja: <strong>{data.company_name}</strong>
          </>
        </Paragraph>

        <Paragraph
          color={urgent ? "urgent" : "secondary"}
          weight="500"
          size={isMobile ? 0.8 : 1.8}
        >
          <>{data.discount_percentage}%</>
        </Paragraph>

        <Paragraph
          color={urgent ? "urgent" : "secondary"}
          weight="600"
          size={isMobile ? 0.8 : 1.8}
        >
          {data.status === "active" ? "Ativo" : "Inativo"}
        </Paragraph>
      </S.InfoContainer>
    </S.Card>
  );
};

export default CouponCard;

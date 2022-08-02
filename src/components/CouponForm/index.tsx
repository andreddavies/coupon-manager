import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useSelector } from "react-redux";

import Form from "../Form";
import Input from "../Input";
import Toggle from "../Toggle";
import Paragraph from "../Paragraph";
import InputFile from "../InputFile";

import { RootState } from "../../store";
import { useMasks } from "../../hooks/useMasks";
import CouponAPI from "../../services/CouponAPI";
import { ICreateCouponReq } from "../../interfaces/ICoupon";

import * as S from "./styles";
import { REQUIRED_VALIDATION } from "../../constants/validations";

type Props = {
  formType: "create" | "update";
  updateData?: {
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
};

const CouponForm = ({ formType, updateData }: Props): React.ReactElement => {
  const store = useSelector((state: RootState) => state);

  const [status, setStatus] = useState<boolean>(
    updateData?.status === "active"
  );
  const [dueDate, setDueDate] = useState<string>(
    updateData?.due_date
      .toLocaleString("pt-BR")
      .split("T")[0]
      .split("-")
      .reverse()
      .join("-") || ""
  );
  const [companyName, setCompanyName] = useState<string>(
    updateData?.company_name || ""
  );
  const [description, setDescription] = useState<string>(
    updateData?.description || ""
  );
  const [link, setLink] = useState<string>(updateData?.link || "");
  const [code, setCode] = useState<string>(updateData?.code || "");
  const [companyLogo, setCompanyLogo] = useState<File | FileList>();
  const [discountPercentage, setDiscountPercentage] = useState<string>(
    updateData?.discount_percentage.toString() || ""
  );

  const dueDateMasked = useMasks().useDate(dueDate);

  const [isCodeValid, setIsCodeValid] = useState<boolean>(false);
  const [isLinkValid, setIsLinkValid] = useState<boolean>(false);
  const [isDiscountPercentageValid, setIsDiscountPercentageValid] =
    useState<boolean>(false);
  const [isDueDateValid, setIsDueDateValid] = useState<boolean>(false);
  const [isCompanyNameValid, setIsCompanyNameValid] = useState<boolean>(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState<boolean>(false);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleChangeCapture = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    if (!!file && file.type.substring(0, 5) === "image") {
      setCompanyLogo((target.files as FileList)[0] as File);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const reverseDueDate = dueDate.split("-").reverse().join("-");

    const userData = {
      code,
      link,
      description,
      logo: companyLogo as File,
      company_name: companyName,
      due_date: reverseDueDate,
      status: status ? "active" : "inactive",
      discount_percentage: parseInt(discountPercentage),
    };

    try {
      const data = await CouponAPI[formType === "create" ? "create" : "update"](
        { ...(userData as ICreateCouponReq), id: updateData?._id as string },
        store.auth.token!
      );

      if (data) {
        alert(
          formType === "create"
            ? "Cupom criado com sucesso!"
            : "Cupom atualizado com sucesso!"
        );
        window.scrollTo({ top: 0 });
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
  };

  useEffect(() => {
    setIsFormValid(
      formType === "update"
        ? true
        : isCodeValid &&
            isLinkValid &&
            !!companyLogo &&
            isDueDateValid &&
            isCompanyNameValid &&
            isDescriptionValid &&
            isDiscountPercentageValid
    );
  }, [
    formType,
    isCodeValid,
    isLinkValid,
    companyLogo,
    isDueDateValid,
    isCompanyNameValid,
    isDescriptionValid,
    isDiscountPercentageValid,
  ]);

  return (
    <Form
      id="couponForm"
      onSubmit={handleSubmit}
      buttonDisabled={!isFormValid}
      encType="multipart/form-data"
      buttonText={formType === "create" ? "Criar" : "Atualizar"}
    >
      <Input
        width="80%"
        type="text"
        id="companyName"
        value={companyName}
        marginVertical={0.25}
        label="Nome da empresa"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsCompanyNameValid(value)}
        onChange={(event) => setCompanyName(event.target.value)}
      />

      <Input
        width="80%"
        type="text"
        id="description"
        value={description}
        marginVertical={0.25}
        label="Descrição do cupom"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsDescriptionValid(value)}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Input
        id="code"
        width="80%"
        type="text"
        value={code}
        marginVertical={0.25}
        label="Código do cupom"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsCodeValid(value)}
        onChange={(event) => setCode(event.target.value)}
      />

      <Input
        id="link"
        width="80%"
        type="text"
        value={link}
        marginVertical={0.25}
        label="Link do cupom"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsLinkValid(value)}
        onChange={(event) => setLink(event.target.value)}
      />

      <Input
        width="80%"
        type="text"
        id="dueDate"
        maxLength={10}
        value={dueDateMasked}
        marginVertical={0.25}
        label="Validade do cupom"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsDueDateValid(value)}
        onChange={(event) => setDueDate(event.target.value)}
      />

      <S.ToggleContainer>
        <Paragraph
          size={1}
          weight="500"
          color={store.theme === "light" ? "primary" : "secondary"}
        >
          Status:
        </Paragraph>

        <S.ToggleWrapper>
          <Toggle
            id="status"
            value={status}
            onChange={() => setStatus(!status)}
          />

          <S.Span>{status ? "Ativo" : "Inativo"}</S.Span>
        </S.ToggleWrapper>
      </S.ToggleContainer>

      <InputFile
        width="80%"
        id="couponImage"
        onChangeCapture={handleChangeCapture}
      />

      <Input
        width="80%"
        type="number"
        marginVertical={0.25}
        id="discountPercentage"
        value={discountPercentage}
        label="Porcentagem de desconto"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsDiscountPercentageValid(value)}
        onChange={(event) => setDiscountPercentage(event.target.value)}
      />
    </Form>
  );
};

export default CouponForm;

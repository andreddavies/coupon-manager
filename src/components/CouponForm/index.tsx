import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../Form";
import Input from "../Input";

import { useDeviceDetect } from "../../hooks/useDeviceDetect";

import * as S from "./styles";
import { REQUIRED_VALIDATION } from "../../constants/validations";

type Props = {
  formType: "create" | "update";
};

const CouponForm = ({ formType }: Props): React.ReactElement => {
  const router = useNavigate();
  const { isMobile } = useDeviceDetect();

  const [code, setCode] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [companyLogo, setCompanyLogo] = useState<File | FileList>();
  const [discountPercentage, setDiscountPercentage] = useState<string>("");

  const [isCodeValid, setIsCodeValid] = useState<boolean>(false);
  const [isLinkValid, setIsLinkValid] = useState<boolean>(false);
  const [isDiscountPercentageValid, setIsDiscountPercentageValid] =
    useState<boolean>(false);
  const [isStatusValid, setIsStatusValid] = useState<boolean>(false);
  const [isDueDateValid, setIsDueDateValid] = useState<boolean>(false);
  const [isCompanyNameValid, setIsCompanyNameValid] = useState<boolean>(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState<boolean>(false);
  const [isCompanyLogoValid, setIsCompanyLogoValid] = useState<boolean>(false);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    await console.log("submit");
  };

  useEffect(() => {
    setIsFormValid(
      isCodeValid &&
        isLinkValid &&
        isStatusValid &&
        isDueDateValid &&
        isCompanyNameValid &&
        isDescriptionValid &&
        isCompanyLogoValid &&
        isDiscountPercentageValid
    );
  }, [
    isCodeValid,
    isLinkValid,
    isStatusValid,
    isDueDateValid,
    isCompanyNameValid,
    isDescriptionValid,
    isCompanyLogoValid,
    isDiscountPercentageValid,
  ]);

  return (
    <Form
      id="couponForm"
      onSubmit={handleSubmit}
      buttonDisabled={!isFormValid}
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
        value={dueDate}
        marginVertical={0.25}
        label="Validade do cupom"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsDueDateValid(value)}
        onChange={(event) => setDueDate(event.target.value)}
      />

      {/* <Input // create toggle
        width="80%"
        type="text"
        id="status"
        value={status}
        marginVertical={0.25}
        label="Status do cupom"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsStatusValid(value)}
        onChange={(event) => setStatus(Boolean(event.target.value))}
      /> */}

      {/* <Input // create input type file
        width="80%"
        type="text"
        id="companyLogo"
        value={companyLogo}
        marginVertical={0.25}
        label="Logo da empresa. Clique aqui"
        validationCriteria={[REQUIRED_VALIDATION]}
        isValid={(value) => setIsCompanyLogoValid(value)}
        onChange={(event) => setCompanyLogo(event.target.value)}
      /> */}

      <Input
        width="80%"
        type="text"
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

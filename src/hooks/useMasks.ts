import { useState, useEffect } from "react";

type TUseMasks = {
  useDate: (data: string) => string;
};

const useDate = (data: string): string => {
  const [maskedDate, setMaskedDate] = useState<string>("");

  const dataReplacer = (): string => {
    return data
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{1,2})/, "$1-$2")
      .replace(/(\d{2})(\d{1,4})/, "$1-$2");
  };

  useEffect(() => {
    setMaskedDate(dataReplacer());
  }, [data]);

  return maskedDate;
};

export const useMasks = (): TUseMasks => ({
  useDate,
});

export const REQUIRED_VALIDATION = {
  criterionRegExp: /\w+/,
  errorMessage: "Campo obrigatório",
};

export const EMAIL_VALIDATION = {
  criterionRegExp:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  errorMessage: "E-mail inválido",
};

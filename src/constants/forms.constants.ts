export const FORMS = {
  FIELDS: {
    EMAIL: "email",
    NAME: "name",
    PASSWORD: "password",
    PASSWORD_CONFIRMATION: "passwordConfirmation",
  },
  ERRORS: {
    UNABLE_TO_CREATE_USER:
      "Não foi possível cadastrar o usuário. \nTente novamente mais tarde.",
    UNABLE_TO_SIGN_IN: "Verifique suas credencias e tente novamente.",
    EMAIL_ALREADY_IN_USE: "E-mail já está em uso",
    INVALID_EMAIL: "Digite um E-mail válido",
    REQUIRED_FIELD: "Campo obrigatório",
    INVALID_CREDENTIALS: "E-mail/Senha inválido",
    MIN_PASSWORD_LEN: "A senha deve ter pelo menos 6 caracteres.",
    DIFFERENT_PASSWORDS: "As senhas devem ser iguais",
  },
  SUCCESS: {
    USER_CREATED: "Usuário cadastrado com sucesso!",
  },
};

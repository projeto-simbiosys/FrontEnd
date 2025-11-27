// utils/handleApiError.ts
export function handleApiError(error) {
  const errors = {
    400: "Requisição inválida.",
    404: "Recurso não encontrado.",
    500: "Erro do servidor. Tente novamente mais tarde. ou entre em contato com o suporte.",
  };

  if (!error?.response) {
    return "Erro de conexão. Verifique sua internet.";
  }

  const { status, data } = error.response;

  return errors[status] || data?.message;
}

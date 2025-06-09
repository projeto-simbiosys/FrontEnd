export default function registerUserAdapter(newUserInfos) {
  return {
    nome: newUserInfos.firstName,
    sobrenome: newUserInfos.lastName,
    cargo: newUserInfos.role,
    email: newUserInfos.email,
    senha: newUserInfos.password,
    token: newUserInfos.token,
  };
}

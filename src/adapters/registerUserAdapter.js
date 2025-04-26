export default function registerUserAdapter(newUserInfos) {
  console.log(newUserInfos);
  return {
    nome: newUserInfos.firstName,
    sobrenome: newUserInfos.lastName,
    cargo: newUserInfos.role,
    email: newUserInfos.email,
    senha: newUserInfos.password,
  };
}

export default function userLoginAdapter(userInfos) {
  return {
    email: userInfos.email,
    senha: userInfos.password,
  };
}

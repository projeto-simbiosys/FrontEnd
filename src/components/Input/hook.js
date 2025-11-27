import { useState } from "react";

export default function useInput(type) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return {
    input: {
      isPassword,
      showPassword,
      type: inputType,
      tooglePassword: () => setShowPassword(!showPassword),
    },
  };
}

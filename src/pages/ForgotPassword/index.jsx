import Button from "@/components/Button";
import Input from "@/components/Input";
import useTitlePage from "@/hooks/useTitlePage";
import { useState } from "react";
import { sendForgotPasswordEmail } from "../../services/mailtrap";

export default function ForgotPassword() {
  useTitlePage("simbiosys | Redefinir senha");

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    sendForgotPasswordEmail(email);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
        <div className="flex flex-col items-center bg-white w-full max-w-sm rounded-2xl p-6 shadow-lg">
          {!success ? (
            <h2 className="text-lg font-semibold">Insira seu e-mail</h2>
          ) : (
            <h2 className="text-lg font-semibold">E-mail enviado!</h2>
          )}

          {!success ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-3 m-3"
            >
              <Input
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full border rounded-xl p-2"
              />
              <Button variant="sys-primary" type="submit">
                Enviar link de acesso
              </Button>
            </form>
          ) : (
            <div className="text-center p-2 text-sm">
              <p>Enviamos um link para seu e-mail!</p>
              <p className="text-gray-500">Verifique sua caixa de entrada.</p>
            </div>
          )}

          <Button
            variant="sys-secondary"
            onClick={() => {
              setSuccess(false);
            }}
          >
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
}

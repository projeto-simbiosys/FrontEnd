import Button from "@/components/Button";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { resetPassword } from "../../services/api";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState(null);
  const params = useParams();

  useEffect(() => {
    console.log(params);
    const userEmail = params.email;

    console.log(userEmail);
    setEmail(userEmail);
  }, []);

  const MIN_LENGTH = 6;

  function validate() {
    setError("");
    if (!email) return "Email ausente. Abra o link do e-mail.";
    if (!password || !confirm) return "Preencha ambos os campos.";
    if (password.length < MIN_LENGTH)
      return `A senha precisa ter ao menos ${MIN_LENGTH} caracteres.`;
    if (password !== confirm) return "As senhas não conferem.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      const res = await resetPassword(email, password);

      // const data = await res.data;
      if (!res.ok) {
        setSuccess(
          "Senha atualizada com sucesso! Você já pode entrar com a nova senha."
        );
        setPassword("");
        setConfirm("");
        setInterval(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        console.log(res);
      }
    } catch (err) {
      setError(err.message || "Erro de rede.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow rounded-2xl w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-2 text-center">
          Redefinir senha
        </h1>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Insira a nova senha e confirme para salvar.
        </p>

        {!email && (
          <div className="mb-4 p-3 bg-yellow-50 text-yellow-800 rounded">
            Email ausente na URL. Abra o link enviado por e-mail.
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-800 rounded">{error}</div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-50 text-green-800 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nova senha</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                minLength={MIN_LENGTH}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Digite a nova senha"
                autoComplete="new-password"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Mínimo {MIN_LENGTH} caracteres.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirmar senha
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Repita a nova senha"
                autoComplete="new-password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm select-none">
              <input
                type="checkbox"
                checked={show}
                onChange={() => setShow(s => !s)}
                className="mr-2"
              />
              Mostrar senha
            </label>

            <Button type="submit" variant="sys-primary" disabled={loading}>
              {loading ? "Salvando..." : "Salvar senha"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

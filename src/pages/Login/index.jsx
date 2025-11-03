import Button from "@/components/Button";
import Input from "@/components/Input";
import Heading from "@/components/Heading";
import Typography from "@/components/Typography";
import useTitlePage from "@/hooks/useTitlePage";
import ArrowRight from "@/icons/ArrowRight";
import Logo from "/logo-sistema-horizontal.png";
import { Link } from "react-router-dom";
import useRegister from "./hook";
import InputError from "@/components/InputError";
import Loading from "@/icons/Loading";
import Notification from "@/components/Notification";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  useTitlePage("simbiosys | login");
  const { form, navigate } = useRegister();

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen px-4 py-12 md:py-16 lg:p-0 bg-gradient-to-tl from-sys-tertiary to-sys-secondary">
      <div className="bg-white lg:bg-transparent flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0 w-full max-w-md md:max-w-lg lg:max-w-full lg:h-screen rounded-lg lg:rounded-none px-4 md:px-8 py-6 md:py-8 lg:p-0">
        <Notification
          type={form.request.status.type}
          title={form.request.status.type === "success" ? "Sucesso" : "Falha"}
          body={form.request.status.message}
          show={form.showNotification}
        />
        <div className="flex flex-col items-center gap-6 w-full lg:px-12 lg:pt-14 lg:pb-52 lg:max-w-xl lg:h-screen lg:justify-between lg:bg-[url(/bg-detail.png)] lg:bg-center lg:bg-cover lg:bg-white">
          <div className="w-full">
            <Link className="flex items-center gap-2" to="/">
              <ArrowRight className="stroke-sys-main rotate-180 h-[25px] w-[25px]" />
              <Typography
                size="base"
                weight="semibold"
                className="text-sys-main underline"
              >
                ir ao início
              </Typography>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-6">
            <picture>
              <source
                media="(min-width: 1152px)"
                srcSet="/logo-sistema-vertical.png"
              />
              <img
                src={Logo}
                alt="logo da empresa"
                className="h-10 md:h-12 lg:h-48"
              />
            </picture>

            <div>
              <Heading
                level={3}
                weight="bold"
                className="text-sys-main text-center md:text-3xl"
              >
                Faça login na sua conta
              </Heading>
              <Typography
                size="base"
                weight="normal"
                className="block w-full text-center"
              >
                Digite seu e-mail e senha para fazer login!
              </Typography>
            </div>
          </div>

          <p className="hidden gap-1.5 lg:flex">
            Não tem uma conta?
            <Link to="/register" className="text-sys-main underline">
              Cadastre-se aqui
            </Link>
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(form.onSubmit)}
          className="w-full lg:max-w-3xl flex flex-col gap-2.5 lg:gap-3 lg:px-20 lg:h-screen lg:justify-center lg:mx-auto"
        >
          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              E-Mail:
            </Typography>
            <Input
              disabled={form.request.isLoading}
              hasError={form.inputs.email.hasError}
              placeholder="Digite seu email..."
              type="text"
              {...form.register("email")}
            />
            {form.inputs.email.hasError && (
              <InputError message={form.inputs.email.errorMessage} />
            )}
          </label>

          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              Senha:
            </Typography>
            <Input
              disabled={form.request.isLoading}
              hasError={form.inputs.password.hasError}
              placeholder="Digite uma senha..."
              type="password"
              {...form.register("password")}
            />
            {form.inputs.password.hasError && (
              <InputError message={form.inputs.password.errorMessage} />
            )}
          </label>

          <Link
            to="/forgot-password"
            className="self-end text-sys-main underline text-sm font-bold"
          >
            Esqueci minha senha
          </Link>

          <div className="flex flex-col items-center gap-2 justify-center mt-4">
            <div>
              <Button
                variant="sys-primary"
                type="submit"
                disabled={
                  form.request.status.isLoading || form.request.status.isSuccess
                }
              >
                {form.request.status.isLoading ? (
                  <>
                    <Loading
                      width={20}
                      height={20}
                      className="stroke-gray-detail-disabled"
                    />
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </div>
            <GoogleLogin
              onSuccess={credentialRespons => {
                localStorage.setItem("token", credentialRespons.credential);
                navigate("/admin/reports");
              }}
              onError={() => {
                console.log("Erro no login");
              }}
            />
          </div>
        </form>

        <p className="flex gap-1.5 lg:hidden">
          Não tem uma conta?
          <Link to="/register" className="text-sys-main underline">
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

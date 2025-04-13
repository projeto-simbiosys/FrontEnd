import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Heading from "../../components/Heading";
import Typography from "../../components/Typography";
import useTitlePage from "../../hooks/useTitlePage";
import ArrowRight from "../../icons/ArrowRight";
import Logo from "/logo-sistema-horizontal.png";
import { Link } from "react-router-dom";
import useRegister from "./hook";
import Warning from "../../icons/Warning";
import InputError from "../../components/InputError";

export default function Register() {
  useTitlePage("simbiosys | cadastro");
  const { form } = useRegister();

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-12 md:py-16 lg:p-0 bg-gradient-to-tl from-sys-tertiary to-sys-secondary">
      <div className="bg-white lg:bg-transparent flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0 w-full max-w-md md:max-w-lg lg:max-w-full lg:h-screen rounded-lg lg:rounded-none px-4 md:px-8 py-6 md:py-8 lg:p-0">
        <div className="flex flex-col items-center gap-6 w-full lg:px-12 lg:pt-14 lg:pb-52 lg:max-w-xl lg:h-screen lg:justify-between lg:bg-[url(/bg-detail.png)] lg:bg-center lg:bg-cover lg:bg-white">
          <div className="w-full">
            <Link className="flex items-center gap-2" to="/home">
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
                Cadastre-se
              </Heading>
              <Typography
                size="base"
                weight="normal"
                className="block w-full text-center"
              >
                Crie uma conta para continuar
              </Typography>
            </div>
          </div>

          <p className="hidden gap-1.5 lg:flex">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-sys-main underline">
              Entre aqui
            </Link>
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(form.onSubmit)}
          className="w-full lg:max-w-3xl flex flex-col gap-2.5 lg:gap-3 lg:px-20 lg:h-screen lg:justify-center lg:mx-auto"
        >
          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              Nome:
            </Typography>
            <Input
              disabled={false}
              hasError={form.inputs.firstName.hasError}
              placeholder="Digite seu nome..."
              type="text"
              {...form.register("firstName")}
            />
            {form.inputs.firstName.hasError && (
              <InputError message={form.inputs.firstName.errorMessage} />
            )}
          </label>

          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              Sobrenome:
            </Typography>
            <Input
              disabled={false}
              hasError={form.inputs.lastName.hasError}
              placeholder="Digite seu sobrenome..."
              type="text"
              {...form.register("lastName")}
            />
            {form.inputs.lastName.hasError && (
              <InputError message={form.inputs.lastName.errorMessage} />
            )}
          </label>

          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              Cargo:
            </Typography>
            <Select
              defaultValue=""
              hasError={form.inputs.role.hasError}
              {...form.register("role")}
            >
              <option value="">Escolha um cargo</option>
              <option value="assistente">Assistente Social</option>
            </Select>
            {form.inputs.role.hasError && (
              <InputError message={form.inputs.role.errorMessage} />
            )}
          </label>

          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              E-Mail:
            </Typography>
            <Input
              disabled={false}
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
              disabled={false}
              hasError={form.inputs.password.hasError}
              placeholder="Digite uma senha..."
              type="password"
              {...form.register("password")}
            />
            {form.inputs.password.hasError && (
              <InputError message={form.inputs.password.errorMessage} />
            )}
          </label>

          <label>
            <Typography size="sm" weight="semibold" className="lg:text-white">
              Confirmação da Senha:
            </Typography>
            <Input
              disabled={false}
              hasError={form.inputs.confirmPassword.hasError}
              placeholder="Confirme sua senha..."
              type="password"
              {...form.register("confirmPassword")}
            />
            {form.inputs.confirmPassword.hasError && (
              <InputError message={form.inputs.confirmPassword.errorMessage} />
            )}
          </label>

          <div className="flex justify-center mt-4">
            <Button variant="sys-primary" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>

        <p className="flex gap-1.5 lg:hidden">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-sys-main underline">
            Entre aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Heading from "../../components/Heading";
import Typography from "../../components/Typography";
import useTitlePage from "../../hooks/useTitlePage";
import ArrowRight from "../../icons/ArrowRight";
import Logo from "/logo-sistema.png";
import { Link } from "react-router-dom";

export default function Register() {
  useTitlePage("simbiosys | cadastro");

  return (
    <div className="flex flex-col gap-6 px-4 py-12 bg-gradient-to-tl from-sys-tertiary to-sys-secondary">
      <Link className="flex items-center gap-2" to="/home">
        <ArrowRight className="stroke-white rotate-180 h-[25px] w-[25px]" />
        <Typography
          size="base"
          weight="semibold"
          className="text-white underline"
        >
          Voltar ao início
        </Typography>
      </Link>

      <div className="flex flex-col items-center gap-6 bg-white rounded-lg px-4 py-6">
        <img src={Logo} alt="logo da empresa" className="h-7" />

        <div>
          <Heading
            level={3}
            weight="bold"
            className="text-sys-main text-center"
          >
            Cadastre-se
          </Heading>
          <Typography size="base" weight="normal">
            Crie uma conta para continuar
          </Typography>
        </div>

        <form className="w-full flex flex-col gap-2.5">
          <label>
            <Typography size="sm" weight="semibold">
              Nome:
            </Typography>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Digite seu nome..."
              type="text"
            />
          </label>

          <label>
            <Typography size="sm" weight="semibold">
              Sobrenome:
            </Typography>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Digite seu sobrenome..."
              type="text"
            />
          </label>

          <label>
            <Typography size="sm" weight="semibold">
              Cargo:
            </Typography>
            <Select>
              <option value="#">Escolha um cargo</option>
              <option value="assistente">Assistente Social</option>
            </Select>
          </label>

          <label>
            <Typography size="sm" weight="semibold">
              E-Mail:
            </Typography>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Digite seu email..."
              type="text"
            />
          </label>

          <label>
            <Typography size="sm" weight="semibold">
              Senha:
            </Typography>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Digite uma senha..."
              type="password"
            />
          </label>

          <label>
            <Typography size="sm" weight="semibold">
              Confirmação da Senha:
            </Typography>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Confirme sua senha..."
              type="password"
            />
          </label>

          <div className="flex justify-center mt-4">
            <Button variant="sys-primary">Cadastrar</Button>
          </div>
        </form>

        <p className="flex gap-1.5">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-sys-main underline">
            Entre aqui
          </Link>
        </p>
      </div>
    </div>
  );
}

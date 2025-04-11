import Button from "../../components/Button";
import Input from "../../components/Input";
import ArrowRight from "../../icons/ArrowRight";
import Logo from "/logo-sistema.png";

export default function Register() {
  return (
    <div className="flex flex-col gap-6 px-4 py-12 bg-gradient-to-tl from-sys-tertiary to-sys-secondary">
      <Button variant="inst-link">
        <ArrowRight className="stroke-white rotate-180 h-[25px] w-[25px]" />
        <span className="text-white underline">Voltar</span>
      </Button>

      <div className="flex flex-col items-center gap-6 bg-white rounded-lg px-4 py-6">
        <img src={Logo} alt="logo da empresa" className="h-7" />

        <div>
          <h1 className="text-2xl font-semibold text-center text-sys-main">
            Cadastre-se
          </h1>
          <p className="text-base text-center text-black">
            Crie uma conta para continuar
          </p>
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <label>
            <span className="text-sm font-semibold">Nome:</span>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Digite seu nome..."
              type="text"
            />
          </label>

          <label>
            <span className="text-sm font-semibold">Sobrenome:</span>
            <Input
              disabled={false}
              hasError={false}
              placeholder="Digite seu sobrenome..."
              type="text"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

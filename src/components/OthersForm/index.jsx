import Heading from "../Heading";
import Typography from "../Typography";
import Input from "../Input";
import { useFormContext } from "react-hook-form";

export default function OthersForm() {
  const { register } = useFormContext();

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <Heading
        level={2}
        weight="semibold"
        className="self-start text-lg text-sys-main"
      >
        Outros Números
      </Heading>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:items-end gap-6 lg:px-6">
        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Alimentação
          </Typography>
          <Input {...register("feeding")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Cestas Básicas doadas
          </Typography>
          <Input {...register("basicFood")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Kits de Higiene doados
          </Typography>
          <Input {...register("kitsHygiene")} />
        </label>
      </div>
    </div>
  );
}

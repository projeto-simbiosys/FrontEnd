import React from "react";
import Heading from "../Heading";
import Typography from "../Typography";
import Input from "../Input";
import { useFormContext } from "react-hook-form";

export default function ReferralsForm() {
  const { register } = useFormContext();

  return (
    <div className="w-full flex items-center flex-col gap-4">
      <Heading
        level={2}
        weight="semibold"
        className="self-start text-lg text-sys-main"
      >
        Encaminhamentos Realizados
      </Heading>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:items-end gap-6 lg:px-6">
        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            CRAS/CREAS/CENTRO POP/SAS
          </Typography>
          <Input {...register("socialAssistance")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Cursos profissionalizantes (dentro da organização)
          </Typography>
          <Input {...register("professionalCoursesInsideOrg")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Documentos
          </Typography>
          <Input {...register("documents")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Tratamento álcool e/ou outras drogas
          </Typography>
          <Input {...register("treatment")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Programas de Transferência de Renda (PTR)
          </Typography>
          <Input {...register("PTR")} />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Defensoria Pública/Outras políticas públicas
          </Typography>
          <Input {...register("publicPolicies")} />
        </label>
      </div>
    </div>
  );
}

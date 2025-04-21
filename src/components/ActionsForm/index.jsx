import Heading from "../Heading";
import Typography from "../Typography";
import Input from "../Input";

export default function ActionsForm() {
  return (
    <div className="w-full flex items-center flex-col gap-4">
      <Heading
        level={2}
        weight="semibold"
        className="self-start text-lg text-sys-main"
      >
        Números de Ações Realizadas
      </Heading>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:items-end gap-6 lg:px-6">
        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Atendimentos da equipe multiprofissional
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Atividades socioeducativas
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Atividades em grupo (número total, somando todos os grupos
            realizados pelos profissionais)
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Atividades culturais externas realizadas (passeios, parques, museus,
            cinema, teatro, etc)
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Palestras Realizadas
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Visitas Monitoradas (Recebidas na unidade presencialmente)
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Cursos ministrados presencialmente (Quantidade de cursos e não de
            pessoas)
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Pessoas que realizaram Cursos Presenciais de Capacitação na unidade
            ou programa
          </Typography>
          <Input />
        </label>

        <label>
          <Typography size="base" weight="light" className="mb-1 text-sys-main">
            Pessoas que realizaram Cursos Presencias Profissionalizantes na
            unidade ou programa
          </Typography>
          <Input />
        </label>
      </div>
    </div>
  );
}

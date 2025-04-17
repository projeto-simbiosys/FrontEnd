import emptyState from "../../assets/empty-reports-state.png";
import Heading from "../Heading";
import Typography from "../Typography";

export default function ReportsEmpty({ text }) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4">
      <img src={emptyState} className="max-w-[200px]" />
      <Heading
        level={3}
        weight="bold"
        className="!text-lg text-sys-main text-center mb-2"
      >
        Nenhum relatório encontrado
      </Heading>
      <Typography size="normal" weight="regular" className="text-center">
        {text}
      </Typography>
    </div>
  );
}

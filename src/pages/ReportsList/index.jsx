import Button from "../../components/Button";
import Heading from "../../components/Heading";
import ReportsTable from "../../components/ReportsTable";
import Sidebar from "../../components/Sidebar";
import Typography from "../../components/Typography";

export default function ReportsList() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full lg:max-w-6xl gap-7 px-2 py-12 overflow-x-hidden sm:px-7 mx-auto">
        <div className="sm:max-w-md">
          <Heading
            level={1}
            weight="bold"
            className="text-sys-main text-xl mb-2"
          >
            Gerenciar Relatórios
          </Heading>
          <Typography size="normal" weight="regular">
            Gerencie seus relatórios mensais e gere um relatório de um período
            personalizado quando precisar
          </Typography>
        </div>

        <ReportsTable />
      </div>
    </div>
  );
}

import Tabs from "../Tabs";
import Button from "../Button";
import Heading from "../Heading";
import Typography from "../Typography";
import Download from "../../icons/Download";
import Delete from "../../icons/Delete";
import emptyState from "../../assets/empty-reports-state.png";
import useReportsTable from "./hook";

export default function ReportsTable() {
  const { tabs, reports } = useReportsTable();

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="w-full flex flex-col sm:flex-row sm:items-center">
        <Typography size="base" weight="medium">
          Filtrar status:
        </Typography>

        <label className="flex items-center gap-2 ml-2 cursor-pointer">
          <input
            type="checkbox"
            className="accent-sys-main cursor-pointer"
            defaultChecked
          />
          <Typography size="normal" weight="regular">
            Aberto
          </Typography>
        </label>

        <label className="flex items-center gap-2 ml-2 sm:ml-4 cursor-pointer">
          <input
            type="checkbox"
            className="accent-sys-main cursor-pointer"
            defaultChecked
          />
          <Typography size="normal" weight="regular">
            Fechado
          </Typography>
        </label>
        <Button variant="sys-primary" className="self-end sm:ml-auto">
          Novo relatório
        </Button>
      </div>

      <div className="flex flex-col gap-2 md:flex-row border border-sys-main/30 w-full p-2">
        <Tabs orientation="horizontal" className="md:flex-col">
          {tabs?.values?.map(year => (
            <Button
              key={year}
              variant={tabs.active === year ? "sys-primary" : "sys-light"}
              className={`!py-1 !px-2.5 ${
                tabs.active !== year ? "!text-sys-secondary" : ""
              }`}
              onClick={() => tabs.handleTabChange(year)}
            >
              {year}
            </Button>
          ))}
        </Tabs>

        <div className="border border-solid border-divider/30"></div>

        <div className="flex flex-col w-full overflow-x-hidden">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden">
                {reports.isEmpty && (
                  <div className="w-full flex flex-col justify-center items-center py-4">
                    <img src={emptyState} className="max-w-[200px]" />
                    <Heading
                      level={3}
                      weight="bold"
                      className="!text-lg text-sys-main text-center mb-2"
                    >
                      Nenhum relatório encontrado
                    </Heading>
                    <Typography
                      size="normal"
                      weight="regular"
                      className="text-center"
                    >
                      Ainda não há relatórios cadastrados para este ano.
                    </Typography>
                  </div>
                )}
                {!reports.isEmpty && (
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left"
                        >
                          Mês
                        </th>
                        <th
                          scope="col"
                          className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left"
                        >
                          Ult. Atualização
                        </th>
                        <th
                          scope="col"
                          className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left"
                        >
                          Ult. edição por
                        </th>
                        <th
                          scope="col"
                          className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left"
                        >
                          status
                        </th>
                        <th
                          scope="col"
                          className="text-sm whitespace-nowrap font-bold text-gray-900 pl-1 pr-6 p-2 text-left"
                        >
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports?.data?.map(report => (
                        <tr
                          key={report.id}
                          className="bg-white border-b border-b-gray-disabled/50"
                        >
                          <td className="py-2 whitespace-nowrap pl-1 pr-6 text-sm font-bold text-gray-900">
                            {report.month}
                          </td>
                          <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                            {report.lastUpdate}
                          </td>
                          <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                            {report.lastPersonToUpdate}
                          </td>
                          <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                            {report.status}
                          </td>
                          <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6 flex items-center gap-3">
                            <Button
                              variant="sys-secondary"
                              className="!px-1.5 !py-0.5 shadow-none"
                              disabled={report.isClosed}
                            >
                              Revisar
                            </Button>
                            <Button
                              variant="sys-secondary"
                              className="group !px-1.5 !py-0.5 shadow-none"
                            >
                              <Download className="h-[24px] w-[25px] stroke-sys-main group-disabled:stroke-gray-detail-disabled" />
                            </Button>
                            <Button
                              variant="sys-secondary"
                              className="!px-1.5 !py-0.5 shadow-none !border-red-700"
                            >
                              <Delete className="h-[24px] w-[25px]" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4 sm:gap-8">
        <Typography size="normal" weight="regular">
          Meses: {reports?.data?.length}/12
        </Typography>
        <Typography size="normal" weight="regular">
          Fechados: {reports?.countClosed}/{reports?.data?.length}
        </Typography>
      </div>
    </div>
  );
}

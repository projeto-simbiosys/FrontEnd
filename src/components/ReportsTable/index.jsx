import Tabs from "../Tabs";
import Button from "../Button";
import Typography from "../Typography";
import Download from "../../icons/Download";
import Delete from "../../icons/Delete";

export default function ReportsTable() {
  return (
    <>
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
          <Button variant="sys-primary" className="!py-1 !px-2.5">
            2025
          </Button>
          <Button
            variant="sys-light"
            className="!text-sys-secondary !py-1 !px-2.5"
          >
            2024
          </Button>
        </Tabs>

        <div className="border border-solid border-divider/30"></div>

        <div className="flex flex-col w-full overflow-x-hidden">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden">
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
                    <tr className="bg-white border-b border-b-gray-disabled/50">
                      <td className="py-2 whitespace-nowrap pl-1 pr-6 text-sm font-bold text-gray-900">
                        Mar
                      </td>
                      <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                        Larry
                      </td>
                      <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                        Wild
                      </td>
                      <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6">
                        @twitter
                      </td>
                      <td className="text-sm text-gray-900 font-base py-2 whitespace-nowrap pl-1 pr-6 flex items-center gap-3">
                        <Button
                          variant="sys-secondary"
                          className="!px-1.5 !py-0.5 shadow-none"
                        >
                          Revisar
                        </Button>
                        <Button
                          variant="sys-secondary"
                          className="!px-1.5 !py-0.5 shadow-none"
                        >
                          <Download className="h-[24px] w-[25px]" />
                        </Button>
                        <Button
                          variant="sys-secondary"
                          className="!px-1.5 !py-0.5 shadow-none !border-red-700"
                        >
                          <Delete className="h-[24px] w-[25px]" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-4 sm:gap-8">
        <Typography size="normal" weight="regular">
          Meses: 12/12
        </Typography>
        <Typography size="normal" weight="regular">
          Fechados: 12/12
        </Typography>
      </div>
    </>
  );
}

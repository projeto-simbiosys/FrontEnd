import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Sidebar from "../../components/Sidebar";
import Tabs from "../../components/Tabs";
import Typography from "../../components/Typography";

export default function ReportsList() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[61px] sm:w-[81px] shrink-0 h-screen"></div>
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

        <div className="flex flex-col items-end gap-2">
          <div className="w-full flex flex-col sm:flex-row sm:items-center">
            <Typography size="base" weight="medium">
              Filtrar status:
            </Typography>

            <label className="flex items-center gap-2 ml-2">
              <input
                type="checkbox"
                className="accent-sys-main"
                defaultChecked
              />
              <Typography size="normal" weight="regular">
                Aberto
              </Typography>
            </label>

            <label className="flex items-center gap-2 ml-2">
              <input
                type="checkbox"
                className="accent-sys-main"
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

          <div className="border border-sys-main/30 w-full p-2">
            <Tabs>
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

            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Jan
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Mark
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @mdo
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Fev
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Jacob
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Thornton
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @fat
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        {/* <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2 text-sm font-bold text-gray-900">
                            Mar
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Larry
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            Wild
                          </td>
                          <td className="text-sm text-gray-900 font-base px-6 py-4 whitespace-nowrap pl-1 pr-6 p-2">
                            @twitter
                          </td>
                        </tr> */}
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
        </div>
      </div>
    </div>
  );
}

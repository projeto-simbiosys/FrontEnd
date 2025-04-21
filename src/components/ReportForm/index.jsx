import Tabs from "../Tabs";
import Button from "../Button";
import Select from "../Select";
import ReferralsForm from "../ReferralsForm";
import ActionsForm from "../ActionsForm";
import OthersForm from "../OthersForm";

const activeTab = "referrals";

export default function ReportForm() {
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="flex items-center gap-2">
        Mês:
        <Select>
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </Select>
      </label>

      <div className="flex flex-col gap-3 lg:flex-row border border-sys-main/30 w-full p-2 md:p-6">
        <Tabs
          orientation="horizontal"
          className="w-full lg:max-w-max pb-2 lg:flex-col overflow-x-auto lg:overflow-hidden"
        >
          <Button variant="sys-primary" className="!py-1 !px-2.5">
            Encaminhamentos
          </Button>
          <Button
            variant="sys-light"
            className=" whitespace-nowrap !py-1 !px-2.5"
          >
            Ações
          </Button>
          <Button variant="sys-light" className="!py-1 !px-2.5">
            Outros
          </Button>
        </Tabs>
        <div className="border border-solid border-divider/30"></div>

        {activeTab === "actions" && <ActionsForm />}
        {activeTab === "referrals" && <ReferralsForm />}
        {activeTab === "others" && <OthersForm />}
      </div>

      <div className="w-full flex flex-col items-end sm:items-center sm:flex-row sm:justify-end gap-2 mt-2">
        <Button variant="sys-secondary">Salvar alterações</Button>
        <Button variant="sys-primary">Salvar e Fechar</Button>
      </div>
    </div>
  );
}

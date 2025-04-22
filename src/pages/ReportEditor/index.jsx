import useReportEditor from "./hook";
import Sidebar from "../../components/Sidebar";
import Heading from "../../components/Heading";
import Typography from "../../components/Typography";
import Select from "../../components/Select";
import ReportForm from "../../components/ReportForm";

export default function ReportEditor({ mode }) {
  const { page, report, select } = useReportEditor(mode);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full md:max-w-3xl lg:max-w-6xl gap-7 px-2 py-12 overflow-x-hidden sm:px-7 mx-auto">
        {report.lastUpdate && (
          <Typography size="sm" weight="extralight">
            {report.lastUpdate}
          </Typography>
        )}
        <div>
          <Heading
            level={1}
            weight="bold"
            className="text-sys-main text-xl mb-2"
          >
            {page.title}
          </Heading>
          <Typography size="normal" weight="regular">
            {page.subtitle}
          </Typography>
        </div>

        <div>
          <label className="flex items-center gap-2 mb-1">
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

          <ReportForm year={report.year} month={report.month} />
        </div>
      </div>
    </div>
  );
}

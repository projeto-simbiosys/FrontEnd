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
            <Select disabled={select.disabled}>
              {select.options.map(option => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}/{report.year}
                </option>
              ))}
            </Select>
          </label>

          <ReportForm year={report.year} month={report.month} />
        </div>
      </div>
    </div>
  );
}

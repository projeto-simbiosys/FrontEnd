import Tabs from "../Tabs";
import Button from "../Button";
import Typography from "../Typography";
import useReportsPanel from "./hook";
import ReportsTable from "../ReportsTable";
import ReportsEmpty from "../ReportsEmpty";
import ReportsTablePlaceholder from "../ReportsTablePlaceholder";
import { AnimatePresence, motion } from "framer-motion";
import ReportsError from "../ReportsError";
import Warning from "../../icons/Warning";
import ReportPeriodModal from "../ReportPeriodModal";

export default function ReportsPanel() {
  const { tabs, reports, filter, reportPeriodModal, isOnline, navigate } =
    useReportsPanel();

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
            name="open"
            defaultChecked={filter.values.open}
            onChange={filter.handleCheckboxChange}
          />
          <Typography size="normal" weight="regular">
            Aberto
          </Typography>
        </label>

        <label className="flex items-center gap-2 ml-2 sm:ml-4 cursor-pointer">
          <input
            type="checkbox"
            className="accent-sys-main cursor-pointer"
            name="closed"
            defaultChecked={filter.values.closed}
            onClick={filter.handleCheckboxChange}
          />
          <Typography size="normal" weight="regular">
            Fechado
          </Typography>
        </label>
        <Button
          variant="sys-primary"
          className="self-end sm:ml-auto"
          disabled={!isOnline || reports.data.length === 12}
          onClick={() =>
            navigate("/admin/reports/new", {
              state: {
                reportsPanel: true,
                report: {
                  year: tabs.active,
                },
              },
            })
          }
        >
          Novo relatório
        </Button>
      </div>

      <div className="flex flex-col gap-2 md:flex-row border border-sys-main/30 w-full p-2">
        <Tabs orientation="horizontal" className="md:flex-col">
          {!isOnline && (
            <Warning className="w-[40px] h-[30px] !py-1 !px-2.5 fill-red-700" />
          )}
          {tabs.isLoading && (
            <>
              <Button
                variant="sys-primary"
                disabled
                className="!py-1 !px-2.5 animate-pulse"
              >
                <span className="text-transparent">0000</span>
              </Button>
              <Button
                variant="sys-primary"
                disabled
                className="!py-1 !px-2.5 animate-pulse"
              >
                <span className="text-transparent">0000</span>
              </Button>
            </>
          )}
          {isOnline &&
            !tabs.isLoading &&
            tabs.values.map(year => (
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
              <div className="overflow-hidden min-h-[300px]">
                <AnimatePresence mode="wait">
                  {!isOnline && (
                    <ReportsError text="Verifique sua conexão e tente novamente." />
                  )}
                  {(reports.isLoading || tabs.isLoading) && (
                    <ReportsTablePlaceholder />
                  )}
                  {!reports.isLoading && reports.isEmpty && (
                    <ReportsEmpty text="Ainda não há relatórios cadastrados para este ano." />
                  )}
                  {!reports.isLoading &&
                    !tabs.isLoading &&
                    !reports.isEmpty &&
                    isOnline && (
                      <ReportsTable
                        reports={reports.data}
                        filters={filter.values}
                      />
                    )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between sm:flex-row">
        <div className="flex gap-4 sm:gap-8">
          <Typography size="normal" weight="regular">
            Meses:{" "}
            {reports.isLoading || tabs.isLoading ? (
              <span className="text-transparent inline-block bg-gray-disabled rounded animate-pulse">
                000
              </span>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={reports.data.length}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {reports.data.length}
                  </motion.span>
                </AnimatePresence>
                /12
              </>
            )}
          </Typography>

          <Typography size="normal" weight="regular">
            Fechados:{" "}
            {reports.isLoading || tabs.isLoading ? (
              <span className="text-transparent inline-block bg-gray-disabled rounded animate-pulse">
                000
              </span>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${reports.countClosed}/${reports.data.length}`}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {reports.countClosed}/{reports.data.length}
                  </motion.span>
                </AnimatePresence>
              </>
            )}
          </Typography>
        </div>

        <ReportPeriodModal
          show={reportPeriodModal.show}
          year={tabs.active}
          onClose={reportPeriodModal.handleClose}
        />

        <Button
          variant="sys-primary"
          className="sm:!w-min-content ml-auto sm:ml-0 mt-2 sm:mt-0"
          disabled={
            reports.isLoading || reports.isEmpty || reports.data.length <= 1
          }
          onClick={reportPeriodModal.handleOpen}
        >
          Gerar relatório por período
        </Button>
      </div>
    </div>
  );
}

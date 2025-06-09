import CloseIcon from "../../icons/Close";
import Button from "../Button";
import Heading from "../Heading";
import Typography from "../Typography";
import Select from "../Select";
import useExistingMonthsByYear from "../../hooks/useExistingMonthsByYear";
import { AnimatePresence, motion } from "framer-motion";
import useReportPeriodModal from "./hook";
import LoadingModal from "../LoadingModal";

export default function ReportPeriodModal({ show, onClose, year }) {
  const existingMonthsByYear = useExistingMonthsByYear(year);

  const { select, showLoadingModal, buttonModal, handleClickGenerateReport } =
    useReportPeriodModal(year);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden flex items-center"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />

          <motion.div
            className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.1 }}
          >
            <LoadingModal show={showLoadingModal} />

            <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
              <button
                tabIndex="-1"
                type="button"
                className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                onClick={onClose}
              >
                <CloseIcon className="h-4 w-4 cursor-pointer text-gray-400" />
                <span className="sr-only">Close</span>
              </button>

              <div className="space-y-2 p-2">
                <div className="p-4 space-y-2 text-center">
                  <Heading
                    level={3}
                    weight="bold"
                    className="text-sys-main"
                    id="page-action.heading"
                  >
                    Escolha o intervalo de meses
                  </Heading>

                  <Typography size="normal" weight="regular">
                    Este relatório será gerado com base nos meses existentes do
                    ano de {year}
                  </Typography>

                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <label className="flex flex-1 flex-col">
                      <Typography
                        className="self-start"
                        size="normal"
                        weight="regular"
                      >
                        Mês de início:
                      </Typography>
                      <Select {...select.register("startMonth")}>
                        {existingMonthsByYear.map(month => (
                          <option key={month.id} value={month.value}>
                            {month.value}
                          </option>
                        ))}
                      </Select>
                    </label>

                    <label className="flex flex-1 flex-col">
                      <Typography
                        className="self-start"
                        size="normal"
                        weight="regular"
                      >
                        Mês de término:
                      </Typography>
                      <Select {...select.register("endMonth")}>
                        {existingMonthsByYear.map(month => (
                          <option key={month.id} value={month.value}>
                            {month.value}
                          </option>
                        ))}
                      </Select>
                      {select.errors.endMonth && (
                        <Typography size="sm" className="text-red-500">
                          {select.errors.endMonth.message}
                        </Typography>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div
                  aria-hidden="true"
                  className="border-t dark:border-gray-700 px-2"
                ></div>

                <div className="px-6 py-2">
                  <div className="flex justify-around">
                    <Button
                      variant="sys-secondary"
                      onClick={onClose}
                      disabled={buttonModal.disabled}
                    >
                      Cancelar
                    </Button>

                    <Button
                      variant="sys-primary"
                      onClick={handleClickGenerateReport}
                      disabled={buttonModal.disabled}
                    >
                      {buttonModal.disabled ? "Gerando..." : "Gerar"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

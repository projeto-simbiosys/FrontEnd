import Tabs from "../Tabs";
import Button from "../Button";
import ReferralsForm from "../ReferralsForm";
import ActionsForm from "../ActionsForm";
import OthersForm from "../OthersForm";
import useReportForm from "./hook";
import { AnimatePresence, motion } from "framer-motion";
import ReportFormPlaceholder from "../ReportFormPlaceholder";
import Notification from "../Notification";

export default function ReportForm({ year, month }) {
  const {
    tabs,
    formAnimation,
    reportInfosLoading,
    updateAndSaveReport,
    saveButton,
    notification,
  } = useReportForm(year, month);

  return (
    <div className="flex flex-col items-start gap-2">
      <Notification
        show={notification.show}
        type={notification.type}
        title={notification.title}
        body={notification.message}
      />
      <div className="flex flex-col gap-3 lg:flex-row border border-sys-main/30 w-full p-2 md:p-6">
        <Tabs
          orientation="horizontal"
          className="w-full lg:max-w-max pb-2 lg:flex-col overflow-x-auto lg:overflow-hidden"
        >
          <Button
            variant={tabs.variants.referrals}
            onClick={() => tabs.handleTabChange("referrals")}
            className="!py-1 !px-2.5"
          >
            Encaminhamentos
          </Button>
          <Button
            variant={tabs.variants.actions}
            onClick={() => tabs.handleTabChange("actions")}
            className="!py-1 !px-2.5"
          >
            Ações
          </Button>
          <Button
            variant={tabs.variants.others}
            onClick={() => tabs.handleTabChange("others")}
            className="!py-1 !px-2.5"
          >
            Outros
          </Button>
        </Tabs>
        <div className="border border-solid border-divider/30"></div>

        <AnimatePresence custom={formAnimation.direction} mode="wait">
          <motion.div
            key={tabs.activeTab}
            custom={formAnimation.direction}
            variants={formAnimation.variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25 }}
          >
            {reportInfosLoading && <ReportFormPlaceholder />}
            {tabs.activeTab === "referrals" && !reportInfosLoading && (
              <ReferralsForm />
            )}
            {tabs.activeTab === "actions" && !reportInfosLoading && (
              <ActionsForm />
            )}
            {tabs.activeTab === "others" && !reportInfosLoading && (
              <OthersForm />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full flex flex-col items-end sm:items-center sm:flex-row sm:justify-end gap-2 mt-2">
        <Button
          variant="sys-secondary"
          onClick={updateAndSaveReport}
          disabled={saveButton.isLoading || saveButton.isSuccess}
        >
          {saveButton.isLoading ? "Salvando alterações" : "Salvar alterações"}
        </Button>
        <Button
          variant="sys-primary"
          disabled={saveButton.isLoading || saveButton.isSuccess}
        >
          Salvar e Fechar
        </Button>
      </div>
    </div>
  );
}

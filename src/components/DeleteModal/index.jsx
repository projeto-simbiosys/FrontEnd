import CloseIcon from "../../icons/Close";
import Button from "../Button";
import Heading from "../Heading";
import Typography from "../Typography";
import Notification from "../Notification";
import { AnimatePresence, motion } from "framer-motion";
import useDeleteModal from "./hook";

export default function DeleteModal({ show, onClose }) {
  const { handleConfirmDelete, modalData, notification, disableButton } =
    useDeleteModal();

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
          <Notification
            show={notification.show}
            type={notification.type}
            title={notification.title}
            body={notification.message}
          />
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
                    className="text-red-700"
                    id="page-action.heading"
                  >
                    Excluir relatório de {modalData.month}
                  </Heading>

                  <Typography size="normal" weight="regular">
                    Tem certeza que deseja excluir este relatório? Essa ação não
                    poderá ser desfeita!
                  </Typography>
                </div>
              </div>

              <div className="space-y-2">
                <div
                  aria-hidden="true"
                  className="border-t dark:border-gray-700 px-2"
                ></div>

                <div className="px-6 py-2">
                  <div className="flex justify-around">
                    <Button variant="sys-secondary" onClick={onClose}>
                      Cancelar
                    </Button>

                    <Button
                      variant="sys-primary"
                      onClick={handleConfirmDelete}
                      disabled={disableButton}
                    >
                      {disableButton ? "Excluindo..." : "Sim, excluir"}
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

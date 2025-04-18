import CloseIcon from "../../icons/Close";
import Button from "../Button";
import Heading from "../Heading";
import Typography from "../Typography";

export default function ModalDelete({ show = true, onClose }) {
  return !show ? null : (
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
      ></div>

      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm">
          <button
            tabindex="-1"
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
                Excluir relatório de março
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

                <Button variant="sys-primary" onClick={onClose}>
                  Sim, excluir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

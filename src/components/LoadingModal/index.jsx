import Typography from "../Typography";

export default function LoadingModal({ show }) {
  return (
    show && (
      <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden flex items-center bg-black/50">
        <div className="flex flex-col items-center bg-white w-1/3 mx-auto p-4 rounded-md shadow-lg">
          <div className="flex items-center justify-center py-8">
            <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
          </div>
          <Typography size="xl" weight="medium">
            Gerando Relatorio...
          </Typography>
        </div>
      </div>
    )
  );
}

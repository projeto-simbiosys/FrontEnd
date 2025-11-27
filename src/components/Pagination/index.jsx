import ArrowRight from "@/icons/ArrowRight";

export default function Pagination({ paginaAtual, totalPaginas, onChange }) {
  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  const handlePrev = () => {
    if (paginaAtual > 1) onChange(paginaAtual - 1);
  };

  const handleNext = () => {
    if (paginaAtual < totalPaginas) onChange(paginaAtual + 1);
  };

  return (
    <div className="flex justify-center gap-1">
      <button
        onClick={handlePrev}
        disabled={paginaAtual === 1}
        className={`p-1 rounded transition ${
          paginaAtual === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        <ArrowRight className="stroke-sys-main rotate-180 h-[25px] w-[25px]" />
      </button>

      {paginas.map(num => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`px-3 py-1 rounded ${
            paginaAtual === num
              ? "bg-gray-300 font-bold"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={paginaAtual === totalPaginas}
        className={`p-1 rounded transition ${
          paginaAtual === totalPaginas
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        <ArrowRight className="stroke-sys-main h-[25px] w-[25px]" />
      </button>
    </div>
  );
}

export default function CardKPI({ icon, value, label, tooltip, valueColor = 'text-sys-main' }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row items-stretch shadow overflow-visible">
      <div className="w-full md:w-2 bg-gradient-to-b from-blue-200 to-blue-500" />
      <div className="flex flex-1 justify-between items-center px-5 py-6 relative">
        <div className="flex items-center gap-4">
          <div className="bg-sys-main text-white p-3 rounded-full">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{label}</p>
            <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
          </div>
        </div>
        <div className="relative group">
          <button className="text-gray-500 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
          </button>
          <div className="absolute z-50 hidden group-hover:block bottom-full right-0 mb-2 w-64 p-2 text-xs text-blue-900 bg-gradient-to-b from-blue-200 to-blue-500 rounded shadow-md">
            {tooltip}
          </div>
        </div>
      </div>
    </div>
  );
}

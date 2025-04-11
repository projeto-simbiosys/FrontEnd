export default function Input({ children, hasError = false, ...props }) {
  return (
    <div
      className={`w-full flex items-center border ${
        hasError ? "border-red-700" : "border-sys-main"
      } has-[:disabled]:bg-gray-disabled has-[:disabled]:border-gray-disabled rounded-md px-1.5 py-1.5 gap-2 bg-white shadow-sm`}
    >
      <input
        {...props}
        className="disabled:text-gray-detail-disabled disabled:cursor-not-allowed flex bg-transparent text-base text-sys-main placeholder-sys-main/40"
      />
      {children}
    </div>
  );
}

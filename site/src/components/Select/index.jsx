import Dropdown from "../../icons/Dropdown";

export default function Select({ hasError = false, children, ...props }) {
  return (
    <div
      className={`grid border ${
        hasError ? "border-red-700" : "border-sys-main"
      } has-[select:disabled]:border-gray-detail-disabled has-[select:disabled]:bg-gray-disabled rounded-md px-1.5 py-1.5 min-w-[160px] bg-white shadow-sm`}
    >
      <select
        className={`peer col-start-1 row-start-1 appearance-none ${
          hasError ? "text-red-700" : "text-sys-main"
        } disabled:text-gray-detail-disabled`}
        {...props}
      >
        {children}
      </select>
      <Dropdown
        className={`peer-focus:rotate-180 peer-focus-within:rotate-0 peer-disabled:fill-gray-detail-disabled w-[20px] h-[20px] ${
          hasError ? "fill-red-700" : "fill-sys-main"
        } pointer-events-none col-start-1 row-start-1 my-auto ml-auto`}
      />
    </div>
  );
}

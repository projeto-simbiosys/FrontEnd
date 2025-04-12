import Dropdown from "../../icons/Dropdown";

export default function Select({ children, ...props }) {
  return (
    <div className="grid border border-sys-main rounded-md px-1.5 py-1.5 gap-2 bg-white shadow-sm">
      <select
        className="peer col-start-1 row-start-1 appearance-none text-sys-main"
        {...props}
      >
        {children}
      </select>
      <Dropdown className="peer-focus:rotate-180 peer-focus-within:rotate-0 peer-disabled:fill-gray-detail-disabled w-[25px] h-[25px] fill-sys-main pointer-events-none col-start-1 row-start-1 ml-auto" />
    </div>
  );
}

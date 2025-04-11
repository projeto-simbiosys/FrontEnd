import { useRef } from "react";
import Dropdown from "../../icons/Dropdown";

export default function Select({ children, ...props }) {
  const ref = useRef();

  function handleDropdownClick() {
    if (ref.current) {
      ref.current.focus();
      ref.current?.click(); // abre o dropdown na maioria dos navegadores
    }
  }

  return (
    <div className="flex items-center justify-between w-full border border-sys-main rounded-md px-1.5 py-1.5 gap-2 bg-white shadow-sm">
      <select className="w-full appearance-none" ref={ref} {...props}>
        {children}
      </select>
      <button onClick={handleDropdownClick}>
        <Dropdown className="w-[25px] h-[25px] fill-sys-main" />
      </button>
    </div>
  );
}

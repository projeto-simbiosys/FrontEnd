import CloseIcon from "../../icons/Close";
import MenuHamburguerIcon from "../../icons/MenuHamburguer";
import useSidebar from "./useSidebar";
import logo from "/logo-horizontal.png";

export default function MenuHamburguer({ children }) {
  const { visibilityOverlay, visibilityMenu, handleClick } = useSidebar();

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 bg-black ${visibilityOverlay} duration-50 ease-in-out`}
        onClick={handleClick}
      ></div>
      <button onClick={handleClick}>
        <MenuHamburguerIcon width={32} height={32} />
      </button>
      <div
        className={`w-4/5 h-screen bg-white fixed flex flex-col items-end z-50 top-0 ${visibilityMenu} gap-5 pt-[40px] px-[20px] duration-150 ease-in-out`}
      >
        <div className="w-full flex items-center justify-between">
          <img src={logo} alt="Icone da empresa" className="w-[120px]" />
          <CloseIcon width={32} height={32} onClick={handleClick} />
        </div>

        <div className="flex flex-col gap-4 items-end">{children}</div>
      </div>
    </>
  );
}

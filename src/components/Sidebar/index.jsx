import CloseSidebar from "../../icons/CloseSidebar";
import Logo from "/logo-sistema.png";
import Tabs from "../Tabs";
import Button from "../Button";
import Logout from "../../icons/Logout";
import DashboardIcon from "../../icons/DashboardIcon";
import Reports from "../../icons/Reports";
import useSidebar from "./hook";

export default function Sidebar() {
  const { sidebar } = useSidebar();

  return (
    <div className="h-screen fixed flex flex-col py-12 px-2 left-0 bg-gradient-to-b from-sys-tertiary to-sys-secondary">
      <div className="w-full flex justify-center items-center gap-5">
        <img
          src={Logo}
          className={`h-[25px] transition duration-250 ease-in-out ${sidebar.ShowTexts}`}
          alt="logo da empresa"
        />
        <Button
          className={`cursor-pointer transition duration-250 ease-in-out ${sidebar.toogleButton.style}`}
          onClick={sidebar.toogleButton.handleToogle}
        >
          <CloseSidebar height={25} width={25} />
        </Button>
      </div>

      <div className="border border-solid border-divider/30 my-8"></div>

      <Tabs orientation="vertical">
        <Button variant="sys-primary">
          <DashboardIcon
            width={25}
            height={25}
            className="fill-white stroke-white"
          />
          <span
            className={`transition duration-250 ease-in-out ${sidebar.ShowTexts}`}
          >
            Dashboard
          </span>
        </Button>

        <Button variant="sys-light">
          <Reports width={25} height={25} className="stroke-sys-main" />
          <span
            className={`transition duration-250 ease-in-out ${sidebar.ShowTexts}`}
          >
            Relatórios
          </span>
        </Button>
      </Tabs>

      <div className="border border-solid border-divider/30 mt-auto mb-8"></div>

      <Button variant="sys-light">
        <Logout width={25} height={25} />
        <span
          className={`font-bold text-lg transition duration-250 ease-in-out ${sidebar.ShowTexts}`}
        >
          Sair
        </span>
      </Button>
    </div>
  );
}

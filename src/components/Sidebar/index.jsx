import React from "react";
import CloseSidebar from "../../icons/CloseSidebar";
import Logo from "/logo-sistema.png";
import Tabs from "../Tabs";
import Button from "../Button";
import Logout from "../../icons/Logout";
import DashboardIcon from "../../icons/DashboardIcon";
import Reports from "../../icons/Reports";
import useSidebar from "./hook";
import { motion } from "framer-motion";

export default function Sidebar() {
  const { sidebar } = useSidebar();

  return (
    <>
      <div className="h-screen flex flex-col py-12 px-2 left-0 bg-gradient-to-b from-blue-200 to-blue-500 rounded shadow-md">
        <div className="w-full flex justify-center items-center gap-5">
          {sidebar.toogleButton.open && (
            <img
              src={Logo}
              className="h-[25px] transition-all duration-200 translate-x-0 opacity-100 ml-4"
              alt="logo da empresa"
            />
          )}
          <Button
            className={`cursor-pointer transition duration-250 ease-in-out !px-2.5 sm:!px-5 shadow-none ${sidebar.toogleButton.style}`}
            onClick={sidebar.toogleButton.handleToogle}
          >
            <CloseSidebar height={25} width={25} />
          </Button>
        </div>

        <div className="border border-solid border-divider/30 my-8"></div>

        <Tabs orientation="vertical">
          <Button
            variant={sidebar.page.styleButton.dashboard}
            className="!px-2.5 sm:!px-5"
            onClick={() => sidebar.page.handleClick("dashboard")}
          >
            <DashboardIcon
              width={25}
              height={25}
              className={sidebar.page.styleIcon.dashboard}
            />

            {sidebar.toogleButton.open && (
              <motion.p
                key="texto"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                Dashboard
              </motion.p>
            )}
          </Button>

          <Button
            variant={sidebar.page.styleButton.reports}
            className="!px-2.5 sm:!px-5"
            onClick={() => sidebar.page.handleClick("reports")}
          >
            <Reports
              width={25}
              height={25}
              className={sidebar.page.styleIcon.reports}
            />
            {sidebar.toogleButton.open && (
              <motion.p
                key="texto"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                Relatórios
              </motion.p>
            )}
          </Button>
        </Tabs>

        <div className="border border-solid border-divider/30 mt-auto mb-8"></div>

        <Button
          variant="sys-light"
          className="!px-2.5 sm:!px-5"
          onClick={sidebar.logout}
        >
          <Logout width={25} height={25} />
          {sidebar.toogleButton.open && (
            <motion.p
              key="texto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Sair
            </motion.p>
          )}
        </Button>
      </div>
    </>
  );
}

import { useLocation, useNavigate } from "react-router";
import { useSidebarContext } from "../../context/SidebarContext";

export default function useSidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();

  const location = useLocation();
  const navigate = useNavigate();

  const parts = location.pathname.split("/");
  const pageUrl = parts[2];

  const styleButtonPage = {
    dashboard: pageUrl === "dashboard" ? "sys-primary" : "sys-light",
    reports: pageUrl === "reports" ? "sys-primary" : "sys-light",
  };

  return {
    sidebar: {
      toogleButton: {
        open: isOpen,
        style: isOpen ? "rotate-0" : "rotate-180",
        handleToogle: () => setIsOpen(!isOpen),
      },
      page: {
        styleButton: styleButtonPage,
        styleIcon: {
          dashboard:
            pageUrl === "dashboard"
              ? "fill-white stroke-white"
              : "fill-sys-main stroke-sys-main",
          reports: pageUrl === "reports" ? "stroke-white" : "stroke-sys-main",
        },
        handleClick: page => navigate(`/admin/${page}`),
      },
    },
  };
}

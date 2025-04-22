import { useState } from "react";

export default function useReportForm() {
  const tabOrder = ["referrals", "actions", "others"];
  const [activeTab, setActiveTab] = useState("referrals");
  const [prevTab, setPrevTab] = useState("referrals");

  const direction =
    tabOrder.indexOf(activeTab) > tabOrder.indexOf(prevTab) ? 1 : -1;

  const variants = {
    enter: dir => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: dir => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return {
    tabs: {
      activeTab,
      variants: {
        referrals: activeTab === "referrals" ? "sys-primary" : "sys-light",
        actions: activeTab === "actions" ? "sys-primary" : "sys-light",
        others: activeTab === "others" ? "sys-primary" : "sys-light",
      },
      handleTabChange: tab => {
        setPrevTab(activeTab);
        setActiveTab(tab);
      },
    },
    formAnimation: {
      direction,
      variants,
    },
  };
}

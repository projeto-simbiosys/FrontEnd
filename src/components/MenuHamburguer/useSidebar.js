import { useState } from "react";

export default function useSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const visibilityOverlay = showSidebar
    ? "opacity-30 left-0"
    : "opacity-0 -left-full";
  const visibilityMenu = showSidebar ? "right-0" : "-right-full";

  return {
    visibilityOverlay,
    visibilityMenu,
    handleClick: () => setShowSidebar(!showSidebar),
  };
}

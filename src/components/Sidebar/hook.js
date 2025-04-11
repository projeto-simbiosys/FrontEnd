import { useState } from "react";

export default function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    sidebar: {
      toogleButton: {
        style: isOpen ? "rotate-180" : "rotate-0",
        open: isOpen,
        handleToogle: () => setIsOpen(!isOpen),
      },
      ShowTexts: isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 fixed",
    },
  };
}

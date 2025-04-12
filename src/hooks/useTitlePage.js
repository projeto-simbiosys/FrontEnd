import { useEffect } from "react";

export default function useTitlePage(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

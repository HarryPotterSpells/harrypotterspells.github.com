import { useEffect } from "react";

// Set document title when component is used
const useDocumentTitle = (title: string) => {
  useEffect(() => {
    if (title) {
        document.title = `${title} - HarryPotterSpells`;
    }
  }, [title]);
};

export default useDocumentTitle;

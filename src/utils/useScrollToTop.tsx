import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Set window scroll to default pos when path changes.
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;

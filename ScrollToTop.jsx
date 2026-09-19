import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to top on every route change, since routes swap in-place. */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

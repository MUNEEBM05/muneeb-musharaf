import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Wraps the routed page content so navigating between pages fades in smoothly
// instead of cutting hard between them. Keying on the pathname forces a fresh
// mount + entrance animation on every navigation.
const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Reset scroll to the top on every navigation, like a normal page load,
  // instead of carrying over the previous page's scroll position. Skipped
  // when the URL has a hash (e.g. /education#martingale-scholarship) so the
  // page's own scroll-to-anchor logic can take over instead.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  );
};

export default PageTransition;

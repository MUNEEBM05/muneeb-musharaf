import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

// Wraps the routed page content so navigating between pages fades in smoothly
// instead of cutting hard between them. Keying on the pathname forces a fresh
// mount + entrance animation on every navigation.
const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in">
      {children}
    </div>
  );
};

export default PageTransition;

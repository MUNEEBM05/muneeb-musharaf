import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative">
      <PageBackground />
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10 flex items-center justify-center min-h-screen">
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center max-w-lg mx-auto animate-scale-in">
          <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-accent via-accent2 to-teal bg-clip-text text-transparent mb-4">
            404
          </p>
          <p className="text-lg font-bold text-glassFg mb-2">
            This page drifted off into space
          </p>
          <p className="text-glassMuted mb-8">
            The link might be broken, or the page may have moved. Let's get you back on track.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Return home
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;

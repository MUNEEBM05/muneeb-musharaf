import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (location.pathname === href) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || location.pathname !== "/"
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-primary-dark/80 backdrop-blur-lg"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center space-x-2"
          >
            <span className={cn(
              "text-xl font-bold gradient-text",
              location.pathname === "/" && !isScrolled ? "text-white" : ""
            )}>
              Muneeb Musharaf
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors link-hover",
                  isActive(item.href)
                    ? location.pathname === "/" && !isScrolled ? "text-accent" : "text-accent"
                    : location.pathname === "/" && !isScrolled 
                      ? "text-white/90 hover:text-white"
                      : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="ml-4">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden",
          location.pathname === "/" ? "bg-primary-dark/95" : "bg-background/95",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "text-sm font-medium py-2 px-4 rounded-lg transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
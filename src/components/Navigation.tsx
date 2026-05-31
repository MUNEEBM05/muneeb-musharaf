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
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        isScrolled && "shadow-lg border-b border-white/10"
      )}
      style={{ backgroundColor: 'rgba(12,15,34,0.97)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
              Muneeb Musharaf
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors link-hover",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="hero" 
              size="sm" 
              className="ml-4"
              onClick={() => window.open('/MuneebMusharafCV.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
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
          "xl:hidden absolute top-full left-0 right-0 border-b border-white/10 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
        style={{ backgroundColor: 'rgba(12,15,34,0.99)' }}
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
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full"
              onClick={() => window.open('/MuneebMusharafCV.pdf', '_blank')}
            >
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
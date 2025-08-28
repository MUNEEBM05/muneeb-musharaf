import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Muneeb Musharaf
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Final-year BSc Computer Science & Mathematics student at QMUL
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/muneebmusharaf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary hover:bg-primary-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/MUNEEBM05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary hover:bg-primary-light transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:muneebmusharaf@outlook.com"
                className="p-2 rounded-lg bg-primary hover:bg-primary-light transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors link-hover"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>📍 London, UK</p>
              <p>✉️ muneebmusharaf@outlook.com</p>
              <p>💼 Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Muneeb Musharaf. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-accent" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
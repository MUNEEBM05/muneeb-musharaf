import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import linkedinProfile from "@/assets/linkedin-profile.jpg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const stats = [
    { label: "First-Class Average", highlight: true },
    { label: "AI & ML", highlight: false },
    { label: "Full-stack (Django + React)", highlight: false },
  ];

  useEffect(() => {
    const img = new Image();
    img.src = linkedinProfile;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/95 to-primary/30" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float animation-delay-2000" />
      
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hello, I'm
                <span className="block gradient-text mt-2">Muneeb Musharaf</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-secondary-light">
                Final-Year BSc Computer Science & Mathematics @ QMUL
              </h2>
              <p className="text-lg text-secondary-light/80">
                ML/AI enthusiast | Research Ready (Google DeepMind) | Full-stack & Data
              </p>
            </div>

            {/* Stats Chips */}
            <div className="flex flex-wrap gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium animate-scale-in",
                    stat.highlight
                      ? "bg-gradient-accent text-white"
                      : "bg-secondary text-secondary-foreground"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {stat.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="hero" size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/muneebmusharaf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/MUNEEBM05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:muneebmusharaf@outlook.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Image Container with Glow Effect */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-20 animate-glow-pulse" />
                <div className="relative w-full h-full rounded-full border-4 border-accent/20 overflow-hidden bg-gradient-to-br from-secondary to-secondary-light">
                  {imageLoaded ? (
                    <img
                      src={linkedinProfile}
                      alt="Muneeb Musharaf"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full animate-pulse bg-secondary" />
                  )}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
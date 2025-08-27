import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Sparkles, Code2, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import linkedinProfile from "@/assets/linkedin-profile.jpg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const stats = [
    { label: "First-Class Average", highlight: true, icon: Sparkles },
    { label: "AI & ML Research", highlight: false, icon: Brain },
    { label: "Full-stack Development", highlight: false, icon: Code2 },
  ];

  useEffect(() => {
    const img = new Image();
    img.src = linkedinProfile;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent animate-aurora" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/5 to-transparent animate-aurora-reverse" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-accent/15 to-teal/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-gradient-to-br from-teal/15 to-accent/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl animate-float-slow" />
      
      {/* Subtle Particle Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-twinkle" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-teal rounded-full animate-twinkle animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-twinkle animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-teal rounded-full animate-twinkle" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/4 right-1/2 w-1.5 h-1.5 bg-secondary-light/40 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Interactive Glow */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--accent) / 0.15) 0%, transparent 40%)`,
        }}
      />
      
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm text-secondary-light">Open to opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hello, I'm
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-accent via-teal to-secondary-light bg-clip-text text-transparent animate-gradient">
                    Muneeb Musharaf
                  </span>
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-secondary-light">
                Final-Year BSc Computer Science & Mathematics @ QMUL
              </h2>
              <p className="text-lg text-secondary-light/80">
                ML/AI enthusiast | Research Ready (Google DeepMind) | Full-stack & Data
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "group relative p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 animate-scale-in",
                      stat.highlight
                        ? "bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30 hover:border-accent/50"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className={cn(
                      "h-4 w-4 mb-2",
                      stat.highlight ? "text-accent" : "text-secondary-light"
                    )} />
                    <p className={cn(
                      "text-sm font-medium",
                      stat.highlight ? "text-white" : "text-secondary-light"
                    )}>
                      {stat.label}
                    </p>
                    {stat.highlight && (
                      <div className="absolute inset-0 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="hero" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { href: "https://linkedin.com/in/muneebmusharaf", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/MUNEEBM05", icon: Github, label: "GitHub" },
                { href: "mailto:muneebmusharaf@outlook.com", icon: Mail, label: "Email" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-white group-hover:text-accent transition-colors" />
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Image Container with Modern Effects */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-teal to-secondary-light rounded-full blur-3xl opacity-30 animate-glow-pulse" />
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-teal/20" />
                  {imageLoaded ? (
                    <img
                      src={linkedinProfile}
                      alt="Muneeb Musharaf"
                      className="w-full h-full object-cover relative z-10"
                    />
                  ) : (
                    <div className="w-full h-full animate-pulse bg-white/5" />
                  )}
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border border-white/5 scale-110 animate-spin-slow" />
                <div className="absolute inset-0 rounded-full border border-white/5 scale-125 animate-spin-slow animation-delay-2000" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal/20 rounded-full blur-2xl animate-float animation-delay-2000" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
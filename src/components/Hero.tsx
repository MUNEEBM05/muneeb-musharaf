import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Sparkles, Code2, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import linkedinProfile from "@/assets/linkedin-profile.jpg";
import muneebProfile from "@/assets/muneeb-profile.jpg";
import newLinkedinProfile from "@/assets/new-linkedin-profile.jpg";

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
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(12,15,34,255)' }}>
      {/* Minimal Background Effect */}
      <div className="absolute inset-0">
        {/* Very subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
        
        {/* Single subtle glow orb */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-accent/[0.02] rounded-full blur-3xl" />
      </div>
      
      {/* Interactive Glow - Ultra Subtle */}
      <div 
        className="absolute inset-0 opacity-10 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--accent) / 0.05) 0%, transparent 30%)`,
        }}
      />
      
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-white">Hi, there!</span>
                <span className="block text-white mt-2">I am</span>
                <span className="block text-accent mt-2">
                  Muneeb Musharaf
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Final-year BSc Computer Science & Mathematics student at QMUL, passionate about ML/AI, 
                full-stack development, and innovative tech solutions.
              </p>
            </div>

            {/* Simple Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">First Class</p>
                <p className="text-sm text-muted-foreground">Academic Average</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">AI/ML</p>
                <p className="text-sm text-muted-foreground">Research Focus</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">Full-Stack</p>
                <p className="text-sm text-muted-foreground">Development</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-6 text-lg"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent/30 text-accent hover:bg-accent/10 hover:border-accent px-8 py-6 text-lg"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
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
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Minimalist Graphic Section */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Modern Card Design with Profile */}
              <div className="relative group">
                {/* Glassmorphic container */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 p-1 rounded-3xl bg-gradient-to-br from-accent/30 to-accent/10">
                  <div className="w-full h-full rounded-3xl bg-background/10 backdrop-blur-sm border border-accent/20 overflow-hidden">
                    {/* Tech grid background */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    
                    {/* Profile Image with overlay */}
                    <div className="relative h-full">
                      <img 
                        src={newLinkedinProfile}
                        alt="Muneeb Musharaf"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Bottom gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      
                      {/* Text Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="space-y-2">
                          <p className="text-accent text-sm font-semibold uppercase tracking-wider">Available for</p>
                          <p className="text-white text-2xl font-bold">Collaboration</p>
                          <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs text-accent border border-accent/30">ML/AI</span>
                            <span className="px-2 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs text-accent border border-accent/30">Full-Stack</span>
                            <span className="px-2 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-xs text-accent border border-accent/30">Research</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-accent" />
                  <div className="absolute top-0 right-0 h-full w-[2px] bg-accent" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                  <div className="absolute bottom-0 left-0 h-full w-[2px] bg-accent" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-accent" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-accent" />
                </div>
                
                {/* Floating status indicator */}
                <div className="absolute -top-3 right-8 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/30">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-white font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
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
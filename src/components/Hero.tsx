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
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgb(37, 150, 190)' }}>
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Connect Circle */}
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-accent text-xl font-semibold mb-2">Let's</p>
                    <p className="text-white text-2xl font-bold">Connect</p>
                    <div className="mt-4 w-16 h-0.5 bg-accent mx-auto" />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-accent/10 rounded-full" />
                
                {/* Code snippets decoration */}
                <div className="absolute top-10 -left-20 text-accent/40 font-mono text-xs">
                  <div>&lt;code&gt;</div>
                  <div className="ml-4">innovation</div>
                  <div>&lt;/code&gt;</div>
                </div>
                
                <div className="absolute bottom-10 -right-20 text-accent/40 font-mono text-xs">
                  <div>const skills = [</div>
                  <div className="ml-4">"ML", "AI",</div>
                  <div className="ml-4">"Full-Stack"</div>
                  <div>];</div>
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
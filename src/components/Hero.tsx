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
    <section className="h-screen relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(12,15,34,255)' }}>
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
                Final-year BSc Computer Science & Mathematics student at QMUL, passionate about Deep Learning and innovative tech solutions.
              </p>
            </div>

            {/* Simple Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">First Class</p>
                <p className="text-sm text-muted-foreground">Academic Average</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">Artificial Intelligence</p>
                <p className="text-sm text-muted-foreground">Research Focus</p>
              </div>
            </div>

            {/* Social Links - Primary Focus */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/muneebmusharaf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="h-8 w-8" />
                <span className="text-lg">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/MUNEEBM05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                aria-label="View GitHub Profile"
              >
                <Github className="h-8 w-8" />
                <span className="text-lg">GitHub</span>
              </a>
              <a 
                href="mailto:muneebmusharaf@outlook.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                aria-label="Send Email"
              >
                <Mail className="h-8 w-8" />
                <span className="text-lg">Email</span>
              </a>
            </div>
          </div>

          {/* Minimalist Graphic Section */}
          <div className="relative flex justify-center -mt-24 md:-mt-32 lg:-mt-40">
            <div className="relative">
              {/* Main Container */}
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-transparent blur-2xl animate-pulse" />
                
                {/* Orbital rings */}
                <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-4 rounded-full border border-accent/10 animate-spin-slow" />
                  <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin-slow reverse" />
                  <div className="absolute inset-12 rounded-full border border-accent/30" />
                </div>
                
                {/* Profile Circle */}
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full relative overflow-hidden group">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-hover to-accent p-[2px]">
                    <div className="w-full h-full rounded-full bg-background" />
                  </div>
                  
                  {/* Profile Image */}
                  <img 
                    src={newLinkedinProfile}
                    alt="Muneeb Musharaf"
                    className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] object-cover rounded-full z-10"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
                
                {/* Geometric accent shapes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rotate-45 transform hover:rotate-90 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-to-tr from-accent/30 to-accent/10 rotate-45 transform hover:rotate-90 transition-transform duration-500" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-bl from-accent/30 to-accent/10 rotate-45 transform hover:rotate-90 transition-transform duration-500" />
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-tl from-accent/30 to-accent/10 rotate-45 transform hover:rotate-90 transition-transform duration-500" />
                </div>
                
                {/* Tech stack badges */}
              </div>
            </div>
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
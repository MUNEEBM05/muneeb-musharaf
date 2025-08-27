import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Trading Platform",
      period: "Jan 2025 – Aug 2025",
      description: "Full-stack trading platform with real-time data and secure authentication",
      tech: ["Django", "React", "PostgreSQL", "WebSockets", "REST API"],
      features: ["2FA Security", "Portfolio Tracking", "Real-time Alerts", "Trade History"],
      role: "Team Lead & Full-stack Developer",
      color: "accent",
    },
    {
      title: "Virtual Mars: Gaussian Splatting",
      period: "Aug 2025 – Present",
      description: "Final Year Project - Creating interactive 3D Martian landscapes using Gaussian Splatting",
      tech: ["Python", "3D Gaussian Splatting", "SfM", "Computer Vision"],
      features: ["3D Reconstruction", "Mars Rover Data", "Interactive Exploration"],
      role: "Lead Researcher",
      color: "teal",
    },
    {
      title: "Tetris Game",
      period: "Jun 2024 – Aug 2024",
      description: "Classic Tetris implementation with modern features",
      tech: ["Java", "Javax", "Git"],
      features: ["Scoring System", "Line Clearing", "Difficulty Scaling", "Sound Effects"],
      role: "Solo Developer",
      color: "primary",
    },
    {
      title: "Horse Race Simulator",
      period: "Apr 2024",
      description: "Interactive racing game with betting system",
      tech: ["Java", "Swing GUI"],
      features: ["Custom Horses", "Betting System", "Race Animation", "Login System"],
      role: "Solo Developer",
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing full-stack development, AI/ML research, and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-lg card-lift animate-fade-up">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.period}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="accent" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
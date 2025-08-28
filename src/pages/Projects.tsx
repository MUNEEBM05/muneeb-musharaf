import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, Calendar, Code, ChevronDown, ChevronUp, Users, User, School, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Cryptocurrency Trading Platform",
      period: "Jan 2025 – Aug 2025",
      description: "Full-stack trading platform with real-time data and secure authentication",
      tech: ["Django", "React", "PostgreSQL", "WebSockets", "REST API"],
      features: ["2FA Security", "Portfolio Tracking", "Real-time Alerts", "Trade History"],
      role: "Team Lead & Full-stack Developer",
      projectType: "University Group Project",
      projectCategory: "Software Engineering",
      githubLink: null,
      highlights: [
        "Led a team of 4 developers using Agile methodology",
        "Implemented secure authentication with JWT and 2FA",
        "Integrated real-time cryptocurrency data from multiple APIs",
        "Achieved 95% test coverage with comprehensive unit and integration tests"
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Virtual Mars: Gaussian Splatting",
      period: "Aug 2025 – Present",
      description: "Creating interactive 3D Martian landscapes using Gaussian Splatting techniques",
      tech: ["Python", "3D Gaussian Splatting", "SfM", "Computer Vision"],
      features: ["3D Reconstruction", "Mars Rover Data", "Interactive Exploration"],
      role: "Lead Researcher",
      projectType: "Final Year Project",
      projectCategory: "Ongoing Research",
      githubLink: null,
      highlights: [
        "Developing novel approach to 3D reconstruction of Martian terrain",
        "Processing NASA Mars rover imagery for photogrammetry",
        "Implementing Gaussian Splatting for real-time rendering",
        "Creating interactive exploration interface for virtual Mars environment"
      ],
      icon: <School className="h-5 w-5" />,
    },
    {
      title: "Tetris Game",
      period: "Jun 2024 – Aug 2024",
      description: "Classic Tetris implementation with modern features and polished gameplay",
      tech: ["Java", "Javax", "Git"],
      features: ["Scoring System", "Line Clearing", "Difficulty Scaling", "Sound Effects"],
      role: "Solo Developer",
      projectType: "Private Project",
      projectCategory: "Game Development",
      githubLink: "https://github.com/MUNEEBM05/Tetris",
      highlights: [
        "Implemented classic Tetris mechanics with smooth controls",
        "Added progressive difficulty scaling for challenging gameplay",
        "Created custom sound effects and visual feedback",
        "Optimized game loop for consistent 60 FPS performance"
      ],
      icon: <User className="h-5 w-5" />,
    },
    {
      title: "Horse Race Simulator",
      period: "Apr 2024",
      description: "Interactive racing game with betting system and animated graphics",
      tech: ["Java", "Swing GUI"],
      features: ["Custom Horses", "Betting System", "Race Animation", "Login System"],
      role: "Solo Developer",
      projectType: "University Project",
      projectCategory: "Coursework",
      githubLink: "https://github.com/MUNEEBM05/HorseRaceSimulator",
      highlights: [
        "Built complete GUI application using Java Swing",
        "Implemented realistic race physics and animations",
        "Created betting system with odds calculation",
        "Added user authentication and profile management"
      ],
      icon: <School className="h-5 w-5" />,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing full-stack development, AI/ML research, and software engineering
          </p>
        </div>

        {/* Projects List */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl shadow-lg overflow-hidden card-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-950 to-blue-500 bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {project.role}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {project.projectType}
                    </Badge>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium self-start">
                      {project.projectCategory}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
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

                  {/* Expandable Highlights */}
                  {expandedIndex === index && (
                    <div className="animate-fade-up">
                      <p className="text-sm font-medium mb-3">Key Highlights:</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <Button 
                          variant="accent" 
                          size="sm"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {expandedIndex === index ? (
                        <>
                          <ChevronUp className="mr-2 h-4 w-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="mr-2 h-4 w-4" />
                          Show More
                        </>
                      )}
                    </Button>
                  </div>
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
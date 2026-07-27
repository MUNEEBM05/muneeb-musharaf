import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Github, Calendar, Code, ChevronDown, ChevronUp, Users, User, School, Layers, Brain, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Virtual Mars: Gaussian Splatting",
      period: "Aug 2025 – May 2026",
      description: "Applied Gaussian Splatting to render immersive scenes from NASA Mars rover imagery",
      tech: ["Python", "3D Gaussian Splatting", "SfM", "Computer Vision"],
      features: ["3D Reconstruction", "Mars Rover Data", "Interactive Exploration", "Immersive Visualization"],
      role: "Lead Researcher",
      projectType: "Final Year Project",
      projectCategory: "Completed Research",
      githubLink: null,
      paperLink: null,
      reportLink: "/virtual-mars-final-report.pdf",
      highlights: [
        "Applied 3D Gaussian Splatting and Structure-from-Motion techniques to reconstruct immersive virtual scenes of Mars from NASA rover imagery (Curiosity & Perseverance)",
        "Created interactive 3D landscapes allowing seamless navigation of Martian terrain for scientific study and public exploration",
        "Co-supervised by Prof. Cédric John (DERI) and Dr. M. Hansard, with applications in computer vision, planetary science, and immersive visualization"
      ],
      icon: <School className="h-5 w-5" />,
    },
    {
      title: "Evaluating Foundation Models on Timbre-Related Cognitive Tasks",
      period: "Jun 2025 – Aug 2025",
      description: "Published research paper from the Google DeepMind Research Ready Programme, accepted at LLM4Music @ ISMIR 2025",
      tech: ["Python", "Large Language Models", "Audio Processing", "Cognitive Science", "Zero-shot Evaluation"],
      features: ["Published Paper", "Foundation Model Evaluation", "Timbre Analysis", "ISMIR 2025", "Zero-shot Tasks"],
      role: "AI Researcher — Google DeepMind Research Ready Programme",
      projectType: "Research Publication",
      projectCategory: "AI Research",
      githubLink: null,
      paperLink: "https://openreview.net/forum?id=tXyh8CY9kZ&noteId=42aTjap4Ms",
      reportLink: null,
      highlights: [
        "Selected as 1 of 12 participants globally for the Google DeepMind Research Ready Programme (Jun–Aug 2025)",
        "Investigated how well large language models understand timbre — a nuanced perceptual quality of sound central to music cognition",
        "Designed zero-shot evaluation tasks benchmarking foundation models against human cognitive science results on timbre perception",
        "Paper accepted to LLM4Music @ ISMIR 2025, a leading international venue for music information retrieval and AI",
        "Contributed to emerging understanding of whether LLMs can model subtle auditory concepts beyond surface-level pattern recognition"
      ],
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "Cryptocurrency Trading Platform",
      period: "Jan 2025 – Aug 2025",
      description: "Secure web-based cryptocurrency trading platform with Django backend and React frontend",
      tech: ["Django", "React", "PostgreSQL", "WebSockets", "REST API"],
      features: ["2FA Security", "Portfolio Tracking", "Real-time Alerts", "Trade History", "Circuit Breakers"],
      role: "Team Lead & Full-stack Developer",
      projectType: "University Group Project",
      projectCategory: "Software Engineering",
      githubLink: null,
      paperLink: null,
      reportLink: null,
      highlights: [
        "Led a team to develop a secure web-based cryptocurrency trading platform using Django (backend) and React (frontend)",
        "Designed security features such as two-factor authentication and trading circuit breakers to protect users",
        "Built portfolio tracking, trading history, and real-time price alert features",
        "Integrated external API feeds for live cryptocurrency data",
        "Documented system design with UML diagrams and applied Agile project management practices"
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Tetris Game",
      period: "Jun 2024 – Aug 2024",
      description: "Fully functioning Tetris game in Java with scoring and difficulty progression",
      tech: ["Java", "Javax", "Git"],
      features: ["Scoring System", "Line Clearing", "Difficulty Scaling", "Sound Effects", "Visual Animations"],
      role: "Solo Developer",
      projectType: "Personal Project",
      projectCategory: "Game Development",
      githubLink: "https://github.com/MUNEEBM05/Tetris",
      paperLink: null,
      reportLink: null,
      highlights: [
        "Created a fully functioning Tetris game in Java using the Javax library",
        "Implemented scoring, line-clearing logic, and difficulty progression",
        "Added sound effects and visual animations to improve user experience",
        "Managed source code with Git for version control and versioned releases",
        "Enhanced understanding of software lifecycle and user-centred design through iterative improvements"
      ],
      icon: <User className="h-5 w-5" />,
    },
    {
      title: "Horse Race Simulator",
      period: "Apr 2024",
      description: "Virtual horse racing simulator in Java with betting feature using virtual currency",
      tech: ["Java", "Swing GUI", "OOP"],
      features: ["Custom GUI", "Betting System", "Race Animation", "Login Authentication", "Horse Customisation"],
      role: "Solo Developer",
      projectType: "University Project",
      projectCategory: "Coursework",
      githubLink: "https://github.com/MUNEEBM05/HorseRaceSimulator",
      paperLink: null,
      reportLink: null,
      highlights: [
        "Developed a virtual horse racing simulator in Java with a betting feature using virtual currency",
        "Designed a custom GUI with login authentication, race animations, and horse customisation",
        "Applied object-oriented design principles and event-driven programming to manage race mechanics",
        "Incorporated probability and simulation logic to generate realistic race outcomes",
        "Strengthened Java programming skills through debugging, testing, and iterative development"
      ],
      icon: <School className="h-5 w-5" />,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <PageBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing full-stack development, AI/ML research, and software engineering
          </p>
        </div>

        {/* Projects List */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl shadow-lg overflow-hidden card-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="p-6 glass-card-header">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-accent via-accent2 to-teal bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-lg font-medium text-glassFg mt-1">
                          {project.projectType}
                        </p>
                        <p className="text-sm text-glassMuted mt-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 glass-pill px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-accent-hover" />
                      <span className="text-accent-hover font-medium">{project.period}</span>
                    </div>
                    <span className="px-3 py-1 glass-pill-alt text-teal-light rounded-full text-xs font-medium self-start">
                      {project.projectCategory}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2 text-glassFg">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Highlights */}
                  {expandedIndex === index && (
                    <div className="animate-fade-up">
                      <p className="text-sm font-medium mb-3 text-glassFg">Key Highlights:</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent-hover rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="text-sm text-glassMuted">{highlight}</span>
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
                      {project.paperLink && (
                        <Button
                          variant="accent"
                          size="sm"
                          onClick={() => window.open(project.paperLink!, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Paper
                        </Button>
                      )}
                      {project.reportLink && (
                        <Button
                          variant="accent"
                          size="sm"
                          onClick={() => window.open(project.reportLink!, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Report
                        </Button>
                      )}
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="text-glassMuted hover:text-accent-hover"
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
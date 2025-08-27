import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences = [
    {
      company: "Google DeepMind",
      role: "Research Ready Programme - Intern",
      period: "Jun 2025 – Aug 2025",
      location: "London, Hybrid",
      type: "AI/ML",
      description: "Selected as 1 of 12 nationwide for prestigious AI research programme",
      highlights: [
        "Conducted AI/music perception research on timbre-emotion relationships",
        "Implemented zero-shot learning and MLP models with CLAP and MuQMulan",
        "Achieved strong evaluation metrics (Kendall Tau, Spearman correlation)",
        "Presented research poster and co-authoring paper with PhD mentors",
      ],
      color: "accent",
    },
    {
      company: "Data Annotation",
      role: "Freelance Programmer & Annotator",
      period: "Feb 2025 – Present",
      location: "Online",
      type: "Full-stack",
      description: "Contributing to AI model training through data annotation and programming",
      highlights: [
        "Providing mathematical solutions and structured feedback for AI models",
        "Data annotation and cleaning for machine learning pipelines",
        "Small client projects using Python and SQL",
        "Gaining insights into model behavior and training processes",
      ],
      color: "teal",
    },
    {
      company: "London Science College",
      role: "Physics & Mathematics Tutor",
      period: "Sep 2023 – Present",
      location: "London, In-person",
      type: "Teaching",
      description: "Delivering high-quality STEM education with exceptional student outcomes",
      highlights: [
        "Creating custom lesson plans for diverse learning styles",
        "Teaching both group classes and 1-to-1 sessions",
        "Achieving over 90% high grade rate among students",
        "Mentoring students for exam preparation and university applications",
      ],
      color: "primary",
    },
    {
      company: "My Travel World",
      role: "Social Media Marketing Manager",
      period: "Aug 2024 – Present",
      location: "Hybrid",
      type: "Marketing",
      description: "Leading digital marketing strategies and brand development",
      highlights: [
        "Designing content using Canva and creative tools",
        "Managing Google and Facebook Ads campaigns",
        "Data-driven campaign optimization for increased ROI",
        "Cross-team collaboration for brand consistency",
      ],
      color: "secondary",
    },
    {
      company: "Queen Mary Ihsan Consulting Society",
      role: "Senior Member & Marketing Manager",
      period: "Oct 2024 – Present",
      location: "Hybrid",
      type: "Leadership",
      description: "Providing consulting services and leading marketing initiatives",
      highlights: [
        "Developing strategies for SMEs and charities",
        "Increased event applications by 20% through marketing campaigns",
        "Event coordination and team management",
        "Mentoring junior members and facilitating workshops",
      ],
      color: "accent",
    },
    {
      company: "Microsoft",
      role: "Accelerator Intern",
      period: "Oct 2024 – Dec 2024",
      location: "Online",
      type: "Technology",
      description: "Participated in intensive accelerator programme",
      highlights: [
        "Received mentorship from Microsoft professionals",
        "Worked on real-world enterprise projects",
        "Developed teamwork and agile workflow skills",
        "Rapid upskilling in cloud technologies and best practices",
      ],
      color: "teal",
    },
    {
      company: "STEMSMART Programme",
      role: "Intern",
      period: "Sep 2021 – May 2023",
      location: "Cambridge, Hybrid",
      type: "Research",
      description: "Two-year enrichment programme with research focus",
      highlights: [
        "Completed research-style projects with 85% overall score",
        "Developed analytical and project management skills",
        "Collaborated with Cambridge University researchers",
        "Enhanced problem-solving and critical thinking abilities",
      ],
      color: "primary",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1e3a8a' }}>
            Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI research to full-stack development and education
          </p>
        </div>


        {/* Experience Cards */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden card-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div
                className={`p-6 bg-gradient-to-r from-${exp.color}/10 to-${exp.color}/5 border-b border-border`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 bg-${exp.color}/20 rounded-lg`}>
                        <Briefcase className={`h-5 w-5 text-${exp.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {exp.role}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <span className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} rounded-full text-xs font-medium self-start`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedCard === index ? "max-h-96" : "max-h-0"
              }`}>
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-3 bg-secondary/30 hover:bg-secondary/50 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                {expandedCard === index ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
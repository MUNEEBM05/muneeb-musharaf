import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Calendar, MapPin, ChevronDown, ChevronUp, Award, Download } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import company logos
import deepmindLogo from "@/assets/logos/deepmind-logo.png";
import dataAnnotationLogo from "@/assets/logos/data-annotation-logo-new.jpg";
import londonScienceLogo from "@/assets/logos/london-science-college-new.png";
import travelWorldLogo from "@/assets/logos/travel-world-logo.png";
import qmConsultingLogo from "@/assets/logos/ihsan-consulting-new.png";
import microsoftLogo from "@/assets/logos/microsoft-logo.png";
import stemsmartLogo from "@/assets/logos/stemsmart-logo.png";

// Import certificates
import deepmindRRPCertificate from "@/assets/certificates/deepmind-rrp-certificate.jpg";
import microsoftCareerSkills from "@/assets/certificates/microsoft-career-skills.jpg";
import microsoftInterviewSkillsNew from "@/assets/certificates/microsoft-interview-skills-new.jpg";
import microsoftCompletion from "@/assets/certificates/microsoft-completion.png";
import stemsmartPhase1 from "@/assets/certificates/stemsmart-phase1.png";
import stemsmartPhase2 from "@/assets/certificates/stemsmart-phase2.png";

// Types
interface Certificate {
  name: string;
  image: string;
  issuer?: string;
  date?: string;
  type?: "certificate" | "badge";
}

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const experiences: Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    type: string;
    description: string;
    highlights: string[];
    logo: string;
    logoBg: string;
    certificates?: Certificate[];
  }> = [
    {
      company: "Google DeepMind",
      role: "Research Ready Programme - Intern",
      period: "Jun 2025 – Aug 2025",
      location: "London, Hybrid",
      type: "AI/ML",
      description: "Selected as 1 of 12 nationwide for prestigious AI research programme",
      highlights: [
        "Selected as 1 of 12 students nationwide for a competitive AI research programme with PhD supervision",
        "Researched whether AI can perceive music similarly to humans by analysing timbre-related emotion recognition tasks",
        "Implemented zero-shot and MLP experiments using CLAP and MuQMulan models to compare embeddings with human emotional responses",
        "Evaluated models with ranking metrics (Kendall Tau, Spearman) and regression methods",
        "Produced and presented an academic poster, and continuing collaboration with PhD researchers to co-author a forthcoming paper",
      ],
      logo: deepmindLogo,
      logoBg: "bg-sky-100 dark:bg-sky-950",
      certificates: [
        {
          name: "Research Ready Programme Certificate",
          image: deepmindRRPCertificate,
          issuer: "Google DeepMind",
          date: "2025",
          type: "certificate" as const,
        },
      ],
    },
    {
      company: "Data Annotation",
      role: "Freelance Programmer & Annotator",
      period: "Feb 2025 – Present",
      location: "Online",
      type: "Full-stack",
      description: "Contributing to AI model training through data annotation and programming",
      highlights: [
        "Provided expert mathematical solutions and structured feedback to train AI models on large datasets",
        "Annotated and cleaned complex data to improve model performance, accuracy, and reliability",
        "Programmed smaller client-focused projects in Python, SQL, and other languages",
        "Developed a deeper understanding of AI model behaviour and pattern recognition",
        "Strengthened problem-solving skills by adapting to diverse client and dataset requirements",
      ],
      logo: dataAnnotationLogo,
      logoBg: "bg-black dark:bg-black",
    },
    {
      company: "London Science College",
      role: "Physics & Mathematics Tutor",
      period: "Sep 2023 – Jul 2026",
      location: "London, In-person",
      type: "Teaching",
      description: "Delivering high-quality STEM education with exceptional student outcomes",
      highlights: [
        "Designed customised lesson plans and worksheets for GCSE and A-Level Mathematics and Physics",
        "Delivered engaging one-to-one and group sessions, tailoring methods to different learning styles",
        "Mentored students through exam preparation, focusing on problem-solving strategies and exam techniques",
        "Supported over 90% of students to achieve high exam grades and improved confidence",
        "Strengthened communication and teaching skills while breaking down complex STEM concepts",
      ],
      logo: londonScienceLogo,
      logoBg: "bg-blue-50 dark:bg-blue-950",
    },
    {
      company: "My Travel World",
      role: "Social Media Marketing Manager",
      period: "Aug 2024 – Aug 2025",
      location: "Hybrid",
      type: "Marketing",
      description: "Leading digital marketing strategies and brand development",
      highlights: [
        "Designed visually engaging posters and digital marketing content with Canva to grow the customer base",
        "Managed advertising campaigns via Google Ads and Facebook Ads, optimising for cost efficiency and reach",
        "Increased brand visibility by creating data-driven marketing strategies",
        "Collaborated with management to align campaigns with business goals",
        "Leveraged creativity and analytical skills to improve customer engagement",
      ],
      logo: travelWorldLogo,
      logoBg: "bg-teal-50 dark:bg-teal-950",
    },
    {
      company: "Queen Mary Ihsan Consulting Society",
      role: "Senior Member & Marketing Manager",
      period: "Oct 2024 – Present",
      location: "Hybrid",
      type: "Leadership",
      description: "Providing consulting services and leading marketing initiatives",
      highlights: [
        "Collaborated with the senior team to consult small businesses and charities on marketing strategies",
        "Designed and managed social media campaigns, increasing event applications by 20%",
        "Coordinated events and speaker sessions to support society growth",
        "Combined creativity with technical tools (Canva, social analytics) to promote consulting initiatives",
        "Strengthened leadership and teamwork through managing junior members and marketing projects",
      ],
      logo: qmConsultingLogo,
      logoBg: "bg-purple-50 dark:bg-purple-950",
    },
    {
      company: "Microsoft",
      role: "Accelerator Intern",
      period: "Oct 2024 – Dec 2024",
      location: "Online",
      type: "Technology",
      description: "Participated in intensive accelerator programme",
      highlights: [
        "Selected for a mentorship-driven accelerator programme gaining exposure to industry practices",
        "Collaborated on real-world tech projects, applying problem-solving and programming skills",
        "Learned from direct mentorship with Microsoft professionals, enhancing technical and teamwork skills",
        "Contributed to group projects simulating industry-standard workflows",
        "Built confidence in adapting to new technical challenges quickly",
      ],
      logo: microsoftLogo,
      logoBg: "bg-blue-500 dark:bg-blue-600",
      certificates: [
        {
          name: "Career Skills",
          image: microsoftCareerSkills,
          issuer: "Microsoft EMBRACE",
          date: "2024",
          type: "badge" as const,
        },
        {
          name: "Interview Skills Certificate",
          image: microsoftInterviewSkillsNew,
          issuer: "Microsoft EMBRACE",
          date: "2024",
          type: "certificate" as const,
        },
        {
          name: "Programme Completion",
          image: microsoftCompletion,
          issuer: "Microsoft EMBRACE",
          date: "2024",
          type: "certificate" as const,
        },
      ],
    },
    {
      company: "STEMSMART Programme",
      role: "Intern",
      period: "Sep 2021 – May 2023",
      location: "Cambridge, Hybrid",
      type: "Research",
      description: "Two-year enrichment programme with research focus",
      highlights: [
        "Contributed to a two-year STEM enrichment programme exploring advanced Mathematics, Physics, and Business",
        "Participated in collaborative research-style projects with peers and mentors",
        "Strengthened analytical and project management skills through team assignments",
        "Gained exposure to university-level problem-solving in STEM subjects during sixth form",
        "Achieved an overall 85% performance across the programme",
      ],
      logo: stemsmartLogo,
      logoBg: "bg-green-50 dark:bg-green-950",
      certificates: [
        {
          name: "Phase 1 Certificate",
          image: stemsmartPhase1,
          issuer: "STEMSMART Programme",
          date: "2022",
          type: "certificate" as const,
        },
        {
          name: "Phase 2 Certificate",
          image: stemsmartPhase2,
          issuer: "STEMSMART Programme",
          date: "2023",
          type: "certificate" as const,
        },
      ],
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleDownload = (imagePath: string, name: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = `${name.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <PageBackground />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
              className="glass-card rounded-2xl shadow-lg overflow-hidden card-lift"
            >
              {/* Card Header */}
              <div className="p-6 glass-card-header">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-28 h-28 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0" style={{ backgroundColor: exp.company === 'Data Annotation' ? 'black' : exp.company === 'Queen Mary Ihsan Consulting Society' ? 'rgb(16,12,100)' : exp.company === 'STEMSMART Programme' ? 'rgb(144,236,212)' : exp.company === 'London Science College' || exp.company === 'My Travel World' || exp.company === 'Microsoft' ? 'white' : 'rgb(72,132,244)' }}>
                        <img src={`${exp.logo}?v=7`} alt={`${exp.company} logo`} loading="lazy" className="w-full h-full object-contain p-3" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-bold bg-gradient-to-r from-accent via-accent2 to-teal bg-clip-text text-transparent">
                            {exp.company}
                          </h3>
                          {exp.certificates && exp.certificates.length > 0 && (
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                              <Award className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                              <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
                                {exp.certificates.length}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-lg font-bold text-glassFg mt-1">
                          {exp.role}
                        </p>
                        <p className="text-sm text-glassMuted mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 glass-pill px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 text-accent-hover" />
                      <span className="text-accent-hover font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 glass-pill-alt px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-teal-light" />
                      <span className="text-teal-light font-medium">{exp.location}</span>
                    </div>
                    <span className="px-3 py-1 glass-pill-alt rounded-full text-xs font-medium self-start text-teal-light">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedCard === index ? "max-h-[600px]" : "max-h-0"
              }`}>
                <div className="p-6">
                  <h4 className="font-semibold text-glassFg mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent-hover rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-glassMuted text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.certificates && exp.certificates.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-glassFg mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        Certificates & Badges
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {exp.certificates.map((cert, certIdx) => (
                          <div
                            key={certIdx}
                            className="group relative cursor-pointer transform transition-all duration-200 hover:scale-105"
                            onClick={() => setSelectedCertificate(cert)}
                          >
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg p-2 border border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600">
                              <div className="aspect-square relative overflow-hidden rounded-md bg-white dark:bg-gray-900">
                                <img
                                  src={cert.image}
                                  alt={cert.name}
                                  className="w-full h-full object-contain p-2"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-gray-900/90 rounded-full p-2">
                                    <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                  </div>
                                </div>
                              </div>
                              <p className="text-xs font-medium text-center mt-2 text-gray-700 dark:text-gray-300">
                                {cert.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Expand Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="w-full p-3 glass-card-header hover:brightness-95 transition-all flex items-center justify-center gap-2 text-sm font-medium text-glassFg"
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

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                {selectedCertificate?.name}
              </span>
              <button
                onClick={() => selectedCertificate && handleDownload(selectedCertificate.image, selectedCertificate.name)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Download"
              >
                <Download className="h-4 w-4" />
              </button>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedCertificate && (
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/10 dark:to-amber-800/10 rounded-lg p-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 flex justify-between items-center text-sm">
                  <div>
                    {selectedCertificate.issuer && (
                      <p className="text-gray-600 dark:text-gray-400">
                        Issued by: <span className="font-medium text-gray-800 dark:text-gray-200">{selectedCertificate.issuer}</span>
                      </p>
                    )}
                    {selectedCertificate.date && (
                      <p className="text-gray-600 dark:text-gray-400">
                        Date: <span className="font-medium text-gray-800 dark:text-gray-200">{selectedCertificate.date}</span>
                      </p>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedCertificate.type === 'badge' 
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {selectedCertificate.type === 'badge' ? 'Digital Badge' : 'Certificate'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Experience;
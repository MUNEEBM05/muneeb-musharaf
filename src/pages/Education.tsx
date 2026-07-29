import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { GraduationCap, Calendar, Award, Rocket, BookOpen, School } from "lucide-react";
import CountUp from "@/components/CountUp";

const Education = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
  const education = [
    {
      institution: "University College London (UCL)",
      degree: "MSc Artificial Intelligence and Robotics",
      period: "Starting Oct 2026",
      scholarship: "Martingale Scholarship",
      bullets: [
        "Selected as 1 of 12 people nationwide to receive the Martingale Scholarship.",
        "Provides guaranteed funding for a postgraduate programme in Artificial Intelligence.",
        "Starting the MSc in AI and Robotics at UCL in October 2026.",
      ],
      color: "accent",
      icon: Rocket,
    },
    {
      institution: "Queen Mary University of London",
      degree: "BSc Computer Science & Mathematics",
      period: "Sep 2023 – Jul 2026",
      grade: "First-Class Average",
      modules: [
        "Procedural & OOP",
        "Automata & Formal Languages",
        "Linear Algebra",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Internet Protocols",
        "Probability & Statistics",
        "Analysis of Calculus",
        "Numbers & Functions",
        "Vectors & Matrices",
        "Complex Variables",
      ],
      color: "accent",
      icon: GraduationCap,
    },
    {
      institution: "Newham Collegiate Sixth Form Centre",
      degree: "A-Levels",
      period: "Aug 2021 – Aug 2023",
      grades: [
        { subject: "Mathematics", grade: "A*" },
        { subject: "Further Mathematics", grade: "A*" },
        { subject: "Physics", grade: "A" },
      ],
      color: "teal",
      icon: BookOpen,
    },
    {
      institution: "Robert Clack School",
      degree: "GCSEs",
      period: "Sep 2019 – Jul 2021",
      grades: [
        { subject: "Mathematics", grade: "9" },
        { subject: "Further Mathematics", grade: "9" },
        { subject: "Statistics", grade: "9" },
        { subject: "Physics", grade: "8" },
        { subject: "Biology", grade: "8" },
        { subject: "Chemistry", grade: "8" },
        { subject: "English Language", grade: "8" },
        { subject: "English Literature", grade: "9" },
        { subject: "Computer Science", grade: "9" },
        { subject: "French", grade: "6" },
        { subject: "Geography", grade: "7" },
      ],
      color: "primary",
      icon: School,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <PageBackground />
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey with consistent excellence in Mathematics and Computer Science
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line - static track */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            {/* Timeline Line - animated fill, draws itself in top to bottom */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent2 to-teal origin-top animate-grow-down"></div>

            {/* Education Items */}
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  id={item.scholarship ? "martingale-scholarship" : undefined}
                  className="relative flex gap-8 mb-12 animate-fade-in scroll-mt-28"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center shadow-glow animate-pop-in opacity-0"
                      style={{ animationDelay: `${index * 200 + 300}ms` }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 relative glass-card rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    {/* Inner content */}
                    <div className="relative rounded-2xl p-8 h-full">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-accent via-accent2 to-teal bg-clip-text text-transparent">
                            {item.institution}
                          </h3>
                          {item.degree && (
                            <p className="text-lg font-bold text-glassFg mt-1">
                              {item.degree}
                            </p>
                          )}
                        </div>
                        {item.period && (
                          <div className="flex items-center gap-2 glass-pill px-3 py-1 rounded-full">
                            <Calendar className="h-4 w-4 text-accent-hover" />
                            <span className="text-sm font-medium text-accent-hover">{item.period}</span>
                          </div>
                        )}
                      </div>

                      {/* Grade Info */}
                      {item.grade && (
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="h-5 w-5 text-accent-hover animate-pulse" />
                          <span className="font-semibold text-accent-hover text-lg">{item.grade}</span>
                        </div>
                      )}

                      {/* Scholarship Badge */}
                      {item.scholarship && (
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 glass-pill-alt rounded-full">
                          <Rocket className="h-5 w-5 text-teal-light animate-pulse" />
                          <span className="font-semibold text-teal-light text-lg">{item.scholarship}</span>
                        </div>
                      )}

                      {/* Modules (for University) */}
                      {item.modules && (
                        <div>
                          <p className="text-sm font-bold text-accent-hover mb-3 uppercase tracking-wider">
                            Key Modules:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.modules.map((module, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 glass-pill text-glassFg rounded-full text-xs font-medium hover:brightness-95 transition-all duration-300 cursor-pointer"
                              >
                                {module}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bullet Points (for Scholarship) */}
                      {item.bullets && (
                        <ul className="space-y-2 text-glassFg">
                          {item.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-sm leading-relaxed flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-hover shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Grades (for A-Levels and GCSEs) */}
                      {item.grades && (
                        <div>
                          <p className="text-sm font-bold text-accent-hover mb-3 uppercase tracking-wider">
                            Grades Achieved:
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {item.grades.map((grade, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center p-3 glass-pill rounded-lg hover:brightness-95 transition-all duration-300"
                              >
                                <span className="text-sm font-medium text-glassFg">
                                  {grade.subject}
                                </span>
                                <span className="font-bold text-accent-hover text-lg ml-2">
                                  {grade.grade}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center animate-scale-in">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-accent via-accent2 to-teal bg-clip-text text-transparent mb-4">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold gradient-text">First-Class</p>
              <p className="text-glassMuted">University Average</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">
                <CountUp target={2} suffix=" × A*" />
              </p>
              <p className="text-glassMuted">Mathematics A-Levels</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">
                <CountUp target={11} suffix=" GCSEs" />
              </p>
              <p className="text-glassMuted">Grades 6-9</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Education;

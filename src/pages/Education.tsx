import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Queen Mary University of London",
      degree: "BSc Computer Science & Mathematics",
      period: "Sep 2023 – Present",
      graduation: "Expected Aug 2026",
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
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">
            Education
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey with consistent excellence in Mathematics and Computer Science
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-teal to-primary"></div>

            {/* Education Items */}
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-8 mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center shadow-glow"
                  >
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 relative bg-gradient-to-br from-accent/5 via-transparent to-teal/5 rounded-2xl p-[2px] shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Inner content */}
                  <div className="relative bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl p-8 h-full">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-950 to-blue-500 bg-clip-text text-transparent">
                          {item.institution}
                        </h3>
                        <p className="text-lg font-medium text-foreground mt-1">
                          {item.degree}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4 text-blue-950" />
                        <span className="text-sm font-medium text-blue-950">{item.period}</span>
                      </div>
                    </div>

                    {/* Grade/Graduation Info */}
                    {item.grade && (
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="h-5 w-5 text-accent animate-pulse" />
                        <span className="font-semibold text-accent text-lg">{item.grade}</span>
                        {item.graduation && (
                          <span className="text-muted-foreground">• {item.graduation}</span>
                        )}
                      </div>
                    )}

                    {/* Modules (for University) */}
                    {item.modules && (
                      <div>
                        <p className="text-sm font-bold text-accent mb-3 uppercase tracking-wider">
                          Key Modules:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.modules.map((module, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-secondary/50 border border-secondary text-foreground rounded-full text-xs font-medium hover:bg-secondary/70 transition-all duration-300 cursor-pointer"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Grades (for A-Levels and GCSEs) */}
                    {item.grades && (
                      <div>
                        <p className="text-sm font-bold text-accent mb-3 uppercase tracking-wider">
                          Grades Achieved:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {item.grades.map((grade, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between items-center p-3 bg-secondary/50 border border-secondary rounded-lg hover:bg-secondary/70 transition-all duration-300"
                            >
                              <span className="text-sm font-medium text-foreground">
                                {grade.subject}
                              </span>
                              <span className="font-bold text-accent text-lg ml-2">
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
            ))}
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="mt-16 bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl p-8 text-center animate-scale-in">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-950 to-blue-500 bg-clip-text text-transparent mb-4">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold gradient-text">First-Class</p>
              <p className="text-muted-foreground">University Average</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">2 × A*</p>
              <p className="text-muted-foreground">Mathematics A-Levels</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">11 GCSEs</p>
              <p className="text-muted-foreground">Grades 6-9</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Education;
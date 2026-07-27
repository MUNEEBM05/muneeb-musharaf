import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Code2, Brain, Database, Palette, Users, ChartBar } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "accent",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "R", "MATLAB"],
    },
    {
      title: "Frameworks & Tools",
      icon: Palette,
      color: "teal",
      skills: ["Django", "React", "Flask", "FastAPI", "Git/GitHub", "Docker", "IntelliJ", "VS Code", "Jupyter", "Colab"],
    },
    {
      title: "ML & AI",
      icon: Brain,
      color: "primary",
      skills: ["Data Preprocessing", "Feature Engineering", "Scikit-learn", "Pandas/NumPy", "Zero-shot Learning", "Model Evaluation", "Neural Networks"],
    },
    {
      title: "Mathematics & Analytics",
      icon: ChartBar,
      color: "secondary",
      skills: ["Linear Algebra", "Probability & Statistics", "Complex Variables", "Data Structures", "Algorithms", "Computational Statistics"],
    },
    {
      title: "Research Skills",
      icon: Database,
      color: "accent",
      skills: ["Experimental Design", "Academic Writing", "Poster Presentation", "Literature Review", "Data Analysis", "Collaboration"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "teal",
      skills: ["Leadership", "Communication", "Project Management", "Problem Solving", "Teamwork", "Creativity"],
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
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming, AI/ML, mathematics, and soft skills
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-accent2/35 border border-accent2/45 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-accent2/60 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent2/40 rounded-xl transition-all duration-300 group-hover:bg-accent2/55 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6 text-accent2" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-accent2/40 rounded-lg text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent2/55 hover:scale-110 hover:-translate-y-0.5 hover:text-accent2 hover:shadow-[0_0_14px_rgba(59,130,246,0.55)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 bg-accent2/35 border border-accent2/45 backdrop-blur-sm rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-6 text-center">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Visual Paradigm",
              "Microsoft Office",
              "Canva",
              "Google Ads",
              "Facebook Ads",
              "Matplotlib",
              "BlueJ",
              "PyCharm",
              "RESTful APIs",
              "WebSockets",
              "PostgreSQL",
              "MongoDB",
              "Redis",
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent2/40 border border-accent2/45 backdrop-blur rounded-full text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent2 hover:text-accent-foreground hover:scale-110 hover:shadow-[0_0_14px_rgba(59,130,246,0.55)] cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
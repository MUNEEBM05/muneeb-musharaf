import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code2, Brain, Database, Palette, Users, ChartBar } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "accent",
      skills: ["Java", "Python", "JavaScript/TypeScript", "SQL", "HTML/CSS", "R", "MATLAB"],
    },
    {
      title: "Frameworks & Tools",
      icon: Palette,
      color: "teal",
      skills: ["Django", "React", "Flask/FastAPI", "Git/GitHub", "Docker", "IntelliJ/VS Code", "Jupyter/Colab"],
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'rgb(12,15,34)' }}>
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
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-${category.color}/10 rounded-xl`}>
                    <Icon className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-all duration-300"
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
        <div className="mt-12 bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl p-8 animate-scale-in">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
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
              "Agile/Scrum",
              "RESTful APIs",
              "WebSockets",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "AWS Basics",
            ].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/50 backdrop-blur rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default"
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
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code2, Brain, Database, Palette, Users, ChartBar } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "accent",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 88 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "SQL", level: 82 },
        { name: "HTML/CSS", level: 90 },
        { name: "R", level: 75 },
        { name: "MATLAB", level: 78 },
      ],
    },
    {
      title: "Frameworks & Tools",
      icon: Palette,
      color: "teal",
      skills: [
        { name: "Django", level: 85 },
        { name: "React", level: 87 },
        { name: "Flask/FastAPI", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "IntelliJ/VS Code", level: 92 },
        { name: "Jupyter/Colab", level: 88 },
      ],
    },
    {
      title: "ML & AI",
      icon: Brain,
      color: "primary",
      skills: [
        { name: "Data Preprocessing", level: 85 },
        { name: "Feature Engineering", level: 82 },
        { name: "Scikit-learn", level: 83 },
        { name: "Pandas/NumPy", level: 88 },
        { name: "Zero-shot Learning", level: 75 },
        { name: "Model Evaluation", level: 80 },
        { name: "Neural Networks", level: 78 },
      ],
    },
    {
      title: "Mathematics & Analytics",
      icon: ChartBar,
      color: "secondary",
      skills: [
        { name: "Linear Algebra", level: 90 },
        { name: "Probability & Statistics", level: 88 },
        { name: "Complex Variables", level: 85 },
        { name: "Data Structures", level: 92 },
        { name: "Algorithms", level: 90 },
        { name: "Computational Statistics", level: 82 },
      ],
    },
    {
      title: "Research Skills",
      icon: Database,
      color: "accent",
      skills: [
        { name: "Experimental Design", level: 85 },
        { name: "Academic Writing", level: 83 },
        { name: "Poster Presentation", level: 88 },
        { name: "Literature Review", level: 86 },
        { name: "Data Analysis", level: 90 },
        { name: "Collaboration", level: 92 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "teal",
      skills: [
        { name: "Leadership", level: 88 },
        { name: "Communication", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Problem Solving", level: 92 },
        { name: "Teamwork", level: 90 },
        { name: "Creativity", level: 87 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
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
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animation: `slide-in-right 1s ease-out ${idx * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
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
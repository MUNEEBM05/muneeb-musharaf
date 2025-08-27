import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Briefcase, Heart } from "lucide-react";

const About = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "London, UK" },
    { icon: Briefcase, label: "Work Type", value: "Hybrid/Online" },
    { icon: Heart, label: "Interests", value: "AI/ML, Computer Vision, Research, Ed-Tech" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto whitespace-nowrap">
            Passionate about AI/ML with a strong foundation in Computer Science and Mathematics
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-lg card-lift">
              <h2 className="text-2xl font-bold text-primary mb-4">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a final-year BSc Computer Science & Mathematics student at Queen Mary University of London, 
                  currently maintaining a First-Class average. My journey in tech has been driven by a deep 
                  fascination with artificial intelligence and its potential to solve real-world problems.
                </p>
                <p>
                  As a current tutor at London Science College and freelance programmer/annotator at Data Annotation, 
                  I've developed strong skills in both teaching complex concepts and contributing to AI model training. 
                  My recent completion of the Google DeepMind Research Ready programme has further solidified my 
                  passion for AI/ML research.
                </p>
                <p>
                  Beyond academia, I enjoy landscape painting and sketching, which helps me maintain a creative 
                  balance. I'm also passionate about mentorship, regularly helping sixth-form students with their 
                  university applications and career guidance.
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <Button variant="hero" size="lg" className="w-full">
              <Download className="mr-2 h-5 w-5" />
              Download Full CV
            </Button>
          </div>

          {/* Quick Facts & Skills Overview */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-lg animate-slide-in-left">
              <h3 className="text-xl font-bold text-primary mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                    >
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {fact.label}
                        </p>
                        <p className="text-base font-semibold text-foreground">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl p-8 animate-slide-in-right">
              <h3 className="text-xl font-bold text-primary mb-4">Current Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    AI/ML Research with focus on music perception
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal rounded-full"></span>
                  <span className="text-muted-foreground">
                    Full-stack development with Django & React
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    3D Gaussian Splatting for Mars exploration (FYP)
                  </span>
                </li>
              </ul>
            </div>

            {/* Fun Facts */}
            <div className="bg-card rounded-2xl p-8 shadow-lg math-grid">
              <h3 className="text-xl font-bold text-primary mb-4">Beyond Code</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>🎨 Landscape painting & sketching enthusiast</p>
                <p>👨‍🏫 Mentor for university applications</p>
                <p>🧮 Mathematics tutor with over 90% student success rate</p>
                <p>🚀 Selected as 1 of 12 nationwide for DeepMind programme</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
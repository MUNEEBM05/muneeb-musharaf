import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Briefcase, Heart, Sparkles, GraduationCap } from "lucide-react";

const About = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "London, UK" },
    { icon: Briefcase, label: "Work Type", value: "Hybrid/Online" },
    { icon: Heart, label: "Interests", value: "AI/ML, Research, Deep Learning" },
  ];

  const currentFocus = [
    {
      icon: Sparkles,
      title: "Part-Time AI & Research Opportunities",
      description: "Actively looking for part-time roles and research collaborations in AI/ML to keep building applied experience alongside my other commitments.",
    },
    {
      icon: Briefcase,
      title: "Private Tutoring Practice",
      description: "Running my own private tutoring practice, teaching Maths, Further Maths, Physics and Computer Science to GCSE and A-Level students.",
    },
    {
      icon: GraduationCap,
      title: "Preparing for UCL",
      description: "Getting ready to start the MSc in Artificial Intelligence and Robotics at UCL this October, funded by the Martingale Scholarship.",
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
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI/ML with a strong foundation in Computer Science and Mathematics
          </p>
        </div>

        {/* Bio Section - full width */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
          <div className="glass-card rounded-2xl p-8 shadow-lg card-lift">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-4">My Journey</h2>
            <div className="space-y-4 text-glassFg">
              <p>
                I graduated with a First-Class BSc in Computer Science & Mathematics from Queen Mary University
                of London. My journey in tech has been driven by a deep fascination with artificial intelligence
                and its potential to solve real-world problems.
              </p>
              <p>
                Along the way I completed the Google DeepMind Research Ready programme and co-authored{' '}
                <a
                  href="https://openreview.net/forum?id=tXyh8CY9kZ&noteId=42aTjap4Ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Evaluating Foundation Models on Timbre-Related Cognitive Tasks
                </a>, published at LLM4Music @ ISMIR 2025. I also spent several years tutoring Maths, Further
                Maths, Physics and Computer Science, first at London Science College and now through my own
                private tutoring practice, alongside freelance programming and data annotation work.
              </p>
              <p>
                I'm now preparing to start an MSc in AI and Robotics at UCL this October, funded by the
                Martingale Scholarship. Beyond academia, I enjoy landscape painting and sketching, and I'm
                passionate about mentorship, regularly helping sixth-form students with their university
                applications and career guidance.
              </p>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full mt-6"
              onClick={() => window.open('/MuneebMusharafCV.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full CV
            </Button>
          </div>
        </div>

        {/* Quick Facts / Current Focus / Beyond Code - unified equal-height row */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
          {/* Quick Facts */}
          <div className="glass-card rounded-2xl p-8 shadow-lg animate-slide-in-left flex flex-col">
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-6">Quick Facts</h3>
            <div className="space-y-4">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 glass-pill rounded-xl transition-colors"
                  >
                    <div className="p-2 bg-white/50 rounded-lg">
                      <Icon className="h-5 w-5 text-accent-hover" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-glassMuted">
                        {fact.label}
                      </p>
                      <p className="text-base font-semibold text-glassFg">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Focus */}
          <div className="glass-card rounded-2xl p-8 animate-fade-up flex flex-col" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-4">Current Focus</h3>
            <ul className="space-y-4">
              {currentFocus.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <span className="p-1.5 bg-white/50 rounded-lg flex-shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-accent-hover" />
                    </span>
                    <div className="text-glassMuted">
                      <p className="font-medium mb-1 text-glassFg">{item.title}</p>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Fun Facts */}
          <div className="glass-card rounded-2xl p-8 shadow-lg animate-slide-in-right flex flex-col">
            <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mb-4">Beyond Code</h3>
            <div className="space-y-3 text-glassMuted">
              <p>🎨 Landscape painting & sketching enthusiast</p>
              <p>👨‍🏫 Mentor for university applications</p>
              <p>🧮 Mathematics tutor with over 90% student success rate</p>
              <p>🚀 Selected as 1 of 12 nationwide for DeepMind programme</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

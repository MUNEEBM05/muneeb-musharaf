import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-950">Contact</h1>
          <p className="text-lg text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-950 to-blue-500 bg-clip-text text-transparent">Get in Touch</h2>
            <div className="space-y-4">
              <a href="mailto:muneebmusharaf@outlook.com" className="flex items-center gap-3 p-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-xl hover:bg-accent/10 transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                <span>muneebmusharaf@outlook.com</span>
              </a>
              <a href="https://linkedin.com/in/muneebmusharaf" className="flex items-center gap-3 p-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-xl hover:bg-accent/10 transition-colors">
                <Linkedin className="h-5 w-5 text-accent" />
                <span>/in/muneebmusharaf</span>
              </a>
              <a href="https://github.com/MUNEEBM05" className="flex items-center gap-3 p-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-xl hover:bg-accent/10 transition-colors">
                <Github className="h-5 w-5 text-accent" />
                <span>/MUNEEBM05</span>
              </a>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-xl">
                <MapPin className="h-5 w-5 text-accent" />
                <span>London, UK</span>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-gradient-to-br from-accent/10 to-teal/10 rounded-2xl p-6">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-secondary border-0 focus:ring-2 focus:ring-accent" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-secondary border-0 focus:ring-2 focus:ring-accent" />
            <textarea placeholder="Your Message" rows={5} className="w-full p-3 rounded-lg bg-secondary border-0 focus:ring-2 focus:ring-accent"></textarea>
            <Button variant="hero" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
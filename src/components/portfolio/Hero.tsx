import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const scrollToSection = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Hi, I'm{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent animate-glow">
              NIYOYITA MIKE
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 font-light">
            Software Developer & Graphic Designer
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences through innovative web development 
            and cutting-edge Graphic design solutions. Passionate about turning complex problems 
            into elegant, scalable solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button variant="default" size="lg" className="group"
                  onClick={() => scrollToSection("#contact")}>
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open("./resume.pdf", "_blank")}
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 pt-8">
            <a href="https://github.com/peacemike" className="text-gray-400 hover:text-primary transition-colors p-2">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/niyoyita-mike-82767226a/" className="text-gray-400 hover:text-primary transition-colors p-2">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-gray-400 hover:text-primary transition-colors p-2">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
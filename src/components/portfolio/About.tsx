import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6" />,
    technologies: ["Node.js", "Python", "Express","MongoDB","PHP", "MySQL"]
  },
  {
    category: "IoT & Hardware",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ["Arduino", "Raspberry Pi", "Sensors", "ESP32"]
  },
  {
    category: "DevOps",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 3+ years of experience creating innovative solutions 
            that bridge the digital and physical worlds through web development and Graphic design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my journey as a curious developer student fascinated by the potential 
                of technology to solve real-world problems. Over the years, I've evolved into 
               software developer specializing in both web applications and Graphic design.
              </p>
              <p>
                My passion lies in creating seamless digital experiences that blend intuitive design with cutting-edge technology. As a graphic designer and developer, I focus on crafting visually compelling interfaces while integrating physical devices and sensors. I believe the future is in connected systems and creative digital solutions that make our lives more efficient, engaging, and enjoyable.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or working on personal IoT experiments in my home lab.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">08+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.category} 
                className="p-6 bg-card/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{skill.category}</h4>
                </div>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="mr-2 mb-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, MapPin, Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Software Development ",
    organization: "SOS THS",
    date: "2025",
    type: "High school Diploma",
    description: "Demonstrated expertise in designing distributed systems on AWS platform",
    icon: <Award className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Professional Diploma in Digital Marketing",
    organization: "Udemy",
    date: "2022",
    type: "certification",
    description: "Recognized for developing an innovative  home energy management system",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Artifical Intelligence Essentials",
    organization: "ALX Africa",
    date: "2023",
    type: "Education",
    description: "Completed intensive 6-month program covering modern web development technologies",
    icon: <Award className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Sound, Instrument Manager",
    organization: "SOS Community",
    date: "2022-Present",
    type: "Contribution",
    description: "Working on sound mixing and keeping track of instruments",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Weekly Math Competition 2021",
    organization: "Siyavula Math League",
    date: "2021",
    type: "Education",
    description: "I won the second position in the weekly math competition",
    icon: <Award className="w-5 h-5" />
  },
  
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "Award":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
    case "Certification":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
    case "Education":
      return "bg-green-500/10 text-green-700 dark:text-green-400";
    case "Contribution":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
    default:
      return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional growth, certifications, awards, and key milestones 
            that have shaped my journey as a developer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background"></div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <Card className="p-6 bg-card/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {achievement.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getTypeColor(achievement.type)}>
                            {achievement.type}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {achievement.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {achievement.organization}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {achievement.date}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
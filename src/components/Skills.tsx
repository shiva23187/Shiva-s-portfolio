import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Users, Brain, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: ["MERN Stack", "MySQL", "OOPs", "DBMS", "Bootstrap", "HTML", "CSS", "JavaScript"],
      gradient: "hero-gradient"
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VSCode", "Postman"],
      gradient: "accent-gradient"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Communication", "Problem Solving", "Collaboration", "Adaptability"],
      gradient: "hero-gradient"
    },
    {
      title: "Others",
      icon: <Brain className="w-6 h-6" />,
      skills: ["C++", "Data Structures", "Algorithms"],
      gradient: "accent-gradient"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.gradient} text-white group-hover:scale-110 transition-bounce`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-1 px-3 hover-lift transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Highlighted Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 p-4 bg-accent rounded-full">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Core Strengths</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["MERN Stack Development", "Problem Solving", "RESTful APIs", "Database Design", "Responsive Design"].map((strength, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-primary/5 border border-primary/20 rounded-full text-primary font-medium hover-lift transition-smooth"
              >
                {strength}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
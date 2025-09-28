import { Card } from "@/components/ui/card";
import { GraduationCap, User, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Parul University, Vadodara",
      period: "Sep 2022 – May 2026",
      grade: "CGPA: 7.23",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "MPC",
      institution: "Narayana Junior College, AP",
      period: "June 2020 – May 2022",
      grade: "74.3%",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 animate-fade-in-left">
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">My Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enthusiastic Full Stack Developer with hands-on experience in building 
                    real-world web applications using MERN stack. Strong foundation in DSA, 
                    JavaScript, Node.js, and MongoDB. Quick learner, eager to contribute in 
                    team environments and grow in a dynamic tech space.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Location & Goals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing my B.Tech in Computer Science while actively building 
                    projects and expanding my skillset. I'm passionate about creating efficient, 
                    user-friendly applications that solve real-world problems and make a positive impact.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent rounded-lg">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        <span className="text-sm font-medium text-secondary">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
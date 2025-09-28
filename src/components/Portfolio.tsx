import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, ShoppingCart, Home } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Home Heaven",
      description: "Responsive rental platform for homes, shops, and hostels with secure authentication and role-based access control.",
      icon: <Home className="w-8 h-8" />,
      technologies: ["MongoDB", "Express.js", "Node.js", "Bootstrap"],
      features: [
        "Secure login/signup with role-based access",
        "CRUD operations with property filters",
        "REST APIs for seamless integration",
        "Responsive design for all devices"
      ],
      gradient: "hero-gradient",
      github: "https://github.com/shiva23187/Home-Heaven---Real-Estate-application-",
      demo: "https://wander-lust-turoism-website.onrender.com"
    },
    {
      title: "Click2Cart",
      description: "Comprehensive e-commerce platform with secure authentication, product management, and admin dashboard.",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["React.js", "JSON Server", "CSS", "MongoDB Atlas"],
      features: [
        "Product browsing with search and filters",
        "Secure user authentication system",
        "Admin dashboard for management",
        "JSON Server backend simulation"
      ],
      gradient: "accent-gradient",
      github: "https://github.com/shiva23187/Click-2-cart-Ecommerce-website",
      demo: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise in full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`p-6 ${project.gradient} text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="p-8 bg-card rounded-2xl shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in More Projects?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile to see more of my work and contributions to open-source projects.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/shiva23187/" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
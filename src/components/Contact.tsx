import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code2, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shivasharath368@gmail.com",
      href: "mailto:shivasharath368@gmail.com",
      gradient: "hero-gradient"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9618846913",
      href: "tel:+919618846913",
      gradient: "accent-gradient"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/gshiva23/",
      platform: "Professional Network"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View My Code",
      href: "https://github.com/shiva23187/",
      platform: "Code Repository"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "LeetCode",
      value: "Coding Practice",
      href: "https://leetcode.com/u/Golla_shiva/",
      platform: "Problem Solving"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-6 hover-lift group">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 text-decoration-none"
                    >
                      <div className={`p-3 rounded-xl ${contact.gradient} text-white group-hover:scale-110 transition-bounce`}>
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{contact.label}</p>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-6 bg-accent/50 rounded-2xl">
              <h4 className="font-semibold mb-3">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          {/* Social Links & Platforms */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6">Find Me Online</h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <Card key={index} className="p-6 hover-lift group">
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-decoration-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-bounce">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.platform}</p>
                      </div>
                    </div>
                    <div className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                      {social.value}
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="p-8 hero-gradient text-white text-center">
              <h4 className="text-xl font-bold mb-4">Ready to Work Together?</h4>
              <p className="mb-6 text-white/90">
                Let's discuss your project and how I can contribute to your team's success.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                asChild
              >
                <a href="mailto:shivasharath368@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
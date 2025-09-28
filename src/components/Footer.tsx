import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/shiva23187/",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/gshiva23/",
      label: "LinkedIn"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      href: "https://leetcode.com/u/Golla_shiva/",
      label: "LeetCode"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:shivasharath368@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-smooth mb-3"
            >
              Golla Shiva
            </button>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer passionate about creating meaningful digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth hover-lift"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-2">
              © {currentYear} Made with 
              <Heart className="w-4 h-4 text-red-500" /> 
              by Golla Shiva
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
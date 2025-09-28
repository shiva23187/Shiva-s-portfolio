import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 modern-bg"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-10 animate-fade-in-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for work
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg animate-gradient">
                Hi, I'm Golla shiva
              </h1>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                  Full Stack Developer
                </h2>
                <div className="flex flex-wrap gap-2 text-lg text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">MERN STACK</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">Problem Slover</span>
    
                  
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Enthusiastic developer with hands-on experience in building real-world web applications. 
                Passionate about creating efficient, scalable solutions that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="group"
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/shiva23187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gshiva23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:shivasharath368@gmail.com"
                  className="social-icon group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="relative animate-fade-in-right">
            {/* Modern Image Container */}
            <div className="relative group">
              {/* Glass Card Background */}
              <div className="absolute inset-0 glass-card rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 glass-card rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              
              {/* Main Image */}
              <div className="relative glass-card rounded-3xl p-2 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="Golla Shiva - Full Stack Developer"
                  className="w-full max-w-md max-h-[450px] mx-auto rounded-2xl object-cover"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Modern Floating Elements */}
            <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-3 animate-float">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="absolute top-1/4 -right-6 glass-card rounded-xl p-2 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs font-medium text-primary">React</div>
            </div>
            <div className="absolute bottom-1/4 -left-6 glass-card rounded-xl p-2 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-xs font-medium text-secondary-foreground">Node.js</div>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-3 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
            </div>
            
            {/* Code Snippet Floating Element */}
            <div className="absolute top-1/2 -right-8 glass-card rounded-lg p-3 max-w-32 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs font-mono text-muted-foreground">
                <div>const dev = &#123;</div>
                <div className="ml-2 text-primary">skills: "MERN"</div>
                <div>&#125;</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full subtle-gradient opacity-50 -z-10"></div>
    </section>
  );
};

export default Hero;

import { ArrowRight, Download, Code, Camera } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground animate-fade-in" style={{ animationDelay: '0ms' }}>
              <Code className="w-5 h-5 text-primary" />
              <span>Software Developer</span>
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              <Camera className="w-5 h-5 text-accent" />
              <span>Cinematographer</span>
            </div>
            
            <h1 className="text-hero font-bold animate-fade-in" style={{ animationDelay: '250ms' }}>
              <span className="text-glow">Bipin Chandra</span>
              <br />
              <span className="text-gradient">Pandey</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '500ms' }}>
              Crafting digital experiences through code and capturing stories through camera. 
              A passionate developer and cinematographer bringing ideas to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '750ms' }}>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="btn-hero group"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="btn-ghost-hero"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Creative Vision</div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-glow"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 hero-image-anim">
              <img 
                src="https://i.postimg.cc/KvY0sk6y/Whats-App-Image-2025-08-27-at-11-48-09.jpg"
                alt="Bipin Chandra Pandey" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
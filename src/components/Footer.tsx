import { Sparkles, Code, Camera, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6">
          {/* Name and tagline */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bipin Chandra <span className="text-gradient">Pandey</span>
            </h3>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm">Software Developer</span>
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              <Camera className="w-4 h-4 text-accent" />
              <span className="text-sm">Cinematographer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center flex-wrap gap-6 text-sm">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Resume", href: "#resume" },
              { label: "Contact", href: "#contact" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Sparkles className="w-4 h-4 text-primary" />
                <span>by Bipin using React.js & Tailwind CSS</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  © 2025 Bipin Chandra Pandey. All rights reserved.
                </span>
                
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground">
            <p>
              Building innovative solutions • Creating visual stories • Based in Uttarakhand, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
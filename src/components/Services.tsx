import { 
  Code, 
  BarChart3, 
  Zap, 
  Camera, 
  Share2, 
  ImageIcon,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      title: "Web & Software Development",
      description: "Custom web applications and software solutions built with modern technologies.",
      icon: Code,
      color: "primary",
      features: [
        "Responsive Web Design",
        "Frontend Development",
        "E-commerce Solutions",
        "API Integration",
        "Database Design"
      ],
      technologies: ["React.js", "JavaScript", "Python", "Firebase", "MySQL"]
    },
    {
      title: "Data Analytics & AI Solutions",
      description: "Transform your data into actionable insights with advanced analytics and AI.",
      icon: BarChart3,
      color: "accent",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Business Intelligence",
        "Custom Dashboards",
        "Report Automation"
      ],
      technologies: ["Python", "SQL", "AI Tools", "Analytics", "Automation"]
    },
    {
      title: "AI Prompt Engineering & Automation",
      description: "Optimize AI workflows and automate processes for maximum efficiency.",
      icon: Zap,
      color: "primary",
      features: [
        "Process Automation",
        "AI Integration",
        "Workflow Optimization",
        "Custom AI Tools",
        "Performance Monitoring"
      ],
      technologies: ["AI Tools", "Python", "Automation", "API Integration"]
    },
    {
      title: "Cinematography & Video Editing",
      description: "Professional video production from concept to final delivery.",
      icon: Camera,
      color: "accent",
      features: [
        "Mobile Cinematography",
        "Professional Editing",
        "Color Grading",
        "Sound Design",
        
      ],
      technologies: ["CapCut", "Color Grading", "Audio Editing", "Visual Effects"]
    },
    {
      title: "Social Media Management & Strategy",
      description: "Comprehensive social media solutions to grow your online presence.",
      icon: Share2,
      color: "primary",
      features: [
        "Content Strategy",
        "Campaign Management",
        "Analytics & Reporting",
        "Community Engagement",
        "Brand Development"
      ],
      technologies: ["Analytics", "Campaign Tools", "Content Creation", "Strategy"]
    },
    {
      title: "Photography & Branding",
      description: "Visual identity and branding solutions that make your business stand out.",
      icon: ImageIcon,
      color: "accent",
      features: [
        "Brand Photography",
        "Visual Identity",
        "Logo Design",
        "Marketing Materials",
        "Product Photography"
      ],
      technologies: ["Photography", "Design Tools", "Brand Strategy", "Visual Design"]
    }
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const IconComponent = service.icon;
    const isAccent = service.color === "accent";
    
    return (
      <div 
        className="card-cinematic group hover:scale-105 transition-all duration-300 h-full"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
              isAccent ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
            }`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="flex-grow mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                    isAccent ? 'text-accent' : 'text-primary'
                  }`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech: string, idx: number) => (
                <span 
                  key={idx}
                  className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className={`w-full group ${
              isAccent ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground' 
                       : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
            }`}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions combining technical expertise with creative vision 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Process Overview */}
        <div className="card-glow">
          <div className="text-center mb-8">
            <h3 className="text-title text-primary mb-4">My Process</h3>
            <p className="text-muted-foreground">
              A streamlined approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", desc: "Strategic approach and technical planning" },
              { step: "03", title: "Development", desc: "Building and creating with precision" },
              { step: "04", title: "Delivery", desc: "Testing, optimization, and final delivery" }
            ].map((phase, idx) => (
              <div key={idx} className="text-center relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-primary/30 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
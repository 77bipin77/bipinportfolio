import { ExternalLink, Github, Calendar, Code, Sparkles, Award } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Dr. Chandra Clinic Website",
      description: "Full-stack healthcare application with appointment booking, dark/light mode, Firebase integration, responsive design, animations, and smooth UI.",
      year: "2025",
      category: "Healthcare Web App",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript", "Responsive Design"],
      features: [
        "Appointment Booking System",
        "Dark/Light Mode Toggle",
        "Real-time Database",
        "Responsive Design",
        "Smooth Animations",
        "User Dashboard"
      ],
      status: "Live",
      featured: true,
      image: "healthcare-app",
      liveUrl: "https://drchandraclinic.netlify.app/",
      repoUrl: "https://github.com/77bipin77/dr-chandra-website"
    },
    {
      title: "Copyright Me",
      description: "AI + OS-based copyright validation tool that helps creators protect their intellectual property with automated detection and validation.",
      year: "2025",
      category: "AI Tool",
      technologies: ["Python", "AI APIs", "Machine Learning", "Data Analytics"],
      features: [
        "AI-Powered Detection",
        "Automated Validation",
        "Copyright Database",
        "Legal Compliance",
        "Batch Processing"
      ],
      status: "In Development",
      featured: true,
      image: "ai-copyright"
    },
    {
      title: "Pseudocode Compiler",
      description: "Innovative compiler that converts pseudocode into Python, C, and Java, bridging the gap between algorithm design and implementation.",
      year: "2024",
      category: "Developer Tool",
      technologies: ["Python", "Compiler Design", "Multi-language Support", "Algorithm Processing"],
      features: [
        "Multi-language Output",
        "Syntax Optimization",
        "Error Detection",
        "Code Documentation",
        "Performance Analysis"
      ],
      status: "Live",
      featured: true,
      image: "compiler-tool"
    }
    
   
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
      <div 
        className={`${project.featured ? 'card-glow lg:col-span-2' : 'card-cinematic'} group hover:scale-[1.02] transition-all duration-300`}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="flex flex-col h-full">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                project.featured ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
              }`}>
                <Code className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Award className="w-4 h-4 text-accent" />
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="px-2 py-1 bg-muted rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'Live' 
                  ? 'bg-green-500/20 text-green-400' 
                  : project.status === 'Beta'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-orange-500/20 text-orange-400'
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border border-border hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </a>
            ) : (
              <Button variant="outline" size="sm" className="flex-1" disabled>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
            )}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </a>
            ) : (
              <Button variant="outline" size="sm" className="flex-1" disabled>
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of innovative projects that demonstrate the fusion of technical expertise 
            and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "10+", label: "freelace Projects Completed", icon: Code },
            { number: "3+", label: "Years Experience in cinematography", icon: Calendar },
            { number: "100%", label: "Client Satisfaction", icon: Award },
            { number: "∞", label: "Lines of Code", icon: Sparkles }
          ].map((stat, idx) => (
            <div key={idx} className="text-center card-cinematic group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-glow inline-block max-w-md">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-4">
              Let's collaborate and create something amazing together.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
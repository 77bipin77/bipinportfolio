import { Briefcase, Calendar, ArrowUpRight, Star } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Software & Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      type: "Freelance",
      description: "Building modern web applications and software solutions for clients worldwide.",
      achievements: [
        "Developed 15+ responsive websites using React.js and Tailwind CSS",
        "Created full-stack applications with Firebase integration",
        "Implemented AI-powered features and automation tools",
        "Maintained 98% client satisfaction rate"
      ],
      technologies: ["React.js", "JavaScript", "Python", "Firebase", "Tailwind CSS"],
      featured: true
    },
    {
      title: "Freelance Social Media Manager & Content Strategist",
      company: "Various Clients",
      period: "2023 - Present",
      type: "Freelance",
      description: "Creating engaging content strategies and managing social media presence for businesses.",
      achievements: [
        "Increased client social media engagement by 200%",
        "Developed content calendars for 10+ brands",
        "Created viral video content with 100K+ views",
        "Managed advertising campaigns with 15% average CTR"
      ],
      technologies: ["CapCut", "Photoshop", "Analytics", "Campaign Management"],
      featured: false
    },
    
      {
        "title": "Founder & Creative Technologist",
        "company": "finding.bipin",
        "period": "2024 - Present",
        "type": "Cinematograohy",
        "description": "Blending technology with storytelling — crafting digital experiences, cinematic edits, and innovative solutions that connect with people on a deeper level.",
        "achievements": [
          "Built a personal brand with 500K+ reel views and 20M+ reach in just a few months",
          "Created cinematic travel & storytelling content using only a smartphone",
         
          "Collaborated with creators, startups, and local businesses",
          "Balanced academics in Computer Science with a passion for cinematography and content creation"
        ],
      technologies: ["Business Strategy", "Brand Development", "Product Management"],
      featured: true
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A journey of professional growth, creative exploration, and technical excellence.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${exp.featured ? 'card-glow' : 'card-cinematic'} group hover:scale-[1.01] transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Timeline & Company Info */}
                <div className="lg:w-1/3 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      exp.featured ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                    }`}>
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    exp.type === 'Freelance' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {exp.type}
                  </span>

                  {exp.featured && (
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:w-2/3 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground border border-border hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-cinematic inline-block">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss how I can help bring your ideas to life.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
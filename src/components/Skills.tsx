import { Code, Camera, Palette, Database, Globe, Zap, Film, Mic, Layers, Monitor } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code, color: "primary" },
    { name: "JavaScript", level: 85, icon: Code, color: "accent" },
    { name: "React.js", level: 88, icon: Globe, color: "primary" },
    { name: "C/C++", level: 80, icon: Code, color: "accent" },
    { name: "HTML5 & CSS3", level: 92, icon: Monitor, color: "primary" },
    { name: "Tailwind CSS", level: 90, icon: Palette, color: "accent" },
    { name: "SQL & MySQL", level: 75, icon: Database, color: "primary" },
    { name: "Firebase", level: 82, icon: Zap, color: "accent" },
    { name: "AI Tools & Automation", level: 85, icon: Zap, color: "primary" },
    { name: "Data Analytics", level: 78, icon: Database, color: "accent" }
  ];

  const cinematographySkills = [
    { name: "Mobile Cinematography", level: 95, icon: Camera, color: "accent" },
    { name: "CapCut Editing", level: 92, icon: Film, color: "primary" },
    { name: "Color Grading", level: 88, icon: Palette, color: "accent" },
    { name: "Pre-filter Mixing", level: 85, icon: Layers, color: "primary" },
    { name: "Natural Sound Integration", level: 90, icon: Mic, color: "accent" },
    { name: "Mood-based Editing", level: 93, icon: Film, color: "primary" },
    { name: "Visual Storytelling", level: 95, icon: Camera, color: "accent" },
    { name: "Content Strategy", level: 87, icon: Layers, color: "primary" }
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    const IconComponent = skill.icon;
    const isAccent = skill.color === "accent";
    
    return (
      <div 
        className="card-cinematic group hover:scale-105 transition-all duration-300"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isAccent ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
          }`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </h3>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <span className={`font-medium ${isAccent ? 'text-accent' : 'text-primary'}`}>
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                isAccent ? 'bg-gradient-to-r from-accent to-orange-400' : 'bg-gradient-to-r from-primary to-blue-500'
              }`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive blend of technical programming skills and creative cinematography expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-title text-primary">Technical Skills</h3>
            </div>
            
            <div className="grid gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Cinematography Skills */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-title text-accent">Cinematography & Editing</h3>
            </div>
            
            <div className="grid gap-6">
              {cinematographySkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Skill Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center card-glow">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Full-Stack Development</h4>
            <p className="text-muted-foreground text-sm">
              Building complete web applications from frontend to backend with modern technologies.
            </p>
          </div>

          <div className="text-center card-glow">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Visual Storytelling</h4>
            <p className="text-muted-foreground text-sm">
              Creating compelling narratives through professional cinematography and editing techniques.
            </p>
          </div>

          <div className="text-center card-glow">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">AI Integration</h4>
            <p className="text-muted-foreground text-sm">
              Leveraging artificial intelligence and automation to create innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
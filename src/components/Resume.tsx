import { Download, FileText, Award, GraduationCap, Briefcase, Code } from "lucide-react";
import { Button } from "./ui/button";

const Resume = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "B.Tech CSE - Graphic Era Hill University (2022-2026)",
        "Bachelor of Arts - Kumaun University (2018-2021)",
        "Intermediate & High School - Sri Dasmesh School, Bazpur"
      ]
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        "3+ Years Freelance Development",
        "Founder of finding.bipin (2024-Present)",
        "Social Media Manager & Content Strategist",
        "web Developer & AI Specialist"
      ]
    },
    {
      icon: Code,
      title: "Technical Skills",
      items: [
        "Languages: Python, JavaScript, C/C++, SQL",
        "Frameworks: React.js, Tailwind CSS, Firebase",
        "Specialties: AI Tools, Data Analytics, Automation",
        "Creative: Cinematography, Video Editing, CapCut"
      ]
    },
    {
      icon: Award,
      title: "Achievements",
      items: [
        "10+ Successful Project Deliveries",
        "98% Client Satisfaction Rate",
        "AI-Powered Innovation Projects",
        "Creative Content with 29M Views"
      ]
    }
  ];

  const downloadResume = () => {
    // Link to the actual PDF file in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf/Bipin.pdf';
    link.download = 'Bipin_Pandey_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            Resume & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my professional journey, technical expertise, 
            and creative achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Resume Card */}
          <div className="card-glow mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-title text-primary mb-2">Professional Resume</h3>
              <p className="text-muted-foreground">
                Complete details of my educational background, work experience, and technical skills
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">∞</div>
                <div className="text-sm text-muted-foreground">Creativity</div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <Button 
                onClick={downloadResume}
                className="btn-hero group px-8 py-4"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                PDF format • Last updated: January 2025
              </p>
            </div>
          </div>

          {/* Detailed Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={section.title} 
                  className="card-cinematic animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Professional Summary */}
          <div className="mt-12 card-glow">
            <h3 className="text-title text-accent mb-6 text-center">Professional Summary</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                A dedicated Computer Science Engineering student and accomplished freelance developer 
                with a unique blend of technical expertise and creative cinematography skills. 
                Proven track record of delivering innovative solutions across web development, 
                AI integration, and visual storytelling. Passionate about leveraging technology 
                to solve real-world problems while maintaining a strong focus on user experience 
                and creative excellence. Committed to continuous learning and staying at the 
                forefront of emerging technologies.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center card-cinematic">
              <h4 className="font-semibold text-foreground mb-2">Languages</h4>
              <p className="text-sm text-muted-foreground">Hindi (Native), English (Fluent)</p>
            </div>
            <div className="text-center card-cinematic">
              <h4 className="font-semibold text-foreground mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">Full-time & Project-based</p>
            </div>
            <div className="text-center card-cinematic">
              <h4 className="font-semibold text-foreground mb-2">Location</h4>
              <p className="text-sm text-muted-foreground">Uttarakhand, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
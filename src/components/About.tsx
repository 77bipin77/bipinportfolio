import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
const About = () => {
  const educationTimeline = [{
    year: "2022-2026",
    degree: "B.Tech Computer Science Engineering",
    institution: "Graphic Era Hill University, Bheemtal",
    status: "current"
  }, {
    year: "2018-2021",
    degree: "Bachelor of Arts",
    institution: "Kumaun University",
    status: "completed"
  }, {
    year: "2018",
    degree: "Intermediate (12th)",
    institution: "Sri Dasmesh School, Bazpur",
    status: "completed"
  }, {
    year: "2016",
    degree: "High School (10th)",
    institution: "Sri Dasmesh School, Bazpur",
    status: "completed"
  }];
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate journey through technology and creativity, bridging the gap between code and cinema.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-slide-up">
            <div className="card-cinematic">
              <h3 className="text-title text-primary mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science Engineering student with a unique passion for both 
                  technology and cinematography. My journey combines the precision of coding 
                  with the artistry of visual storytelling.
                </p>
                <p>while pursuing my B.A., I was also preparing for the Indian Army and cleared the physical and medical tests in my very first attempt. Unfortunately, with the introduction of the Agniveer scheme, my path took a different turn. Instead of giving up, I decided to channel my discipline and determination into technology—building a career in coding, software, and creative storytelling while continuously learning new skills to shape my future.</p>
                <p>
                  As a freelance developer and cinematographer since 2020, I've been crafting 
                  digital solutions and capturing compelling visual narratives. My work spans 
                  from building full-stack applications to creating cinematic content that 
                  resonates with audiences.
                </p>
              </div>
            </div>

            <div className="card-cinematic">
              <h3 className="text-title text-accent mb-4">Creative Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that technology and creativity are not separate domains but 
                complementary forces. Whether I'm debugging code or color grading footage, 
                I approach each project with the same attention to detail and passion 
                for excellence.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-up">
            <h3 className="text-title text-primary mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Educational Journey
            </h3>
            
            <div className="space-y-6">
              {educationTimeline.map((item, index) => <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== educationTimeline.length - 1 && <div className="absolute left-4 top-8 w-0.5 h-16 bg-primary/30"></div>}
                  
                  <div className="flex gap-4 items-start">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${item.status === 'current' ? 'bg-primary border-primary animate-pulse' : 'bg-card border-primary/50'}`}>
                      {item.status === 'current' ? <div className="w-2 h-2 bg-primary-foreground rounded-full"></div> : <Award className="w-3 h-3 text-primary" />}
                    </div>
                    
                    <div className="card-cinematic flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{item.degree}</h4>
                        <span className={`text-sm px-2 py-1 rounded-full ${item.status === 'current' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                          {item.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.institution}</span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Additional Info */}
            <div className="mt-8 card-glow">
              <h4 className="text-lg font-semibold text-accent mb-3">Key Highlights</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Career transition from Arts to Technology
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Military-inspired discipline and leadership
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Self-taught cinematography and editing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Continuous learning in emerging technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
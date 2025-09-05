import { Code2, Palette, Users, Zap } from "lucide-react";
const About = () => {
  const focusAreas = [{
    icon: Palette,
    title: "UI/UX Design Thinking",
    description: "Creating user-centered interfaces with accessibility and usability at the forefront"
  }, {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building responsive, performant web applications with modern frameworks and tools"
  }, {
    icon: Users,
    title: "Collaborative Development",
    description: "Working effectively in Agile teams to deliver software solutions that meet business needs"
  }, {
    icon: Zap,
    title: "Modern Responsive Layouts",
    description: "Crafting adaptive designs that work seamlessly across all devices and platforms"
  }];
  return <section className="section-padding">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">About Me</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Passionate about creating meaningful digital experiences through thoughtful design and clean code
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1 flex justify-center animate-scale-in">
              <div className="relative">
                <img src="/lovable-uploads/161fa947-bb5a-4d52-9886-f4e7a5d9e529.png" alt="Shaurya Parshad" className="w-64 h-64 md:w-72 md:h-72 object-cover object-center rounded-2xl shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-2 space-y-6 animate-fade-up">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a software developer who believes that great technology starts with understanding people. 
                    Currently pursuing my Master of Applied Computing at the University of Windsor, I bring a 
                    design-conscious approach to every project I work on.
                  </p>
                  
                  <p>
                    My experience spans from frontend interfaces to backend systems, but what excites me most is 
                    the intersection of design and development. I enjoy translating complex business requirements 
                    into intuitive user experiences while maintaining clean, maintainable code.
                  </p>

                  <p>
                    During my internship at VMM Education, I had the opportunity to work on a complete grocery 
                    delivery platform, where I learned the importance of balancing user needs with technical 
                    constraints to deliver real business value.
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Currently Focusing On</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {focusAreas.map((area, index) => <div key={area.title} className="card-flat group hover:border-accent/50 animate-fade-up" style={{
                  animationDelay: `${index * 100}ms`
                }}>
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <area.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium text-sm">{area.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Fun Facts */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-semibold">Beyond Code</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="px-3 py-1 bg-secondary rounded-full">
                    🎯 Problem-solving enthusiast
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full">
                    🌱 Continuous learner
                  </span>
                  <span className="px-3 py-1 bg-secondary rounded-full">🤝 Team collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
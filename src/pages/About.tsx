const About = () => {

  return (
    <section className="section-padding pt-0 -mt-12 md:-mt-16">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">About Me</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Building intelligent systems that solve real-world problems
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-8">
            {/* Story */}
            <div className="card-elevated animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a software engineer with a passion for building intelligent, scalable systems. 
                    My work spans the full stack—from designing microservices architectures and 
                    distributed systems to implementing computer vision algorithms and machine learning 
                    pipelines.
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">What I Do</h3>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Build production-ready applications with Python, C++, Java, and modern web frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Design and deploy cloud-native solutions on AWS, Azure, and GCP</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Implement computer vision systems for 3D reconstruction and spatial analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Architect data pipelines processing millions of records with Apache Airflow</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Background</h3>
                    <p>
                      Previously at <strong className="text-foreground">Veenus Mind Media</strong> (Sep 2023 - Mar 2024), where I dove deep into 
                      full-stack development—learning React, Angular, Django, Python, Java, .NET, and 
                      Node.js while building healthcare applications. During this internship, I improved 
                      system performance by 30%, reduced software defects by 60%, and maintained 99.9% 
                      reliability. This experience gave me hands-on proficiency across the entire 
                      technology stack, from frontend frameworks to backend services and database management.
                    </p>
                    <p>
                      Currently pursuing <strong className="text-foreground">Master of Applied Computing</strong> at <strong className="text-foreground">University of Windsor</strong> 
                      (Jan 2025 - Present), with final semester internship starting January 2026.
                    </p>
                    <p>
                      When I'm not coding, I'm exploring the latest in AI/ML research, contributing 
                      to open-source projects, or experimenting with new tech stacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

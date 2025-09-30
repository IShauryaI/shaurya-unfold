import { Brain, Code, BarChart } from "lucide-react";

const Specializations = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Computer Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                3D reconstruction, stereo vision, and advanced image processing
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end application development with modern frameworks
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Data Engineering</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Large-scale data processing with ML pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;

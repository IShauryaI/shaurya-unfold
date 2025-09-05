import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {

  return (
    <section className="section-padding min-h-[calc(100vh-10rem)]">
      <div className="container-fluid">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-9xl font-bold text-gradient">404</h1>
            <h2 className="text-section">Page Not Found</h2>
            <p className="text-subtitle">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary"
              onClick={() => {
                const el = document.querySelector('#home');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const el = document.querySelector('#projects');
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              View Projects
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              If you believe this is an error, please{' '}
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-accent hover:underline"
              >
                contact me
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

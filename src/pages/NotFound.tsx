import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

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
            <Button asChild className="btn-primary">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">
                View Projects
              </Link>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              If you believe this is an error, please{" "}
              <Link to="/contact" className="text-accent hover:underline">
                contact me
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

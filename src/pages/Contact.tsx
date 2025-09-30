import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "parshad@uwindsor.ca",
    link: "mailto:parshad@uwindsor.ca"
  }, {
    icon: Phone,
    label: "Phone",
    value: "(226) 759-4638",
    link: "tel:+12267594638"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Windsor, Ontario, Canada",
    link: null
  }];
  const socialLinks = [{
    name: "GitHub",
    url: "https://github.com/IShauryaI",
    icon: Github,
    username: "IShauryaI"
  }, {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shaurya-parshad",
    icon: Linkedin,
    username: "shaurya-parshad"
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    try {
      // Simulate form submission (replace with actual form handler)
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or use the email link above.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="pt-0 pb-0 -mt-24 md:-mt-32">
      <div className="container-fluid py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <h1 className="text-section">Let's Build Something Amazing</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              I'm currently seeking Software Engineering Internship opportunities starting January 2026. Let's connect!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Contact Information */}
              <div className="space-y-4 animate-fade-up" style={{
              animationDelay: "200ms"
            }}>
                <h2 className="text-2xl font-bold text-center md:text-left">Contact Information</h2>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={`${info.label}-${index}`} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors min-h-[60px]">
                      <div className="p-2.5 bg-accent/10 rounded-lg flex-shrink-0">
                        <info.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p className="text-sm font-medium text-muted-foreground mb-0.5">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-foreground hover:text-accent transition-colors font-semibold">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-semibold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4 animate-fade-up" style={{
              animationDelay: "400ms"
            }}>
                <h3 className="text-2xl font-bold text-center md:text-left">Connect Online</h3>
                <div className="space-y-3">
                  {socialLinks.map(link => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group min-h-[60px]"
                    >
                      <div className="p-2.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <link.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p className="font-semibold">{link.name}</p>
                        <p className="text-sm text-muted-foreground">@{link.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action - Below the main content */}
            <div className="mt-8 animate-fade-up" style={{
            animationDelay: "600ms"
          }}>
              <div className="card-elevated text-center space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Connect?</h3>
                  <p className="text-muted-foreground max-w-lg mx-auto">Whether you're looking for an intern, want to collaborate on a project, or just want to chat about technology. I'd love to hear from you!</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild className="btn-primary">
                    <a href="mailto:parshad@uwindsor.ca">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://linkedin.com/in/shaurya-parshad" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="https://drive.google.com/uc?export=download&id=1s9_RFndZIar2aHot2mLHnTjEic5LpYEf" target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
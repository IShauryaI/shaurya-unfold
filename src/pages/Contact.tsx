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
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Windsor, Ontario",
      link: null
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(226) 759-4638",
      link: "tel:+12267594638"
    },
    {
      icon: Mail,
      label: "Email",
      value: "shauryapd@gmail.com",
      link: "mailto:shauryapd@gmail.com"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/IShauryaI",
      icon: Github,
      username: "IShauryaI"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shaurya-parshad",
      icon: Linkedin,
      username: "shaurya-parshad"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        variant: "destructive",
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
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission (replace with actual form handler)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
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
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-fluid">
        <div className="max-w-6xl mx-auto space-section">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-up mb-12">
            <h1 className="text-section">Get In Touch</h1>
            <p className="text-subtitle max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just connect. I'm always open to interesting conversations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-center md:text-left">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={`${info.label}-${index}`} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <info.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground hover:text-accent transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center md:text-left">Connect Online</h3>
                  <div className="space-y-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <link.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">{link.name}</p>
                          <p className="text-sm text-muted-foreground">@{link.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Email Link - Below the main content */}
            <div className="mt-10 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="card-flat max-w-md mx-auto">
                <div className="text-center space-y-6">
                  <Mail className="h-8 w-8 text-accent mx-auto" />
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Prefer Email?</h3>
                    <p className="text-sm text-muted-foreground">
                      Send me a direct email and I'll respond as soon as possible.
                    </p>
                  </div>
                  <Button asChild className="btn-secondary">
                    <a href="mailto:shauryapd@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
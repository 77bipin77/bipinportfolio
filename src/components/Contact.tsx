import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin,
  Send,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import React from "react"; // Added missing import

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - try different formats
  const EMAILJS_PUBLIC_KEY = 'ZWZlDQYk0BRp42q7d';
  const EMAILJS_TEMPLATE_ID = 'template_vdqp6c4';
  const EMAILJS_SERVICE_ID = 'service_mj2w0gl';

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Bipin Pandey'
      };

      console.log('Sending email with params:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        templateParams
      });

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS send Response:', response);

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = "There was an error sending your message. Please try again.";
      if (error.text) {
        errorMessage = `EmailJS Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      toast({
        title: "Failed to Send Message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bipin0pandey@gmail.com",
      href: "mailto:bipin0pandey@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6397780633",
      href: "tel:+916397780633",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Uttarakhand, India",
      href: "#",
      color: "primary"
    },
    {
      icon: Clock,
      label: "Availability",
      value: "24/7 Support",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/reel/DLyuMhTpLm1/?igsh=MWl5OG8wbmZoOXhiaQ==",
      color: "primary"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/1C826qdPWL/?mibextid=wwXIfr",
      color: "accent"
    },
    
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bipin-chandra-pandey-a7ba02184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your next project? Let's discuss how I can help bring 
            your ideas to life through code and creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-title text-primary mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need a web application, mobile app, data analytics solution, 
                or creative cinematography services, I'm here to help. Let's discuss 
                your project and make it happen.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const isAccent = info.color === "accent";
                
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="card-cinematic group hover:scale-105 transition-all duration-300 block"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isAccent ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  const isAccent = social.color === "accent";
                  
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        isAccent 
                          ? 'bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground' 
                          : 'bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response */}
            <div className="card-glow">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-foreground">Quick Response Guarantee</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="card-cinematic">
              <h3 className="text-title text-accent mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="your name"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="abc@example.com"
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion"
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project requirements..."
                    rows={6}
                    className="bg-muted border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Privacy Note:</strong> Your information is kept 
                    confidential and will only be used to respond to your inquiry.
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

export default Contact;
import { Button } from "@/components/ui/button";
import { Heart, Linkedin, Mail, Phone, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/hiten-jadavra",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:jadavrahiten07@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+916351220752",
      label: "Phone"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hiten Jadavra</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Software Engineer passionate about building scalable solutions with Java, Spring Boot, and modern technologies. 
              Always eager to take on challenging projects and drive innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
            <div className="text-sm text-primary-foreground/60 space-y-1">
              <p>📧 jadavrahiten07@gmail.com</p>
              <p>📱 +91 6351220752</p>
              <p>📍 Ahmedabad, Gujarat</p>
            </div>
            <div className="mt-6">
              <Button
                variant="secondary"
                size="lg"
                className="w-full md:w-auto px-8"
                asChild
              >
                <a href="mailto:jadavrahiten07@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Connect With Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>by Hiten Jadavra</span>
            <span>© {currentYear}</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
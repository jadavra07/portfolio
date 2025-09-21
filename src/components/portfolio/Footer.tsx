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
              {['skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="solid"
                  size="sm"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-full h-full"
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-sm text-primary-foreground/60 space-y-1">
              <p>📧 jadavrahiten07@gmail.com</p>
              <p>📱 +91 6351220752</p>
              <p>📍 Ahmedabad, Gujarat</p>
            </div>

            {/* Connect With Me Button */}
            <div className="mt-6">
              <Button
                variant="solid"
                size="lg"
                className="w-full md:w-auto px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300"
                asChild
              >
                <a href="mailto:jadavrahiten07@gmail.com" className="flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5" />
                  Connect With Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <span>Made</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Hiten Jadavra</span>
            <span>© {currentYear}</span>
          </div>
          
          <Button
            variant="solid"
            size="sm"
            onClick={scrollToTop}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

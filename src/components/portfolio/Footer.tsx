import { Button } from "@/components/ui/button";
import { Heart, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

          {/* Contact & Connect Button */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>

            {/* Only main Connect With Me Button */}
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
            <span>Made by Hiten Jadavra</span>
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

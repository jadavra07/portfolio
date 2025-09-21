import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hiten Jadavra
          </h1>

          <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
            Software Engineer
          </h2>

          {/* Professional Summary */}
          <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
            Experienced Software Engineer with expertise in Java, Spring Boot, and
            microservices. Passionate about developing scalable solutions and
            driving organizational growth through innovative technology.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+916351220752" className="hover:underline">
                +91 6351220752
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:jadavrahiten07@gmail.com" className="hover:underline">
                jadavrahiten07@gmail.com
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="solid"
              className="flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300"
              asChild
            >
              <a href="/Hiten_resume.pdf" download className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/hiten-jadavra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/hitenjadavra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Hero = () => {

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-primary-foreground/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-foreground/20 rounded-full"></div>
      </div>

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
            Experienced Software Engineer with expertise in Java, Spring Boot, and microservices. 
            Passionate about developing scalable solutions and driving organizational growth through innovative technology.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, Gujarat</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 6351220752</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>jadavrahiten07@gmail.com</span>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
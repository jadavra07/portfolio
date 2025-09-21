import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, Database, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Career Disa Project",
      type: "Government Project",
      description: "A comprehensive educational platform for student profiling, course recommendations, and college suggestions with advanced backend architecture.",
      technologies: [
        "Java", "Spring Boot", "Microservices", "Redis", "MySQL", 
        "RESTful APIs", "GitHub", "GitLab", "Stored Procedures"
      ],
      features: [
        "Student profiling system with recommendation engine",
        "Course and college suggestion algorithms",
        "Redis caching implementation for performance optimization",
        "Advanced pagination for handling large datasets",
        "Complete MVC architecture with DTOs and Services"
      ],
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Container Yard Management System (CYMS)",
      type: "Enterprise Solution",
      description: "A complete container yard management solution built from scratch with real-time tracking, automated scheduling, and comprehensive reporting modules.",
      technologies: [
        "Java", "Spring Boot", "MySQL", "Redis", "Stored Procedures", 
        "JPA", "RESTful APIs", "PDF Generation", "Real-time Processing"
      ],
      features: [
        "Real-time container tracking and monitoring",
        "Automated scheduling and resource optimization",
        "Advanced reporting with PDF generation",
        "Database query optimization with indexing",
        "Redis integration for high-performance caching"
      ],
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing end-to-end solutions built with modern Java technologies and microservices architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="px-3 py-1">
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-soft bg-card/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Development Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto">
                    <Server className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold">End-to-End Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete project lifecycle from architecture design to deployment
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto">
                    <Database className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold">Performance Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced caching, indexing, and query optimization techniques
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold">Secure Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    JWT authentication, token-based security, and API protection
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
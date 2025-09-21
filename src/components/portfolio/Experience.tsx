import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and delivering end-to-end software development projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-0 shadow-soft">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2">Software Engineer</CardTitle>
                  <div className="flex items-center gap-2 text-lg text-muted-foreground mb-2">
                    <Building className="w-5 h-5" />
                    <span>Qpaix Infitech Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>May 2024 – Present</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Product & Service-Based
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Key Responsibilities & Achievements</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Successfully developed and delivered all projects from scratch, handling end-to-end software development lifecycle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Reduced boilerplate code using Lombok and implemented secure APIs with JWT & token-based security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Designed & optimized SQL & JPA queries, joins, indexes, and Stored Procedures for high performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Integrated Kafka & Redis for messaging, data streaming, and caching solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Generated reports with I-Text PDF API and integrated Email & SMS APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Actively participated in Scrum methodology and sprint planning sessions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Technical Contributions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-medium text-primary">Architecture & Design</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• RESTful APIs & Microservices</li>
                      <li>• MVC & Reactive Patterns</li>
                      <li>• Database optimization</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium text-primary">Integration & DevOps</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Third-party API integrations</li>
                      <li>• Spring Boot deployment</li>
                      <li>• Version control management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
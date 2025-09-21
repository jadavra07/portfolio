import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Settings, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Java (Core & Advanced)",
        "Spring Boot",
        "Spring MVC", 
        "Spring Security",
        "Hibernate JPA",
        "Java 8, 17, 21"
      ]
    },
    {
      title: "API & Architecture",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        "RESTful APIs",
        "Microservices",
        "JWT Authentication",
        "MVC Pattern",
        "API Documentation",
        "Swagger"
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Stored Procedures",
        "Views & Indexing",
        "Redis Caching"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Git & GitHub",
        "GitLab",
        "Postman",
        "JUnit Testing",
        "Apache Tomcat",
        "Kafka & Message Broker"
      ]
    }
  ];

  const additionalSkills = [
    "React.js (Basic)",
    "IText PDF",
    "Razorpay Integration",
    "Email & SMS APIs",
    "Lombok",
    "Agile (Scrum)"
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills in backend development, microservices architecture, and modern Java technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 shadow-soft">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-tag text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
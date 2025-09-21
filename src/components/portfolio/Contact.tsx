import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Download, MessageCircle } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 6351220752",
      href: "tel:+916351220752",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "jadavrahiten07@gmail.com",
      href: "mailto:jadavrahiten07@gmail.com",
      action: "Email Me"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ahmedabad, Gujarat",
      href: "#",
      action: "View Map"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "hiten-jadavra",
      href: "https://www.linkedin.com/in/hiten-jadavra",
      action: "Connect"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Gujarati", level: "Native" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-muted-foreground">{contact.label}</h4>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {contact.action}
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-0 shadow-soft hero-gradient text-primary-foreground">
              <CardContent className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="mb-6 opacity-90">
                  I'm available for new opportunities and exciting challenges. Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Languages & Additional Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{language.name}</span>
                      <Badge variant="secondary">{language.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Professional Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <Badge className="bg-green-500 text-white">Available</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Work Type</span>
                  <Badge variant="outline">Full-time / Contract</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "mitrana_gabriela208@yahoo.com",
    href: "mailto:mitrana_gabriela208@yahoo.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+40727303250",
    href: "tel:+40727303250"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Bucharest, Romania",
    href: "#"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gabriela-mitrana-714765111",
    href: "https://www.linkedin.com/in/gabriela-mitrana-714765111/"
  }];
  return <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return <a key={index} href={item.href} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors duration-200 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>;
            })}
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="bg-gradient-to-br from-primary/5 to-purple-600/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Available for new projects</span>
                </div>
                <p className="text-muted-foreground">I'm currently accepting new collaborations. My typical response time is within 24 hours.</p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Best times to reach me:</strong><br />
                    Monday - Friday, 9 AM - 6 PM EEST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Contact;

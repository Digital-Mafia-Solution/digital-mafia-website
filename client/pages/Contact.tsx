import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Send,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contact@digital-mafia.co.za",
      link: "mailto:contact@digital-mafia.co.za",
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: "Phone",
    //   info: "+1 (555) 123-4567",
    //   link: "tel:+15551234567",
    // },
    // {
    //   icon: <MapPin className="w-6 h-6" />,
    //   title: "Location",
    //   info: "Pretoria, GP",
    //   link: "#",
    // },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      info: "24 hours or less",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Let's <span className="text-primary">Collaborate</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to join forces? Whether you're a startup ready to disrupt or
              an established business seeking transformation, we're here to
              help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Start Your <span className="text-primary">Mission</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your project and let's create something
                    extraordinary together.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                      <option value="">Select a service</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      className="bg-background border-border min-h-[120px]"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  We believe in direct communication and fast responses. Reach
                  out through any channel that works best for you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-border hover:border-primary/30 transition-colors"
                  >
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <div className="text-primary">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.info}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow the Movement</h3>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Twitter className="w-5 h-5" />,
                      href: "#",
                      label: "Twitter",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "#",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "#",
                      label: "Instagram",
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "#",
                      label: "Github",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">{social.label}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ or Additional Info */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    We pride ourselves on lightning-fast responses. Most
                    inquiries get a detailed reply within 24 hours, often much
                    sooner.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Lightbulb,
  RefreshCw,
  Code,
  Smartphone,
  Search,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & Identity",
      description: "Complete brand creation from concept to execution",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design that converts and engages",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Interface Design",
      ],
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, fast, and scalable web solutions",
      features: [
        "React/Next.js",
        "E-commerce",
        "CMS Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile experiences",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "App Store Optimization",
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Marketing",
      description: "Digital strategies that drive growth",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media",
        "Analytics & Tracking",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven approaches to scale your business",
      features: [
        "Conversion Optimization",
        "A/B Testing",
        "User Analytics",
        "Growth Hacking",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-primary">Arsenal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every tool, technique, and strategy we use is designed to give
              your business an unfair advantage in the digital battlefield.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-card hover:bg-primary/5 border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              Our <span className="text-primary">Battle Plan</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discover",
                  icon: <Search className="w-6 h-6" />,
                },
                {
                  step: "02",
                  title: "Design",
                  icon: <Palette className="w-6 h-6" />,
                },
                {
                  step: "03",
                  title: "Develop",
                  icon: <Code className="w-6 h-6" />,
                },
                {
                  step: "04",
                  title: "Deploy",
                  icon: <Zap className="w-6 h-6" />,
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{phase.icon}</div>
                  </div>
                  <div className="text-sm text-primary font-mono mb-2">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold">{phase.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">Ready to Dominate?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can give your business the edge it
              needs to stand out in today's competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

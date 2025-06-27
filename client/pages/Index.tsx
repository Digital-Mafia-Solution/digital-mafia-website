import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Lightbulb, Palette, RefreshCw, Users } from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding",
      description:
        "Complete brand identity creation that makes lasting impressions.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design that converts visitors into customers.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Web Development",
      description: "Fast, modern websites built with cutting-edge technology.",
    },
  ];

  const i3cValues = [
    {
      letter: "I",
      title: "Interactivity",
      description: "Engaging experiences that captivate users",
    },
    {
      letter: "C",
      title: "Creativity",
      description: "Fresh ideas and innovative designs",
    },
    {
      letter: "C",
      title: "Consistency",
      description: "Cohesive branding across all touchpoints",
    },
    {
      letter: "C",
      title: "Collaboration",
      description: "Working closely with our clients",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyber/20 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="block text-foreground">Digital</span>
              <span className="block text-primary font-black">Mafia</span>
              <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-4">
                Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span className="text-primary font-semibold">Simplicity</span>{" "}
              Meets{" "}
              <span className="text-accent font-semibold">
                Bold Interaction
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Agency Intro Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                We Are <span className="text-primary">Digital Rebels</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Digital Mafia Solutions, we don't just create brands—we
                orchestrate digital revolutions. Our mission is to transform
                businesses through bold design, cutting-edge technology, and
                strategic thinking that breaks the mold.
              </p>
            </div>

            {/* I3C System */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {i3cValues.map((value, index) => (
                <Card
                  key={index}
                  className="bg-background/50 border-primary/20 hover:border-primary/50 transition-colors group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl font-bold text-primary">
                        {value.letter}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Weapons</span> of Choice
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in three core services that form the foundation of
                every successful digital presence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group bg-card hover:bg-primary/5 border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Join the{" "}
              <span className="text-primary">Digital Revolution</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's create something extraordinary together. Your vision, our
              expertise, unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                <Link to="/contact">
                  <Users className="mr-2 w-5 h-5" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

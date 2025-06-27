import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Crown,
  Rocket,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      price: "2,500",
      period: "project",
      description: "Perfect for small businesses getting started",
      icon: <Zap className="w-8 h-8" />,
      popular: false,
      features: [
        "Logo Design & Brand Identity",
        "5-Page Responsive Website",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Mobile Optimization",
        "2 Rounds of Revisions",
        "30 Days Support",
      ],
      cta: "Get Started",
      color: "border-border",
    },
    {
      name: "Professional",
      price: "7,500",
      period: "project",
      description: "Ideal for growing businesses ready to scale",
      icon: <Star className="w-8 h-8" />,
      popular: true,
      features: [
        "Complete Brand Package",
        "10-Page Custom Website",
        "E-commerce Integration",
        "Advanced SEO & Analytics",
        "Content Management System",
        "Social Media Integration",
        "Email Marketing Setup",
        "5 Rounds of Revisions",
        "90 Days Support",
      ],
      cta: "Most Popular",
      color: "border-primary",
    },
    {
      name: "Enterprise",
      price: "15,000+",
      period: "project",
      description: "For established businesses seeking digital dominance",
      icon: <Crown className="w-8 h-8" />,
      popular: false,
      features: [
        "Premium Brand Strategy",
        "Custom Web Application",
        "Mobile App Development",
        "Advanced E-commerce Platform",
        "Marketing Automation",
        "Performance Optimization",
        "Security & Compliance",
        "Unlimited Revisions",
        "6 Months Support",
        "Dedicated Account Manager",
      ],
      cta: "Contact Us",
      color: "border-accent",
    },
  ];

  const addOns = [
    {
      name: "Logo Animation",
      price: "500",
      description: "Bring your brand to life with motion",
    },
    {
      name: "Social Media Kit",
      price: "800",
      description: "Complete social media assets package",
    },
    {
      name: "Photography Session",
      price: "1,200",
      description: "Professional product/team photography",
    },
    {
      name: "Video Production",
      price: "2,500",
      description: "Brand video or explainer animation",
    },
    {
      name: "Monthly Maintenance",
      price: "300",
      description: "Ongoing website updates and support",
    },
    {
      name: "SEO Optimization",
      price: "1,500",
      description: "Advanced SEO strategy and implementation",
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
              Investment in <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transparent pricing for world-class digital solutions. Choose the
              package that fits your ambition and budget.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-card hover:bg-card/80 transition-all duration-300 ${pkg.color} ${
                  pkg.popular
                    ? "ring-2 ring-primary shadow-lg scale-105"
                    : "hover:border-primary/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      pkg.popular
                        ? "bg-primary/20"
                        : "bg-muted hover:bg-primary/10"
                    } transition-colors`}
                  >
                    <div
                      className={
                        pkg.popular ? "text-primary" : "text-muted-foreground"
                      }
                    >
                      {pkg.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-6">
                    {pkg.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      ${pkg.price}
                    </span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <Check className="w-4 h-4 text-primary mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                    size="lg"
                  >
                    <Link to="/contact">
                      {pkg.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-primary">Power-Ups</span> & Add-ons
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enhance your package with additional services to maximize your
                digital impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-border hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-foreground">
                        {addon.name}
                      </h3>
                      <span className="text-primary font-bold">
                        +${addon.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {addon.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Custom Projects Section */}
          <div className="text-center mb-16">
            <Card className="bg-primary/5 border-primary/20 p-12">
              <div className="max-w-3xl mx-auto">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6">
                  Need Something <span className="text-primary">Custom</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Every business is unique, and sometimes standard packages
                  don't fit. Let's discuss your specific needs and create a
                  custom solution that's perfectly tailored to your vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Link to="/contact">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Discuss Custom Project
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
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-3">
                  What's included in the support period?
                </h3>
                <p className="text-muted-foreground">
                  Bug fixes, minor content updates, and technical assistance.
                  We're here to ensure your website runs smoothly.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-3">
                  Can I upgrade my package later?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We can enhance your existing project with
                  additional features or services at any time.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-3">
                  What's your payment schedule?
                </h3>
                <p className="text-muted-foreground">
                  50% upfront to begin work, 50% upon project completion. We
                  also offer milestone-based payments for larger projects.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-muted-foreground">
                  Starter: 2-3 weeks, Professional: 4-6 weeks, Enterprise: 8-12
                  weeks. Timeline depends on project complexity and feedback
                  cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

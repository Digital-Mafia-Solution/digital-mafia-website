import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Eye } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "TechFlow SaaS Platform",
      category: "Web Development",
      image: "/placeholder.svg",
      description: "Modern SaaS platform with real-time collaboration features",
      tags: ["React", "Node.js", "WebSocket", "Stripe"],
    },
    {
      title: "Zenith Fashion Brand",
      category: "Branding",
      image: "/placeholder.svg",
      description: "Complete rebrand for luxury fashion retailer",
      tags: ["Branding", "Logo Design", "Packaging", "Web Design"],
    },
    {
      title: "FitTrack Mobile App",
      category: "Mobile App",
      image: "/placeholder.svg",
      description: "Fitness tracking app with AI-powered recommendations",
      tags: ["React Native", "AI/ML", "Health", "iOS/Android"],
    },
    {
      title: "GreenEarth E-commerce",
      category: "E-commerce",
      image: "/placeholder.svg",
      description: "Sustainable products marketplace with carbon tracking",
      tags: ["Shopify", "Sustainability", "Analytics", "Mobile-First"],
    },
    {
      title: "DataViz Dashboard",
      category: "UI/UX Design",
      image: "/placeholder.svg",
      description: "Enterprise analytics dashboard for data visualization",
      tags: ["Data Viz", "D3.js", "Enterprise", "Dashboard"],
    },
    {
      title: "CryptoWallet Interface",
      category: "Web3",
      image: "/placeholder.svg",
      description: "Secure cryptocurrency wallet with DeFi integration",
      tags: ["Web3", "Blockchain", "Security", "DeFi"],
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Branding",
    "Mobile App",
    "E-commerce",
    "UI/UX Design",
    "Web3",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-primary">Conquests</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each project represents a victory in the digital battlefield.
              Explore how we've helped businesses dominate their markets.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-primary hover:bg-primary/90"
                    : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Eye className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-background"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Studies Coming Soon */}
          <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Detailed Case Studies Coming Soon
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're crafting in-depth case studies that showcase our process,
              challenges overcome, and results achieved. Each story will reveal
              the strategy behind the success.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

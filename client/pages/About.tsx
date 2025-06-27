import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="text-primary">Digital Mafia</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're not just another digital agency. We're creative rebels who
              believe in pushing boundaries and challenging the status quo.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To revolutionize how businesses connect with their audiences
                through bold design, cutting-edge technology, and strategic
                innovation that breaks conventional boundaries.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the go-to creative force for businesses ready to
                embrace digital transformation and make their mark in the
                ever-evolving digital landscape.
              </p>
            </div>
          </div>

          {/* I3C System Detailed */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              The <span className="text-primary">I3C</span> System
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Our core philosophy that drives every project we touch
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">More Coming Soon</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're crafting the perfect story to share our journey, team, and
              the passion that drives us. Stay tuned for the full experience.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

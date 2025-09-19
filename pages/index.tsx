import { Analytics } from "@vercel/analytics/next"
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  CreditCard,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../assets/hero-students-paying.jpg";

const Index = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      description:
        "Accept payments through Stripe, PayPal, Square, and more with seamless integration."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Your transactions are protected with industry-standard encryption and security protocols."
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description:
        "Fast payment processing with real-time notifications and automated receipts."
    },
    {
      icon: Users,
      title: "Student Dashboard",
      description:
        "Students can easily track payments, view history, and manage their account."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bursar, Lincoln High School",
      content:
        "SchoolPay has revolutionized how we handle student payments. The process is now seamless and efficient.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Finance Director, Riverside College",
      content:
        "The reporting features and payment tracking have saved us countless hours of administrative work.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Administrator, Valley Academy",
      content:
        "Our parents love how easy it is to make payments online. The system is intuitive and reliable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Edviron 🔥
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button className="btn-gradient-primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient py-20 px-6 animate-fade-in">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Simplify School Payments
              <span className="block text-white/90">with Ease</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Streamline your school's payment process with our secure, user-friendly platform. 
              Accept payments from students and parents with confidence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="btn-gradient-warm text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  View Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Free support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Image
              src={heroImage}
              alt="Students making payments online"
              className="rounded-2xl shadow-2xl max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Edviron?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage school payments efficiently and securely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="card-elevated text-center hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Trusted by Schools Everywhere</h2>
            <p className="text-xl text-muted-foreground">
              See what educators are saying about Edviron
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="card-elevated hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-warm py-20 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Payment Process?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of schools already using Edviron to streamline their payment operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Edviron 🔥
                </span>
              </div>
              <p className="text-muted-foreground">
                Simplifying school payments for educational institutions worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/features" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Pricing
                </Link>
                <Link href="/integrations" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Integrations
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="/help" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Contact Us
                </Link>
                <Link href="/status" className="text-muted-foreground hover:text-foreground block transition-colors">
                  System Status
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Terms of Service
                </Link>
                <Link href="/security" className="text-muted-foreground hover:text-foreground block transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8">
            <div className="text-center text-muted-foreground mb-6">
              <p>
                &copy; {new Date().getFullYear()} Developed by{" "}
                <span className="font-semibold text-foreground">Gulamnabi</span>
              </p>
              <div className="flex justify-center items-center gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/devgulamnabi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium story-link"
                >
                  LinkedIn
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://devgulamnabi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-medium story-link"
                >
                  Portfolio
                </a>
              </div>
            </div>
            <div className="text-center text-muted-foreground text-sm">
              {/* <p>&copy; 2024 Edviron. All rights reserved.</p> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

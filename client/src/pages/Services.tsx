import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "contact") navigate("/#contact");
  };

  const services = [
    {
      title: "Video Production & Editing",
      description: "Professional video content creation and post-production",
      features: [
        "Concept & Storyboarding",
        "Professional Shooting",
        "Color Grading & Editing",
        "Motion Graphics",
        "Sound Design",
        "Final Delivery in Multiple Formats",
      ],
      price: "Custom Quote",
    },
    {
      title: "Graphic Design",
      description: "Custom graphics for all your branding needs",
      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Graphics",
        "Marketing Collateral",
        "Print Design",
        "Brand Guidelines",
      ],
      price: "Custom Quote",
    },
    {
      title: "Social Media Marketing",
      description: "Full-funnel Meta Ads and content strategy",
      features: [
        "Content Calendar Planning",
        "Meta Ads Campaign Setup",
        "Google Ads Management",
        "Analytics & Reporting",
        "Community Management",
        "Growth Strategy",
      ],
      price: "Custom Quote",
    },
    {
      title: "Content Creation",
      description: "Engaging content for all social platforms",
      features: [
        "Reels & Short-form Videos",
        "Instagram Posts & Stories",
        "TikTok Content",
        "YouTube Thumbnails",
        "Carousel Posts",
        "Trending Content",
      ],
      price: "Custom Quote",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing and creative services tailored to your brand's needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-orange-500/50 hover:bg-gray-900/60 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-orange-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-6">
                  <p className="text-lg font-bold text-orange-500 mb-4">
                    {service.price}
                  </p>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full px-6 py-3 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-orange-500/5 border-t border-orange-500/20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-orange-500 text-center">
            How I Work
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We discuss your goals, target audience, and project requirements in detail.",
              },
              {
                step: "02",
                title: "Strategy & Concept",
                desc: "I develop a comprehensive strategy and creative concept tailored to your brand.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Professional production and creation of all assets with attention to detail.",
              },
              {
                step: "04",
                title: "Review & Refinement",
                desc: "You review the work and I make revisions until you're completely satisfied.",
              },
              {
                step: "05",
                title: "Delivery & Support",
                desc: "Final delivery in all required formats with ongoing support and optimization.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-4xl font-bold text-orange-500 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600"
          >
            Contact Me <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Gokul KP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

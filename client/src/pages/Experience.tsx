import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, Calendar } from "lucide-react";
import { useLocation } from "wouter";

export default function Experience() {
  const [, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "contact") navigate("/#contact");
  };

  const experiences = [
    {
      company: "PrepMeal",
      position: "Digital Marketer & Content Creator",
      type: "Full-Time",
      duration: "Feb 2024 - Aug 2025",
      description: "Led digital marketing and content creation for a healthy meal delivery platform.",
      responsibilities: [
        "Managed Meta Ads campaigns with focus on ROAS optimization",
        "Created engaging video content and social media graphics",
        "Developed content calendars and social media strategies",
        "Managed Instagram, Facebook, and TikTok accounts",
        "Analyzed campaign performance and optimized strategies",
        "Collaborated with design and product teams",
      ],
      achievements: [
        "Increased social media followers by 150%",
        "Achieved 3.5x ROAS on Meta Ads campaigns",
        "Created 200+ pieces of content",
      ],
    },
    {
      company: "100 Designs",
      position: "Content Creator Head",
      type: "Co-founder & Partner",
      duration: "Ongoing",
      description: "Leading content creation strategy for a creative agency working with premium brands.",
      responsibilities: [
        "Lead content creation team and strategy",
        "Manage client relationships and project delivery",
        "Create video and graphic content for multiple brands",
        "Develop brand strategies and content calendars",
        "Oversee quality and brand consistency",
      ],
      achievements: [
        "Worked with 5+ premium brands",
        "Delivered 100+ successful projects",
        "Built a strong portfolio of case studies",
      ],
    },
  ];

  const clients = [
    {
      name: "Aromatic",
      type: "Premium Perfume Brand",
      location: "Dubai, UAE",
      work: "Social Media Management, Content Creation, Ads Strategy",
    },
    {
      name: "Galaxy Star Perfume",
      type: "Luxury Fragrance",
      location: "Dubai, UAE",
      work: "Branding, Content Creation, Campaign Management",
    },
    {
      name: "Tess",
      type: "CCTV Solutions",
      location: "Kerala, India",
      work: "Digital Marketing, Video Production, Lead Generation",
    },
    {
      name: "SISA Group",
      type: "Business Solutions",
      location: "UAE",
      work: "Strategic Marketing, Branding, Case Study Development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-orange-500">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3+ years of proven expertise in digital marketing, content creation, and brand building
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-orange-500">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card key={idx} className="glass p-8 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-lg font-semibold mb-2">{exp.position}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-orange-500/10 text-orange-500 text-sm font-semibold whitespace-nowrap">
                    {exp.type}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-orange-500">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, ridx) => (
                      <li key={ridx} className="flex items-start gap-3 text-sm">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3 text-orange-500">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aidx) => (
                      <li key={aidx} className="flex items-start gap-3 text-sm">
                        <span className="text-orange-500 mt-1">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Worked With */}
      <section className="section-padding bg-orange-500/5 border-t border-orange-500/20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-orange-500">Clients & Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client, idx) => (
              <Card key={idx} className="glass p-6 hover:border-orange-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-500 mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{client.type}</p>
                <p className="text-xs text-muted-foreground mb-4">📍 {client.location}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold mb-2">Work Done:</p>
                  <p className="text-sm text-muted-foreground">{client.work}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-orange-500">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-orange-500 mb-4">Marketing</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Meta Ads Management</li>
                <li>Google Ads Campaigns</li>
                <li>Social Media Strategy</li>
                <li>Content Calendar Planning</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-4">Creative</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Video Editing & Production</li>
                <li>Graphic Design</li>
                <li>Motion Graphics</li>
                <li>Content Creation</li>
                <li>Brand Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-orange-500/5 border-t border-orange-500/20">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Interested in collaborating?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how my experience and skills can help your brand grow.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600"
          >
            Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
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

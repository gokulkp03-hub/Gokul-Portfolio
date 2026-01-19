import { ChevronRight, Film, Image as ImageIcon, Sparkles, Palette } from "lucide-react";

const SECTIONS = [
  {
    id: "video-editing",
    title: "Video Editing",
    icon: Film,
    items: [
      { name: "Instagram Reels", count: 45 },
      { name: "YouTube Videos", count: 28 },
      { name: "Brand Promo Edits", count: 32 },
      { name: "Event Highlights", count: 18 },
    ],
  },
  {
    id: "photo-editing",
    title: "Photo Editing",
    icon: ImageIcon,
    items: [
      { name: "Retouching", count: 52 },
      { name: "Color Correction", count: 38 },
      { name: "Background Removal", count: 42 },
      { name: "Before/After", count: 35 },
    ],
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    icon: Sparkles,
    items: [
      { name: "Logo Animations", count: 24 },
      { name: "Promo Motion Videos", count: 18 },
      { name: "Social Media Animations", count: 36 },
      { name: "Intro/Outro", count: 15 },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: Palette,
    items: [
      { name: "Social Media Posters", count: 68 },
      { name: "Banner Ads", count: 42 },
      { name: "Branding Creatives", count: 28 },
      { name: "Infographics", count: 22 },
    ],
  },
];

export default function EditingDesign() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Gokul</span> KP
          </a>
          <a href="/portfolio" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            Back to Portfolio
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-orange-500">Editing</span> & <span className="text-orange-500">Design</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Professional video editing, photo editing, motion graphics, and graphic design services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id}>
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-12">
                  <Icon className="w-10 h-10 text-orange-500" />
                  <h2 className="text-4xl font-bold">{section.title}</h2>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {section.items.map((item) => (
                    <div key={item.name} className="group cursor-pointer">
                      {/* Placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4 border border-white/10 hover:border-orange-500/50 transition">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-12 h-12 text-gray-600 group-hover:text-orange-500 transition" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
                      </div>

                      {/* Item Info */}
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition">{item.name}</h3>
                      <p className="text-orange-500 font-semibold">{item.count} items</p>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                {section.id !== SECTIONS[SECTIONS.length - 1].id && (
                  <div className="border-t border-white/10 my-8" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Editing or Design?</h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

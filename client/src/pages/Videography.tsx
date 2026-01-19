import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";

const VIDEOGRAPHY_CATEGORIES = [
  {
    id: "wedding",
    name: "Wedding Films",
    description: "Cinematic wedding films that capture love and celebration",
    count: 12,
  },
  {
    id: "promo",
    name: "Brand Promo Videos",
    description: "Compelling brand stories that drive engagement",
    count: 18,
  },
  {
    id: "corporate",
    name: "Corporate Videos",
    description: "Professional corporate and business videos",
    count: 15,
  },
  {
    id: "product",
    name: "Product Videos",
    description: "Product showcases that convert viewers to customers",
    count: 22,
  },
  {
    id: "event",
    name: "Event Coverage",
    description: "Dynamic event videography and highlights",
    count: 28,
  },
  {
    id: "social",
    name: "Social Media Videos",
    description: "Engaging short-form videos for social platforms",
    count: 45,
  },
];

export default function Videography() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
            <span className="text-orange-500">Videography</span> Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore my videography work across different categories. Each video tells a compelling story.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOGRAPHY_CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className="group cursor-pointer"
              >
                {/* Placeholder Video */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4 border border-white/10 hover:border-orange-500/50 transition">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-gray-600 group-hover:text-orange-500 transition fill-current" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
                </div>

                {/* Category Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-semibold">{category.count} videos</span>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Category Gallery */}
      {selectedCategory && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              {VIDEOGRAPHY_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
            </h2>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/50 transition">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-gray-600 group-hover:text-orange-500 transition fill-current" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Professional Video?</h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
          >
            Let's Create Together
          </a>
        </div>
      </section>
    </div>
  );
}

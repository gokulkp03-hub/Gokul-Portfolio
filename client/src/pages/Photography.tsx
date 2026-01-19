import { useState } from "react";
import { useLocation } from "wouter";
import { ChevronRight, Image as ImageIcon } from "lucide-react";

const PHOTOGRAPHY_CATEGORIES = [
  {
    id: "wedding",
    name: "Wedding Photography",
    description: "Capturing your special moments with elegance and emotion",
    count: 24,
  },
  {
    id: "candid",
    name: "Candid Photography",
    description: "Authentic moments, genuine emotions, timeless memories",
    count: 18,
  },
  {
    id: "product",
    name: "Product Photography",
    description: "Professional product shots that sell and inspire",
    count: 32,
  },
  {
    id: "automobile",
    name: "Automobile/Car Shoots",
    description: "Stunning automotive photography showcasing design and performance",
    count: 15,
  },
  {
    id: "corporate",
    name: "Corporate Photography",
    description: "Professional corporate and business photography",
    count: 28,
  },
  {
    id: "event",
    name: "Event Photography",
    description: "Capturing the energy and excitement of your events",
    count: 42,
  },
  {
    id: "lifestyle",
    name: "Lifestyle Photography",
    description: "Beautiful lifestyle and personal branding photography",
    count: 21,
  },
];

export default function Photography() {
  const [, navigate] = useLocation();
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
            <span className="text-orange-500">Photography</span> Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore my photography work across different categories and styles. Each image tells a story.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHOTOGRAPHY_CATEGORIES.map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/portfolio/photography/${category.id}`)}
                className="group cursor-pointer"
              >
                {/* Placeholder Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4 border border-white/10 hover:border-orange-500/50 transition">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-gray-600 group-hover:text-orange-500 transition" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
                </div>

                {/* Category Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  {category.id === "wedding" ? (
                    <span className="text-orange-500 font-semibold">5 photos</span>
                  ) : (
                    <span className="text-orange-500 font-semibold">{category.count} photos</span>
                  )}
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
              {PHOTOGRAPHY_CATEGORIES.find((c) => c.id === selectedCategory)?.name}
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/50 transition">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-600 group-hover:text-orange-500 transition" />
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
          <h2 className="text-3xl font-bold mb-6">Interested in a Photography Session?</h2>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

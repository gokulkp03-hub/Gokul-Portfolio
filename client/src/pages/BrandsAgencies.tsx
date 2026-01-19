import { ChevronRight, Building2 } from "lucide-react";

const BRANDS = [
  {
    id: 1,
    name: "Inmakes Infotech",
    type: "Digital Marketing Agency",
    description: "Motion graphics design, static creatives, and video production for digital marketing campaigns",
  },
  {
    id: 2,
    name: "Ecom100",
    type: "Digital Marketing Agency",
    description: "E-commerce marketing, product videos, and promotional content creation",
  },
  {
    id: 3,
    name: "Retro Revival",
    type: "Video Production Agency",
    description: "Professional video production, cinematography, and post-production services",
  },
  {
    id: 4,
    name: "Acero",
    type: "Wooden Doors",
    description: "Product photography, promotional videos, and branding creatives for wooden door products",
  },
  {
    id: 5,
    name: "Beyond Cars",
    type: "Rental Cars",
    description: "Automotive photography, vehicle showcase videos, and promotional content",
  },
  {
    id: 6,
    name: "Galaxy Perfumes",
    type: "Perfume Brand",
    description: "Product photography, brand videos, and social media content for luxury perfume brand",
  },
  {
    id: 7,
    name: "KNK Home & Buildings",
    type: "Real Estate & Construction",
    description: "Property photography, architectural videos, and promotional content",
  },
  {
    id: 8,
    name: "Q4 Clean",
    type: "Detergents & Washing Liquids",
    description: "Product photography, promotional videos, and advertising creatives",
  },
  {
    id: 9,
    name: "Suncore Solar Panels",
    type: "Solar Energy",
    description: "Product videos, promotional content, and corporate photography",
  },
  {
    id: 10,
    name: "Tess CCTV Solutions",
    type: "Security Solutions",
    description: "Product photography, demo videos, and corporate marketing content",
  },
];

export default function BrandsAgencies() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Gokul</span> KP
          </a>
          <a href="/" className="text-gray-400 hover:text-white transition flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-orange-500">Brands</span> & Agencies
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            I've had the privilege of working with leading brands and agencies across various industries. Here's a showcase of my professional collaborations.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="group p-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-lg hover:border-orange-500/50 transition"
              >
                {/* Brand Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-orange-500" />
                  <h3 className="text-xl font-bold group-hover:text-orange-500 transition">{brand.name}</h3>
                </div>

                {/* Brand Type */}
                <p className="text-orange-500 text-sm font-semibold mb-3">{brand.type}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{brand.description}</p>

                {/* Divider */}
                <div className="border-t border-white/10 mt-4 pt-4">
                  <p className="text-xs text-gray-500">Professional collaboration</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-orange-500 mb-2">10+</h4>
              <p className="text-gray-400">Brands & Agencies</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-orange-500 mb-2">25+</h4>
              <p className="text-gray-400">Industries Served</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-orange-500 mb-2">150+</h4>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you're a brand, agency, or individual looking for professional creative services, I'm ready to bring your vision to life.
          </p>
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

import { useParams, useLocation } from "wouter";
import { getServiceById, portfolioData } from "@/lib/portfolioData";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function ServicePage() {
  const params = useParams();
  const [, navigate] = useLocation();
  const service = getServiceById(params.service || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black pt-24 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <button
            onClick={() => navigate("/")}
            className="hover:text-orange-500 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigate("/portfolio")}
            className="hover:text-orange-500 transition-colors"
          >
            Portfolio
          </button>
          <span>/</span>
          <span className="text-white">{service.name}</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <button
          onClick={() => navigate("/portfolio")}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="animate-slideDown">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">{service.name}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">{service.description}</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => navigate(`/portfolio/${service.id}/${category.id}`)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-orange-500 transition-all duration-300 p-8 text-left"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {category.type === "video" ? "Video content" : "Image gallery"}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

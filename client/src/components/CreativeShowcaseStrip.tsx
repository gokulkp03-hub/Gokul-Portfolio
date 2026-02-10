import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Video, Camera, Zap, Target, PenTool } from "lucide-react";

const CREATIVE_ITEMS = [
    { id: "video", title: "Video Production", tagline: "Shoot + Edit", icon: Video, color: "text-blue-500", link: "/portfolio/video-production" },
    { id: "photo", title: "Photography", tagline: "Brand visuals", icon: Camera, color: "text-purple-500", link: "/portfolio/photography" },
    { id: "design", title: "Graphic Design", tagline: "Social creatives", icon: PenTool, color: "text-pink-500", link: "/portfolio/graphic-design" },
    { id: "motion", title: "Motion Graphics", tagline: "Animated stories", icon: Zap, color: "text-yellow-500", link: "/portfolio/motion-graphics" },
    { id: "ads", title: "Performance Ads", tagline: "Meta campaigns", icon: Target, color: "text-green-500", link: "/portfolio/marketing-growth" },
];

export default function CreativeShowcaseStrip() {
    const [, navigate] = useLocation();

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {CREATIVE_ITEMS.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            onClick={() => navigate(item.link)}
                            className="group relative h-[200px] perspective-1000 cursor-pointer"
                        >
                            <div
                                className="w-full h-full p-6 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 
                hover:border-orange-500/40 hover:bg-black/70 transition-all duration-500 
                flex flex-col justify-between overflow-hidden shadow-lg 
                group-hover:shadow-orange-500/20 group-hover:-translate-y-2 group-hover:rotate-x-2"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Icon */}
                                <div className={`
                  p-3 rounded-xl bg-black/60 w-fit mb-4 border border-white/10 
                  text-gray-400 group-hover:text-orange-400 group-hover:border-orange-500/40 
                  group-hover:scale-110 transition-all duration-300
                `}>
                                    <Icon size={22} />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-orange-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300">{item.tagline}</p>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

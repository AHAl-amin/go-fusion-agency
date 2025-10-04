import { Zap, Briefcase, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FeatureCards() {
  const features = [
    {
      title: "Trusted Expertise",
      description:
        "Our team carefully plans and checks every step — from design to deployment — to make sure your project runs smoothly.",
      icon: Zap,
    },
    {
      title: "Seamless Integration",
      description:
        "From legacy systems to modern APIs, we connect your tools into one cohesive digital ecosystem.",
      icon: Star,
    },
    {
      title: "Results-Driven Delivery",
      description:
        "Every sprint. Every milestone. Everything we do is aligned with measurable business outcomes.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-[#160306] dark:bg-black md:p-8 p-2 flex items-center justify-center py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                
                  backgroundColor: isHovered ? "#FFEDD5" : "#fff", // orange-100
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                // className="relative border border-gray-200 rounded-lg p-5 cursor-pointer overflow-hidden"
                                className={` bg-white
    relative group cursor-pointer overflow-hidden p-6
    rounded-2xl
     
    hover:bg-gradient-to-r hover:from-orange-200  hover:to-orange-300 
    transition-all duration-300 border-r-4 border-orange-300 hover:border-white/70
  
  `}
                style={{ boxShadow: isHovered ? "0 8px 32px rgba(255, 165, 0, 0.15)" : "none" }}
              >
                <motion.div
                  initial={false}
                  animate={{
                    clipPath: isHovered
                      ? "circle(150% at 100% 0%)"
                      : "circle(24px at 100% 0%)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 z-0 rounded-lg"
                />

                <div className="absolute top-0 right-0 w-12 h-12 hover:bg-orange-200 z-10 rounded-bl-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[#010231] ms-3 mb-2 ml-2" />
                </div>

                <div className="relative z-10 pr-4">
                  <h2
                    className={`text-[22px] font-bold mb-4 transition-colors duration-500 ${isHovered ? "text-[#010231]" : "text-gray-900"
                      }`}
                  >
                    {feature.title}
                  </h2>
                  <p
                    className={`leading-relaxed text-[17px] transition-colors duration-500 ${isHovered ? "text-[#010231]" : "text-gray-800"
                      }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

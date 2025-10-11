


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/magicui/ripple";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ArrowRight } from "lucide-react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { PiBriefcaseDuotone } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ReactTyped } from "react-typed";
import profilepic from "../../../public/images/profile.png";
import mike from "../../../public/images/Mike.png";
import { Link } from "react-router-dom"; // ✅ corrected import

// Fade-up motion variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Banner() {
  const profile_info = [
    { id: 2, name: "362+ Reviews", icon: GoCodeReview },
    { id: 1, name: "5.0 Rating", icon: MdOutlineStarPurple500 },
    { id: 4, name: "Fast Delivery", icon: PiBriefcaseDuotone },
    { id: 3, name: "Level 2 Seller", icon: SlBadge },
  ];

  return (
    <section className="relative bg-[#160306] dark:bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto md:px-4 pt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Tagline */}
            <motion.div variants={fadeUp} custom={0} className="px-3 md:px-0">
              <p className="text-2xl capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb]">
                BEST DEVELOPMENT AGENCY
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeUp} custom={1} className="px-3 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white mt-10">
                <div className="flex items-center gap-20">
                  <span>Go</span>
                  <img src={mike} alt="Go Fusion Logo" className="md:w-36 w-20" />
                </div>
                <span>Fusion Agency.</span>
              </h1>
            </motion.div>

            {/* Typed Text Section */}
            <motion.div variants={fadeUp} custom={2} className="px-3 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold md:leading-20 leading-12 text-white">
                <span>Our Services...</span>
                <br />
                <ReactTyped
                  strings={[
                    "AI Development",
                    "App Development",
                    "Web Development",
                  ]}
                  typeSpeed={95}
                  backSpeed={50}
                  loop
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb]"
                />
                <br />
                <span>on Fiverr</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeUp} custom={3} className="px-3 md:px-0">
              <p className="text-base sm:text-sm md:text-[16px] text-white dark:text-gray-300 leading-relaxed max-w-2xl mt-3">
                We design and develop{" "}
                <strong>high-performance web and mobile applications</strong>,
                combining creativity with intelligent technology. From building{" "}
                <strong>modern user interfaces</strong> to crafting{" "}
                <strong>AI-driven solutions</strong>, I turn your ideas into
                digital experiences that deliver real results.
                <br className="hidden sm:block" />
                <span className="text-orange-200 font-medium">
                  Quality • Innovation • Reliability
                </span>
              </p>
            </motion.div>

            {/* Profile Info */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="grid grid-cols-2 px-3 md:px-0 sm:grid-cols-4 gap-3"
            >
              {profile_info.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.id}
                    className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#010231] shadow-sm transition-all hover:cursor-pointer hover:bg-gray-100 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-gray-900"
                  >
                    <Icon
                      size={20}
                      className="text-black dark:text-white group-hover:scale-110 transition-transform"
                    />
                    <AnimatedShinyText className="text-[14px] sm:text-[16px] font-medium text-gray-900 dark:text-white">
                      {info.name}
                    </AnimatedShinyText>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="inline-block mt-6 px-3 md:px-0"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-orange-200 to-orange-300 dark:bg-white text-[#010231] dark:text-black py-4 sm:py-5 text-[16px] font-semibold rounded-md shadow-lg hover:shadow-gray-500/50 transition-all duration-500 group"
              >
                <Link
                  to="/contact"
                  className="relative z-10 flex items-center"
                >
                  Contact
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-white/10 dark:bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <BorderBeam duration={8} size={250} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column (Bouncing Image + Card) */}
          <div className="relative group mb-10">
            <div className="flex items-center justify-center">
              <div className="relative flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px]">
                {/* Bouncing Image */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="z-10"
                >
              
                   <img
                    src={profilepic}
                    alt="Md Toki Osmani - Tech Entrepreneur & CEO"
                    className="md:w-2/3  w-full mx-auto object-cover"
                  />
             
                </motion.div>

                {/* Info Card */}
                <div className="mt-[-20px] w-full max-w-[500px] px-4 z-30 ">
                  <div className="p-4 rounded-full bg-transparent backdrop-blur-sm shadow-lg flex flex-col items-center gap-2 border-2 border-[#3a191c]">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-200 dark:text-black drop-shadow-md">
                      Md Toki Osmani
                    </h3>

                    <div className="flex items-center justify-center gap-2">
                      <p className="text-gray-200 dark:text-black/90 text-sm font-medium">
                        Founder
                      </p>
                      <div className="w-1 h-1 bg-gray-200 dark:bg-black rounded-full"></div>
                      <p className="text-gray-200 dark:text-black/90 text-sm font-medium">
                        GO FUSION
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                      <div className="w-2 h-2 text-gray-200 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-200 dark:text-black/80">
                        Fiverr Verified Pro Seller
                      </span>
                    </div>

                    <BorderBeam duration={8} size={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

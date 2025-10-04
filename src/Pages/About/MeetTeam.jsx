// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Arafat from "../../../public/images/team-member/Arafat.png";
// import Farabi from "../../../public/images/team-member/Farabi.png";
// import Maw from "../../../public/images/team-member/Maw.png";
// import Motalef from "../../../public/images/team-member/Motalef.png";
// import Naim from "../../../public/images/team-member/Naim.png";
// import Rimon from "../../../public/images/team-member/Rimon.png";
// import Samin from "../../../public/images/team-member/Samin.png";
// import Rubaid from "../../../public/images/team-member/Rubaid.png";

// const MeetTeam = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   const teamMembers = [
//     {
//       name: "Arafat Hossain",
//       role: "Frontend Developer",
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       image: Arafat,
//     },
//     {
//       name: "Farabi",
//       role: "Project Manager",
//       quote:
//         "Our platform empowers teams to collaborate seamlessly and deliver projects faster than ever.",
//       image: Farabi,
//     },
//     {
//       name: "Maw",
//       role: "Sales Executive",
//       quote:
//         "We focus on creating impactful strategies that drive growth and engagement for our clients.",
//       image: Maw,
//     },
//     {
//       name: "Motalef ",
//       role: "Project manager",
//       quote:
//         "Designing intuitive interfaces that enhance user experience is my passion.",
//       image: Motalef,
//     },
//     {
//       name: "Naim",
//       role: "Frontend Developer",
//       quote:
//         "Building robust and scalable systems is key to our platform's success.",
//       image: Naim,
//     },
//     {
//       name: "Saiful Islam Rimon",
//       role: "Fronendend Developer",
//       quote: "I ensure our products align with user needs and business goals.",
//       image: Rimon,
//     },
//     {
//       name: "Samin",
//       role: "Frontend Developer",
//       quote: "I ensure our products align with user needs and business goals.",
//       image: Samin,
//     },
//     {
//       name: "Rubaid",
//       role: "Flutter Developer",
//       quote: "I ensure our products align with user needs and business goals.",
//       image: Rubaid,
//     },
//   ];

//   useEffect(() => {
//     let autoSlide;

//     if (isImageLoaded) {
//       autoSlide = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
//         );
//         setIsImageLoaded(false); // reset for next image
//       }, 4000);
//     }

//     return () => clearInterval(autoSlide);
//   }, [isImageLoaded, teamMembers.length]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
//     );
//     setIsImageLoaded(false);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
//     );
//     setIsImageLoaded(false);
//   };

//   const current = teamMembers[currentIndex];

//   return (
//     <div className="py-10">
//       <section className="mb-20">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold bg-gradient-to-r  from-orange-200 via-orange-300 to-[#195022cb] text-transparent bg-clip-text mb-4">
//             Meet Our Team
//           </h2>
//           <p className="text-white max-w-2xl mx-auto">
//             Our team is dedicated to providing you with the best possible
//             experience and support. We are here to help you every step of the
//             way.
//           </p>
//         </div>

//         <div className="flex justify-center">
//           <div className="max-w-4xl w-full">
//             <div className="grid md:grid-cols-2 gap-8 items-end">
//               <div className="relative flex flex-col items-end">
//                 <img
//                   key={current.image}
//                   src={current.image}
//                   alt={current.name}
//                   className={`w-4/5 p-2 h-[450px] object-center object-cover rounded-bl-[200px]  border transition-opacity duration-500 ${
//                     isImageLoaded ? "opacity-100" : "opacity-0"
//                   }`}
//                   onLoad={() => setIsImageLoaded(true)}
//                   loading="lazy"
//                 />
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-white">
//                     {current.name}
//                   </h3>
//                   <p className="text-white">{current.role}</p>
//                 </div>
//                 <p className="text-white italic leading-relaxed">
//                   {current.quote}
//                 </p>
//                 <div className="flex gap-2">
//                   <Button
//                     className="rounded-full bg-gray-900/80"
//                     onClick={handlePrev}
//                   >
//                     <ChevronLeft size={32} />
//                   </Button>
//                   <Button
//                     className="rounded-full bg-gray-900/80"
//                     onClick={handleNext}
//                   >
//                     <ChevronRight size={32} />
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* Indicators */}
//             <div className="flex justify-center mt-4 me-[86px] space-x-2">
//               {teamMembers.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full transition-colors ${
//                     index === currentIndex ? "bg-gray-900" : "bg-[#160306]"
//                   }`}
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     setIsImageLoaded(false);
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MeetTeam;



import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Arafat from "../../../public/images/team-member/Arafat.png";
import Farabi from "../../../public/images/team-member/Farabi.png";
import Maw from "../../../public/images/team-member/Maw.png";
import Motalef from "../../../public/images/team-member/Motalef.png";
import Naim from "../../../public/images/team-member/Naim.png";
import Rimon from "../../../public/images/team-member/Rimon.png";
import Samin from "../../../public/images/team-member/Samin.png";
import Rubaid from "../../../public/images/team-member/Rubaid.png";

const MeetTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null); // Ref to hold the timeout for auto-slide

  const teamMembers = [
    {
      name: "Arafat Hossain",
      role: "Frontend Developer",
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      image: Arafat,
    },
    {
      name: "Farabi",
      role: "Project Manager",
      quote:
        "Our platform empowers teams to collaborate seamlessly and deliver projects faster than ever.",
      image: Farabi,
    },
    {
      name: "Maw",
      role: "Sales Executive",
      quote:
        "We focus on creating impactful strategies that drive growth and engagement for our clients.",
      image: Maw,
    },
    {
      name: "Motalef ",
      role: "Project manager",
      quote:
        "Designing intuitive interfaces that enhance user experience is my passion.",
      image: Motalef,
    },
    {
      name: "Naim",
      role: "Frontend Developer",
      quote:
        "Building robust and scalable systems is key to our platform's success.",
      image: Naim,
    },
    {
      name: "Saiful Islam Rimon",
      role: "Fronendend Developer",
      quote: "I ensure our products align with user needs and business goals.",
      image: Rimon,
    },
    {
      name: "Samin",
      role: "Frontend Developer",
      quote: "I ensure our products align with user needs and business goals.",
      image: Samin,
    },
    {
      name: "Rubaid",
      role: "Flutter Developer",
      quote: "I ensure our products align with user needs and business goals.",
      image: Rubaid,
    },
  ];

  const resetAutoSlide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(true); // Trigger animation on auto-slide
    }, 5000); // Auto-slide every 5 seconds
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, teamMembers.length]); // Re-run when currentIndex changes

  const handleNavigation = (newIndex) => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    resetAutoSlide();
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1;
    handleNavigation(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1;
    handleNavigation(newIndex);
  };

  // Determine prev and next members for the visual effect
  const prevMember = teamMembers[currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1];
  const currentMember = teamMembers[currentIndex];
  const nextMember = teamMembers[currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1];

  return (
    <div className=" relative overflow-hidden">
      <section className="mb-20">
        <div className="text-center ">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb] text-transparent bg-clip-text mb-4 tracking-tight">
            Meet Our Exceptional Team
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Behind every successful project is a passionate and dedicated team. Get to know the brilliant minds driving innovation here.
          </p>
        </div>

        <div className="relative flex justify-center items-center h-[600px] md:h-[700px]">
          {/* Previous Member Card */}
          <div
            className={`absolute left-1/2 -translate-x-[150%] md:-translate-x-[120%] opacity-40 blur-sm scale-90 w-72 md:w-96 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl shadow-2xl transition-all duration-700 ease-in-out ${
              isAnimating ? "opacity-0 blur-lg" : "opacity-40 blur-sm"
            }`}
            onTransitionEnd={() => setIsAnimating(false)}
          >
            <img
              src={prevMember.image}
              alt={prevMember.name}
              className="w-full h-64 object-cover rounded-md mb-4 border border-gray-700"
            />
            <h3 className="text-xl font-semibold text-white">{prevMember.name}</h3>
            <p className="text-gray-400 text-sm">{prevMember.role}</p>
          </div>

          {/* Current Member Card (Main Focus) */}
          <div
            className={`relative z-10 w-96 md:w-[450px] p-8 bg-gradient-to-br from-orange-600/20 to-[#195022cb]/20 backdrop-filter backdrop-blur-md rounded-2xl shadow-3xl border border-orange-500/30 transition-all duration-700 ease-in-out transform scale-100 ${
              isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"
            }`}
            onTransitionEnd={() => setIsAnimating(false)}
          >
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full h-80 object-cover object-top rounded-lg mb-6 shadow-lg border-2 border-orange-400"
            />
            <h3 className="text-3xl font-bold text-white mb-2 text-center">{currentMember.name}</h3>
            <p className="text-orange-300 text-lg mb-4 text-center">{currentMember.role}</p>
            <p className="text-gray-200 italic leading-relaxed text-center">
              "{currentMember.quote}"
            </p>
          </div>

          {/* Next Member Card */}
          <div
            className={`absolute right-1/2 translate-x-[150%] md:translate-x-[120%] opacity-40 blur-sm scale-90 w-72 md:w-96 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl shadow-2xl transition-all duration-700 ease-in-out ${
              isAnimating ? "opacity-0 blur-lg" : "opacity-40 blur-sm"
            }`}
             onTransitionEnd={() => setIsAnimating(false)}
          >
            <img
              src={nextMember.image}
              alt={nextMember.name}
              className="w-full h-64 object-cover rounded-md mb-4 border border-gray-700"
            />
            <h3 className="text-xl font-semibold text-white">{nextMember.name}</h3>
            <p className="text-gray-400 text-sm">{nextMember.role}</p>
          </div>

          {/* Navigation Arrows */}
          <Button
            className="cursor-pointer absolute left-4 md:left-20 md:top-1/2 bottom-40 -translate-y-1/2 rounded-full bg-gray-900/70 hover:bg-gray-800 transition-all duration-300 p-2 z-20"
            onClick={handlePrev}
            aria-label="Previous team member"
            disabled={isAnimating}
          >
            <ChevronLeft size={36} className="text-white" />
          </Button>
          <Button
            className="cursor-pointer absolute right-4 md:right-20 md:top-1/2 bottom-40 -translate-y-1/2 rounded-full bg-gray-900/70 hover:bg-gray-800 transition-all duration-300 p-2 z-20"
            onClick={handleNext}
            aria-label="Next team member"
            disabled={isAnimating}
          >
            <ChevronRight size={36} className="text-white" />
          </Button>
        </div>

        {/* Custom Indicators below the main card */}
        <div className="flex justify-center mt-16 space-x-3">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300  ${
                index === currentIndex ? "bg-orange-500 scale-125 shadow-md" : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => handleNavigation(index)}
              aria-label={`Go to team member ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTeam;
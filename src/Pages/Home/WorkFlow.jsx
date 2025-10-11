// import { RetroGridDemo } from "../../Elements/WorkFlow/RetroGridDemo";



// const WorkFlow = () => {
//   return (
//     <section className="md:py-20 py-10 bg-[#160306] dark:bg-black">
//       <div>
//         <h1 className="text-3xl lg:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb] text-transparent bg-clip-text">
//           How We Build Success
//         </h1>
//         <p className=" text-center leading-none md:text-[17px] text-sm tracking-tight md:max-w-[700px] w-11/12 mx-auto pb-1 text-white">
//           We follow a structured process — starting with deep research and
//           planning, then moving through design, development, testing, and
//           deployment — ensuring every phase is aligned with your goals and
//           delivers real value.
//         </p>

//         <div className="md:pt-10">
//           <RetroGridDemo />
//         </div>

       
//       </div>
//     </section>
//   );
// };

// export default WorkFlow;


import { RetroGridDemo } from "../../Elements/WorkFlow/RetroGridDemo";
import { Lightbulb, ClipboardList, Search, PenTool, Code2, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    title: "Idea",
    icon: <Lightbulb className="w-8 h-8 text-orange-400" />,
    description:
      "Every great product starts with a powerful idea. We begin by understanding your vision, identifying key opportunities, and brainstorming creative concepts that set the foundation for success.",
  },
  {
    title: "Planning",
    icon: <ClipboardList className="w-8 h-8 text-teal-400" />,
    description:
      "Once the idea is clear, we move into strategic planning — defining goals, setting milestones, and creating a clear roadmap aligned with your business objectives and timelines.",
  },
  {
    title: "Research & Analysis",
    icon: <Search className="w-8 h-8 text-yellow-400" />,
    description:
      "We conduct in-depth research and competitive analysis to uncover user needs, market trends, and challenges. This helps us design smarter, data-driven solutions that deliver measurable results.",
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    description:
      "Our design team translates strategy into seamless user experiences. We craft intuitive interfaces that balance aesthetics and usability, ensuring an engaging journey for every user.",
  },
  {
    title: "Development & QA Testing",
    icon: <Code2 className="w-8 h-8 text-sky-400" />,
    description:
      "With a clear design in place, our developers bring the product to life using modern technologies. Rigorous testing ensures top performance, security, and flawless functionality.",
  },
  {
    title: "Delivery & Integration",
    icon: <Rocket className="w-8 h-8 text-emerald-400" />,
    description:
      "After testing, we deploy your product in a stable environment, ensuring smooth integration and operation. Our team guarantees a seamless launch across all platforms.",
  },
  {
    title: "Maintenance",
    icon: <Wrench className="w-8 h-8 text-indigo-400" />,
    description:
      "We provide ongoing support and updates to keep your product optimized, secure, and scalable — ensuring it evolves continuously with your business growth.",
  },
];

const WorkFlow = () => {
  return (
    <section className="md:py-20 py-10 bg-[#160306] dark:bg-black text-white ">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-orange-200 via-orange-300 to-[#195022cb] text-transparent bg-clip-text">
          How We Build Success
        </h1>
        <p className="text-center md:text-[17px] text-sm tracking-tight md:max-w-[700px] w-11/12 mx-auto pb-1 text-gray-200">
          We follow a structured process — starting with deep research and
          planning, then moving through design, development, testing, and
          deployment — ensuring every phase is aligned with your goals and
          delivers real value.
        </p>

        

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto mt-14 px-4 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1d0b0e]/70 border border-[#3a191c] rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300 shadow-lg hover:shadow-[#ff9b4a33]"
            >
              <div className="flex items-center gap-3 mb-3">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;


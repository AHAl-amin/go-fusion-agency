import { RetroGrid } from "@/components/magicui/retro-grid";
import flow from "../../assets/flow.png";

export function RetroGridDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg md:py-10 py-6  bg-[#160306] dark:bg-black">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] flex justify-center to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        <img src={flow} alt="" className=" md:w-4/5 w-full md:px-0 px-6 " />
      </span>
      <RetroGrid />
    </div>
  );
}

import PromptInputCard from "@/components/PromptInputCard";
import VideoPlayer from "@/components/VideoPlayer";
import VideoSpecification from "@/components/VideoSpecification";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Home() {
  return (
    <main className="grid grid-cols-5 gap-5 my-6 min-h-[calc(100vh-95.6px)]">
      <div className="col-span-3 bg-white rounded-2xl p-4 h-full">
        <div className="flex items-start">
          <div className="flex items-center gap-1 -mt-2">
            <span className="text-sm">0:00</span>
            <BiSolidRightArrow className="text-red-500" />
          </div>
          <div className="w-full">
            <div className="w-full h-0.5 bg-red-500" />
            <PromptInputCard />
          </div>
        </div>
      </div>
      <div className="col-span-2 h-full flex flex-col gap-4">
        <VideoPlayer />
        <VideoSpecification />
      </div>
    </main>
  );
}

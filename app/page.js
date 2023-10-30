import PromptInputCard from "@/components/cards/PromptInputCard";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Home() {
  return (
    <main className="grid grid-cols-5 my-6 min-h-[calc(100vh-95.6px)]">
      <div className="col-span-3 bg-white rounded-2xl p-4 h-full">
        <div className="flex items-start">
          <div className="flex items-center">
            <span className="text-sm">0:00</span>
            <BiSolidRightArrow className="text-red-500" />
          </div>
          <PromptInputCard />
        </div>
      </div>
      <div className="col-span-2">Content details</div>
    </main>
  );
}

import { BiPlayCircle, BiPlus } from "react-icons/bi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { VscScreenFull } from "react-icons/vsc";
import { LuArrowDownRight } from "react-icons/lu";
import { LiaObjectUngroup } from "react-icons/lia";
import { HiArrowSmRight } from "react-icons/hi";
import RecommendAvatar from "./RecommendAvatar";
import { recommendAvatar } from "@/constants";

const VideoSpecification = () => {
  return (
    <div className="bg-[#EAE9EA] rounded-2xl p-4 h-fit">
      <div className="flex justify-between gap-2 items-center">
        <GoDeviceCameraVideo /> <h3 className="font-bold">Ewelina&apos;s</h3>{" "}
        <div className="text-sm font-bold px-3 text-white rounded-full bg-[#767577]">
          4k
        </div>
        <div className="text-sm px-3 text-white rounded-full bg-[#767577] flex items-center gap-1">
          <VscScreenFull /> 16:9
        </div>
        <div className="text-sm px-3 text-white rounded-full bg-[#767577] flex items-center gap-1">
          <BiPlayCircle /> <span>3 hours, 12 minutes uploaded</span>
        </div>
      </div>

      <div className="text-sm flex items-center justify-between gap-3 mt-3">
        <div className="flex flex-col items-center bg-white py-2 px-3 rounded-lg w-full cursor-pointer">
          <BiPlus className="text-2xl" />
          <span className="uppercase font-semibold">Upload Content</span>
        </div>
        <div className="flex flex-col items-center bg-white py-2 px-3 rounded-lg w-full cursor-pointer">
          <LiaObjectUngroup className="text-2xl" />
          <span className="uppercase font-semibold">Insert Object</span>
        </div>
        <div className="flex flex-col items-center bg-[#3072E6] text-white py-2 px-3 rounded-lg w-full cursor-pointer">
          <LuArrowDownRight className="text-2xl text-white" />
          <span className="uppercase font-semibold">Export</span>
        </div>
      </div>

      <div className="mt-3 bg-white p-3 rounded-xl">
        <p className="uppercase text-sm font-bold">
          <small>✨Recommended</small>
        </p>
        <h3 className="font-bold">Tag people and objects to edit faster</h3>
        <div className="flex gap-5 justify-between">
          <div className="flex gap-5 mt-2">
            {recommendAvatar.map((item) => (
              <RecommendAvatar
                key={item.name}
                name={item.name}
                image={item.imgURL}
              />
            ))}
          </div>
          <div className="flex flex-col items-center text-[#1866aa]">
            <HiArrowSmRight className="text-2xl" />
            <small className="font-semibold">Advanced Tagging</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSpecification;

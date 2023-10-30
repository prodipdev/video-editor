import { HiPlus } from "react-icons/hi";

const PromptInputCard = () => {
  return (
    <div className="flex flex-col items-start p-5 rounded-xl bg-gradient-to-r from-[#F8F6F8] to-blue-50 w-full">
      <input
        type="text"
        className="bg-transparent font-semibold text-black outline-0 placeholder:text-gray-600 placeholder:font-bold"
        placeholder="🤩 Your story starts here..."
      />

      <button className="flex gap-1 px-2 rounded-full items-center bg-white font-semibold mt-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        Add <HiPlus />
      </button>
    </div>
  );
};

export default PromptInputCard;

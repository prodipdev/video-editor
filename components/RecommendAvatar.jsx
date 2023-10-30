import Image from "next/image";

const RecommendAvatar = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <Image
        className="rounded-full shadow-xl shadow-blue-200 object-cover aspect-square"
        src={image}
        alt="avatar"
        height={70}
        width={70}
      />
      <h2 className="font-semibold">{name}</h2>
    </div>
  );
};

export default RecommendAvatar;

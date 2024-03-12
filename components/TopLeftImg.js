import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 z-10 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
      <Image src="/top-left-img.png" alt="image" width={400} height={600} />
    </div>
  );
};

export default TopLeftImg;

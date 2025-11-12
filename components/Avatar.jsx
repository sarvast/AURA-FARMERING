import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex max-w-none pointer-events-none select-none opacity-70 xl:opacity-100">
      <Image
        src="/avatar1.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;

// next image
import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image
      src={'/avatar.png'}
      alt="avatar"
      width={737}
      height={678}
      className="translate-z-0 h-full w-full"
    />
  </div>;
};

export default Avatar;

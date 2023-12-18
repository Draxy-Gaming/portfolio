// next images
import Image from "next/image";

// link
import Link from "next/link";

// icon
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/work"}>
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="next-text"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148]"
        />
        <HiArrowRight />
      </Link>
    </div>
  );
};

export default ProjectsBtn;

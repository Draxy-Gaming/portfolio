//next images
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectBtn from "../components/ProjectsBtn";

// framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/30 via-black/30 to-black/10">
        <div className="flex  text-center flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
           variants={fadeIn("down", 0.2)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="h1">
            Transforming Ideas <br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/*subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
           Bringing your ideas to life with innovative solutions. We specialize in creating digital experiences that captivate and inspire. Our team is dedicated to excellence, from concept to execution.
          </motion.p>
          <div className="flex justify-center  xl:hidden relative">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="xl:bg-right bg-none xl:bg-explosion xl:bg-cover xl:bg-no-repeat h-full w-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/*particles */}
        <div>Particles</div>
        {/* Avatar */}
        <div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Home;

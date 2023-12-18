//next images
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer"
import Avatar from "../components/Avatar";
import ProjectBtn from "../components/ProjectsBtn";

// framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return <div className="bg-primary/60 h-full">
    
      <div className="w-full h-full bg-gradient-to-r from-primary/30 via-black/30 to-black/10">
        <div className="flex  text-center flex-col justify-center xl:pt-40 xl:text-left f-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br />Into  <span className="text-accent">Digital Reality</span>
          </h1>
          {/*subtitle */}
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Nisi enim nisi consectetur sit sint magna nostrud non excepteur ea incididunt proident aute velit. Velit aute pariatur incididunt exercitation .</p>
          <div className="flex justify-center  xl:hidden relative">
            <ProjectBtn />
          </div>
           </div>
      </div>
      <div>Image</div>
  </div>;
};

export default Home;

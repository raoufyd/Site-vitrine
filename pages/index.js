import ProjectBtn from "../components/ProjectsBtn";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full flex flex-col ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Lorem ipsum dolor sit amet.{" "}
            <span className="text-accent">adipisicing elit</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quia
            vitae nobis voluptate officiis accusamus id, natus, sequi cumque
            quasi assumenda nostrum maiores corrupti mollitia aperiam sapiente
            voluptatum? Unde, nam.
          </motion.p>
          <div className="flex items-center justify-center xl:hidden">
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
      <div className="w-[1200px] h-full absolute right-0 bottom-1">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></motion.div>
      </div>
      <ParticlesContainer />
    </div>
  );
};

export default Home;

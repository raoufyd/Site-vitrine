import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import ServiceSlider from "../../components/ServiceSlider";

const Services = () => {
  return (
    <div className="bg-primary/60 py-36 h-full flex items-center">
      <Circles />
      <div className="container mx-auto ">
        <div className="flex flex-col smm:justify-center items-center xl:flex-row gap-x-20">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              quasi delectus ipsam reprehenderit pariatur illo blanditiis autem
              amet placeat.
            </p>
          </div>
          <ServiceSlider />
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;

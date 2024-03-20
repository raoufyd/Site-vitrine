// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import FreeMode from "c:/Users/Raouf Yd/Desktop/site-vitrine/ethan-portfolio-starter/node_modules/swiper/modules/free-mode/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "c:/Users/Raouf Yd/Desktop/site-vitrine/ethan-portfolio-starter/node_modules/swiper/modules/pagination/pagination";
import "swiper/css";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="flex w-3/5 max-w-full">
      <Swiper
        // install Swiper modules
        slidesPerView={3}
        spaceBetween={50}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {serviceData.map((data) => {
          return (
            <SwiperSlide key={data.title}>
              <div className="w-36 mx-12 text-left  h-40 ">
                <h1 className="flex flex-row">
                  {data.title}
                  {data.icon}
                </h1>

                <p>{data.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;

import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Marquee from "react-fast-marquee";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
const Clients = () => {
  const { clientImages: images } = useContext(MyContext);

  return (
    <div className=" pt-7 pb-3  md:py-7">
      <h3
    
        className=" text-xl  md:text-2xl 2xl:text-4xl mb-6 font-medium text-center "
      >
        {" "}
        Our Clients{" "}
      </h3>

      <Marquee
        gradientWidth={50}
        pauseOnClick={true}
        pauseOnHover={true}
        speed={60}
        gradient={true}
        className=" flex gap-3"
      >
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            className=" cursor-pointer  2xl:w-[250px] w-[3.3rem] h-[3.125rem] md:w-[150px] 2xl:h-[250px] md:h-[120px]  object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;

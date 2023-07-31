import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Marquee from "react-fast-marquee";

const Clients = () => {
  const { clientImages: images } = useContext(MyContext);

  return (
    <div className="py-7">
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
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            className=" cursor-pointer  2xl:w-[250px]   w-[150px] 2xl:h-[250px] h-[150px]  object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;

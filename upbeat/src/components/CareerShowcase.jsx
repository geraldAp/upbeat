import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const CareerShowcase = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 place-items-center text-[#ffffff] gap-6">
        <div className="md:col-span-2">
          <div data-aos="fade-down" data-aos-duration="1200">
            <h3 className="md:text-2xl xl: 2xl:text-5xl md:text-left text-center  font-semibold ">
              Careers{" "}
            </h3>
            <h5 className="text-sm 2xl:text-base font-medium my-2">
              {" "}
              Join Our Team at UpBeat: Where{" "}
              <span className="text-primary-200">Music </span>and Technology
              Collide!
            </h5>
          </div>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className=" text-xs md:text-sm 2xl:text-base"
          >
            Are you passionate about music and technology? Do you dream of being
            part of a dynamic team that is revolutionizing the digital music
            industry? Look no further! UpBeat, a leading digital music company,
            is seeking talented individuals like you to join our team. At
            UpBeat, we believe that music has the power to inspire, connect, and
            transform lives. We are dedicated to providing a seamless and
            immersive music experience to our users across the globe. As
            technology continues to reshape the music landscape, we strive to
            stay at the forefront of innovation, creating groundbreaking
            solutions that redefine how people interact with music.
          </p>
        </div>
        <Image
          data-aos="fade-left"
          data-aos-duration="1000"
          src="img/group.jpeg"
          className=" md:col-span-2 rounded-lg w-full"
          alt=""
        />
      </div>
    </>
  );
};

export default CareerShowcase;

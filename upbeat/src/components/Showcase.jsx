import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import altMap from "../img/altMap.png";

const Showcase = () => {
  return (
    <>
      <div className="text-[#ffffff] grid w-full gap-4  mt-28 md:mt-0  md:grid-cols-5  md:gap-0">
        <div className="md:col-span-2">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className=" font text-[#ffffff] font-semibold text-center text-2xl leading-7 md:text-left md:text-[2.3rem] md:leading-[2.4rem] 2xl:text-[3.3rem] 2xl:leading-[3.5rem]"
          >
            Innovative Solutions <br />
            To Move Your <br />
            <span className="text-primary-200">Music</span> To The World
          </h1>

          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:block hidden"
          >
            <p className=" mt-3 text-center md:text-left text-sm 2xl:text-xl 2xl:leading-8 leading-6 ">
              Over 8 years experience in providing top quality Music <br />{" "}
              Business solutions to Artistes and Management teams <br />
              Across the world.
            </p>
            <p className=" mb-3 text-sm text-center md:text-left  2xl:text-xl 2xl:leading-8 leading-6  ">
              One of the fastest ways to gain listenership all over the <br />{" "}
              world.
            </p>
          </div>
          <div className="flex md:justify-start justify-center md:mt-0 mt-6">
            <button
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="btn-primary "
            >
              Find out more
            </button>
          </div>
        </div>
        <div className="md:col-span-3">
          <Image
            data-aos="zoom-in"
            data-aos-duration="2000"
            src="/img/map.png"
            placeholderSrc={altMap}
            className="w-full hidden md:block"
            alt="map"
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;

import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const Digital = () => {
  return (
    <div className="w-full grid md:grid-cols-5 place-items-center gap-6">
      <div className="md:col-span-2">
        <h2
          data-aos="fade-down"
          data-aos-duration="1200"
          className="text-unique-100 mb-3 md:text-left text-center 2xl:text-6xl text-xl  font-semibold md:text-4xl"
        >
          Digital Music Marketing
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className=" text-xs md:text-[0.94rem] 2xl:text-2xl 2xl:leading-10 leading-6 text-justify md:text-left"
        >
          The future of music marketing lies in the digital realm, and as
          leading media company, it's up to you to harness its potential. Let
          your creativity and strategic prowess shine as you craft a
          comprehensive digital music marketing plan that sets new industry
          standards and propels your clients to new heights of success in the
          digital world .
        </p>
      </div>
      <Image
        data-aos="fade-left"
        data-aos-duration="1000"
        src="img/records.jpeg"
        className="w-full 2xl:h-full md:h-[380px] md:col-span-3"
        alt="records"
      />
    </div>
  );
};

export default Digital;

import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const AudioVid = () => {
  return (
    <div className="w-full grid md:grid-cols-5 place-items-center gap-6">
      <Image
        data-aos="fade-right"
        data-aos-duration="1000"
        src="/img/wide-monitor.jpeg"
        className="md:col-span-3  w-full "
        alt="Monitor"
      />

      <div className="md:col-span-2">
        <h2
          data-aos="fade-down"
          data-aos-duration="1200"
          className="text-unique-200 mb-3  font-semibold text-center md:text-right 2xl:text-6xl text-xl md:text-4xl"
        >
          Audio-Visual Production
        </h2>

        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className=" text-xs md:text-[0.94rem] 2xl:text-2xl 2xl:leading-10 leading-6 text-center md:text-right "
        >
          We offer photo and video services ranging from brand/marketing
          communication, music videos, corporate and social functions among
          others. Storyboard Studios is our photography and video production
          department with a dedicated team of talented photographers,
          videographers , graphic designers , set designers , directors and
          editors , who are driven by an unquenchable thirst to create and be
          different. Our team offers you high-quality photography and vide o
          services , ranging from brand/marketing communication, music videos ,
          and to coverage of corporate functions and social events.
        </p>
      </div>
    </div>
  );
};

export default AudioVid;

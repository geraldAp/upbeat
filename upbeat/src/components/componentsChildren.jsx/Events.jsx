import React from "react";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

const Events = () => {
  return (
    <div className=" w-full grid md:grid-cols-5 place-items-center gap-6">
      <Image
        data-aos="fade-right"
        data-aos-duration="1000"
        src="/img/crowd.jpeg"
        className="md:col-span-3 md:h-[350px] 2xl:h-full w-full"
        alt="crowd"
      />

      <div className="md:col-span-2">
        <h2
          data-aos="fade-down"
          data-aos-duration="1200"
          className="text-secondary-200  mb-3 2xl:text-6xl text-xl  font-semibold text-center md:text-right md:text-4xl"
        >
          Events and Experiential
        </h2>

        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className=" text-xs md:text-[0.94rem] 2xl:text-2xl 2xl:leading-10 leading-6 text-justify md:text-right "
        >
          Our track record in experiential marketing and activation makes us
          second to none. We've done some of the coolest things for brands such
          as Atlantic Records, Sony Music, Empire and top artists such as Drake,
          Sarkodie , Davido , Stormzy , Dave and more. We know how to build
          consumer interest your brand the ultimate value
        </p>
      </div>
    </div>
  );
};

export default Events;

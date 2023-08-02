import React,{lazy} from "react";
const Events = lazy(()=> import('./componentsChildren.jsx/Events'))
const AudioVid = lazy(() => import('./componentsChildren.jsx/AudioVid'))
const Digital = lazy(() => import('./componentsChildren.jsx/Digital'))

const Service = () => {
  return (
    <div className="m-1  px-8 py-3 md:py-6">
      <h3 
       data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1200"
      className="text-xl md:text-2xl 2xl:text-4xl mb-6 font-medium text-center">Services</h3>
      <div className="grid gap-10 2xl:gap-12">
      <Events />
      <Digital />
      <AudioVid />
      </div>
    </div>
  );
};

export default Service;

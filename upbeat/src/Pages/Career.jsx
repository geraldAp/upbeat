import React,{lazy} from "react";
const CareerShowcase = lazy(()=> import('../components/CareerShowcase'))
const Positions = lazy(()=> import("../components/Positions")) ;

const Career = () => {
  return (
    <>
      <section id="CareerShowcase" className=" px-2 md:px-12 mt-28 mb-12">
        <CareerShowcase />
      </section>
      <section
        className="bg-[#ffffff] mb-9 pb-20 px-4 md:px-12 pt-8 rounded-lg"
        id="clients&services"
      >
        <Positions />
      </section>
    </>
  );
};

export default Career;

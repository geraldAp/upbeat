import React, {  lazy, useEffect }  from "react";
import AOS from "aos";

const Showcase = lazy(()=> import("../components/Showcase"))
const Service = lazy(() => import("../components/Service"))
const Clients = lazy(() => import("../components/Clients"))
const MailListing = lazy(()=> import("../components/MailListing"))


const Home = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []); 

  return (
    <>
      <section id="Showcase" className="flex md:items-center  md:h-screen ">
        <Showcase />
      </section>
      <section className="bg-[#ffffff] mb-9 2xl:-mt-[7%] pb-20 rounded-lg" id="clients&services">
        <section id="Clients">
          <Clients />
        </section>
        <section id="Services">
          <Service />
        </section>
      </section>
      <section>
        <MailListing />
      </section>
    </>
  );
};

export default Home;

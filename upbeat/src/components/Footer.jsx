import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Footer = () => {
  const { socialImages: images } = useContext(MyContext);

  return (
    <footer className="w-full text-[#ffffff] px-5 py-8   bg-black  2xl:rounded-t-3xl  rounded-t-xl">
      <div className=" w-full grid mb-3 grid-cols-2 md:grid-cols-4 gap-2 ">
        <div>
          <h4 className="text-xl 2xl:text-4xl mb-4 font-medium text-center">
            About{" "}
          </h4>
          <p className="text-xs text-center md:text-left 2xl:text-base">
            We are a dynamic 360° creative and strategic agency committed to
            developing and implementing solutions that guarantee results for you
            and your brands.
          </p>
        </div>
        <div>
          <h4 className="text-xl mb-4 font-medium 2xl:text-4xl  text-center">
            Follow us{" "}
          </h4>
          <div className="grid m-auto  md:w-[50%] grid-cols-3 md:grid-cols-2 gap-2">
            {images.map((image) => (
              <img
                className="md:w-16 w-full 2xl:w-24 h-16 2xl:h-24  "
                key={image.id}
                src={image.name}
                alt=""
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl mb-4 font-medium  2xl:text-4xl  text-center">
            Contact{" "}
          </h4>
          <p className="text-xs 2xl:text-base text-center">
            info@upbeat.com <br />
            +1 (555) 555-5555 <br />
            +1 (333) 333-3333 <br />
            +233 (546) 392-7879
          </p>
        </div>
        <div>
          <h4 className="text-xl mb-4 2xl:text-4xl font-medium text-center">
            Location{" "}
          </h4>
          <p className="text-xs 2xl:text-base text-center">
            Ghana Post GPS 3224 - 1223 Abuakwa Koforidua, Kumasi, Ghana.
          </p>
        </div>
      </div>
      <p className= "w-full my-3 text-center text-xs md:text-sm 2xl:text-base" >
        &copy; 2023 UPBEAT, ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;

import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Positions = () => {
  const { positions } = useContext(MyContext);
  const General = positions.filter(
    (position) => position.category === "general"
  );
  const engineering = positions.filter(
    (position) => position.category === "engineering"
  );
  const newEmerging = positions.filter(
    (position) => position.category === "new"
  );

  return (
    <div className="text-[#ffffff]">
      <h3 className=" text-2xl 2xl:text-5xl font-semibold md:font-medium mb-3 text-unique-100 text-center">
        Open Positions{" "}
      </h3>
      {/* general admission */}
      <div className="mb-10">
        <h4 className="mb-1 text-unique-100 text-xl md:text-base 2xl:text-xl font-semibold md:font-medium">General Administration</h4>
        <div id="positions-card" className="grid  md:grid-cols-3 gap-4   2xl:gap-10 md:gap-7">
          {General.map((position) => (
            <div
              key={position.id}
              className="rounded-md shadow-lg cursor-pointer ease-in duration-300 hover:scale-105 bg-unique-100 2xl:p-5 p-2 md:p-3"
            >
              <h5 className="text-lg 2xl:text-2xl mb-2">{position.role}</h5>
              <span className="text-xs 2xl:text-base text-secondary-200">
                {position.location}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Engineering */}
      <div  className="mb-10">
        <h4 className="mb-1 text-unique-100 2xl:text-xl text-xl md:text-base font-semibold md:font-medium">Engineering</h4>
        <div className="grid md:grid-cols-3 gap-5 md:gap-7 2xl:gap-10">
          {engineering.map((position) => (
            <div
              key={position.id}
              className="rounded-md shadow-lg cursor-pointer ease-in duration-300 hover:scale-105 bg-unique-100 p-2 md:p-3 2xl:px-5 "
            >
              <h5 className="text-lg 2xl:text-2xl mb-2">{position.role}</h5>
              <span className="text-xs 2xl:text-base text-secondary-200">
                {position.location}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* New and Emerging Markets */}
      <div>
        <h4 className="mb-1 text-unique-100 text-xl md:text-base 2xl:text-xl font-semibold md:font-medium">New and Emerging Markets</h4>
        <div className="grid  md:grid-cols-3 gap-5 md:gap-7 2xl:gap-10">
          {newEmerging.map((position) => (
            <div
              key={position.id}
              className="rounded-md shadow-lg cursor-pointer ease-in duration-300 hover:scale-105 bg-unique-100 p-2 md:p-3 2xl:p-5 "
            >
              <h5 className="text-lg mb-1">{position.role}</h5>
              <span className="text-xs 2xl:text-base text-secondary-200">
                {position.location}
              </span>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Positions;

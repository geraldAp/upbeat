import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-gray-500 rounded-full animate-spin w-12 h-12"></div>
    </div>
  );
};

export default Spinner;

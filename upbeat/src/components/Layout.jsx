import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <body 
      aria-hidden="true"
      >
        <div className=" px-4 md:px-10 ">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </>
  );
};

export default Layout;

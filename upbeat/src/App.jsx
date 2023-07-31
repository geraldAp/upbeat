import React, { Suspense, lazy,  } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

const Spinner = lazy(()=> import('./components/spinner'))
const Home = lazy(() => import("./Pages/Home"));
const Career = lazy(() => import("./Pages/Career"));
const Contact = lazy(() => import("./Pages/Contact"));
const Layout = lazy(() => import("./components/Layout"));

const App = () => {





  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spinner/>
        }
      >
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Career" element={<Career />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
          <ToastContainer />
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

import {} from "./App.css";
import React from "react";
import Header from "./main root/Header/Header";
import IntroDuction from "./main root/Body/Section1/IntroDuction";
import IntroDuction2 from "./main root/Body/section 2/IntroDuction2";
import Offers from "./main root/Body/OfferSection/Offers";
import Projects from "./main root/Body/cmProjects/Projects";
import Comments from "./main root/Body/Comments/Comments";
import Blogs from "./main root/Body/Blogs/Blogs"
import Footer from "./main root/Footer/Footer";
const App = () => {

  return (
    <>
      <div className="overflow-x-hidden">
        <Header/>
        <div className="md:w-full md:h-full md:flex md:justify-end md:bg-stone-100 block w-full">
        <IntroDuction/>
        </div>
        <div className="md:w-full md:h-full md:flex md:flex-row md:mt-12 md:px-1 flex flex-col ">
          <IntroDuction2/>
        </div>
        <Offers/>
        <Projects/>
        <Comments/>
        <Blogs/>
        <Footer/>
      </div>
    </>
  );
};

export default App;

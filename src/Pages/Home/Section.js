import React from "react";
import tools1 from "../../images/tools1.jpg";
import tools2 from "../../images/tools2.jpg";
import tools3 from "../../images/tools3.jpg";
import section1 from "../../images/section1.jpg";
import section2 from "../../images/section2.jpg";
import Products from "../Product/Products";


const Section = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-1 max-w-7xl mx-auto md:grid-cols-3 py-20">
        <div>
          <img src={tools1} alt="" />
        </div>
        <div>
          <img src={tools2} alt="" />
        </div>
        <div>
          <img src={tools3} alt="" />
        </div>
      </div>
      <div className="text-4xl text-center pb-20">
        <Products/>
      </div>
      <div className="grid grid-cols-1 gap-1 max-w-7xl mx-auto md:grid-cols-2 pb-20">
        <div><img src={section1} alt="" /></div>
        <div><img src={section2} alt="" /></div>
      </div>
    </>
  );
};

export default Section;

import React from "react";
import image from "../../images/banner.jpg";

const Bannar = () => {
  return (
    <div className="py-32" style={{ backgroundImage: `url(${image})` }}>

      <div className="hero">
        <div className="hero-content text-left">
          <div className="text-left ml-[-160px]">
            <h3 className="text-4xl text-white font-mono">Big Sale</h3>
            <h1 className="mb-5 text-5xl font-bold font-sans text-white">
              Hand Tools <br /> Power Saw Machine
            </h1>
            <p className="w-3/5 text-white pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              deleniti dolores. Ea, ut. Consectetur, expedita?
            </p>
            <button className="btn btn-primary text-white uppercase">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;

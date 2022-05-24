import React from "react";
import tools1 from "../../images/tools1.jpg";
import tools2 from "../../images/tools2.jpg";
import tools3 from "../../images/tools3.jpg";
import section1 from "../../images/section1.jpg";
import section2 from "../../images/section2.jpg";
import Products from "../Product/Products";
import Contact from "../Contact/Contact";

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
        <Products />
      </div>
      <div className="grid grid-cols-1 gap-1 max-w-7xl mx-auto md:grid-cols-2 pb-20">
        <div>
          <img src={section1} alt="" />
        </div>
        <div>
          <img src={section2} alt="" />
        </div>
      </div>
      <div className="text-center p-10">
        <h1 className="text-center mb-10"><span className="text-3xl font-bold text-primary text-center border-b-4 w-3xl mx-auto border-primary">Business Sumarray</span></h1>
        <div class="stats shadow">
          <div class="stat px-20">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat px-20">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat px-20">
            <div class="stat-figure text-secondary">
              <div class="avatar online">
                <div class="w-16 rounded-full">
                  <img src="https://api.lorem.space/image/face?w=128&h=128" />
                </div>
              </div>
            </div>
            <div class="stat-value">86%</div>
            <div class="stat-title">Tasks done</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Section;

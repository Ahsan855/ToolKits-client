import React from "react";
import image1 from "../../images/image 11.png";
import image2 from "../../images/image 1.png";

const MyPortfolis = () => {
  return (
    <div className="mt-28 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div class="w-3/5 my-auto ml-20 border-l-4 border-primary pl-4">
            <h1 className="text-4xl font-bold">
              Welcome To{" "}
              <span class="text-primary font-bold text-4xl">Ahsan Habib</span>{" "}
              World!{" "}
            </h1>

            <h2 className="text-2xl font-semibold mb-5">
              Let's build the future of the web
            </h2>
            <p className="text-secondary mb-10">
              Hello World ! i'm Muhammad Ahsan Habib, a Font-End Web Devloper
              based out of Toronto. From choreography on a state to lines a code
              on a web page.
            </p>
          </div>
          <a
            class="btn btn-primary text-white ml-24 mt-[-40px]"
            target="_blank"
            href="https://www.linkedin.com/in/a-r-ahsan-habib-74b39b222/"
          >
            HIRE ME
          </a>
        </div>

        <div class="w-3/5 mx-auto">
          <img src={image1} alt="" />
        </div>
      </div>
      <h2 class="text-4xl text-primary text-center mb-10"><span className="border-b-4 border-primary p-2">Experiences</span></h2>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-16 px-16 py-10">
        
        <div class="p-10 shadow-primary-100 shadow-xl border-2 border-primary rounded-lg">
          <h2 class="text-2xl text-primary font-semibold mb-5 "><span className="border-b-2 border-primary p-1">Full Strak web-devloper</span></h2>
          <h3 class="text-xl mb-3">2021-Present | Junior Developer</h3>
          <p className="text-secondary">
            I am the master of HTML, CSS and Javascript, nodejs, MOngodb, react Bootstrap5 Css3 TailwindDaisyUi. I know everything
            needed to make a website function, efficient. I didn't stop with the
            web. I went beyond with most popular Javascript framework called Vue
            JS. I even know the deployment, server and security. I will give you
            100% web solution.
          </p>
        </div>

        <div class="p-10 shadow-primary-100 shadow-xl border-2 border-primary rounded-lg">
          <h2 class="text-2xl text-primary font-semibold mb-5 "><span className="border-b-2 border-primary p-1">Junior Web Developer</span></h2>
          <h3 class="text-xl mb-3">2020-2021 | Programming Hero Learner</h3>
          <p className="text-secondary">
            They didn't offer me a job. But I made myself as a remove web
            developer. I made their website and showed it to them. They liked
            it. And uploaded the content. It was fun working at Programming
            Hero.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolis;

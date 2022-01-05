import React from "react";

import APlus from "../../Assets/APlus.svg";

const Features = () => {
  return (
    <section className="mb-16">
      <div className="flex flex-col items-center w-full md:flex-row max-w-screen md:w-[95%] md:justify-around">
        <img
          src={APlus}
          className="max-w-[10rem] md:max-w-[200px] mb-8 md:mb-0"
        />

        <div className="max-w-[60%]">
          <h1
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: "700",
              fontSize: "2.5rem",
              fontStyle: "bold",
            }}
            className="mb-5 text-center md:text-left"
          >
            Why us?
          </h1>
          <p className="text-[1.15rem] md:text-lg mb-2 text-center md:text-left">
            Our tutors are hand-picked students who are at the top of their
            grade academically and in the field of their chosen subject. They
            are experienced in teaching and know exactly how to help you
            succeed. What sets us apart from other services is that our tutors
            are students, just like you, who have taken the exact same courses
            as you.
          </p>
          <p className="text-[1.15rem] md:text-lg italic text-center md:text-left">
            We <span className="font-bold">guarantee</span> that your tutor has
            already taken the class that you are currently in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

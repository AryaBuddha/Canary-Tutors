import React from "react";

import APlus from "../../Assets/APlus.svg";

import { IconContext } from "react-icons/lib";
import { AiOutlineLaptop, AiOutlineBook } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsPen, BsPerson } from "react-icons/bs";

const Features = () => {
  return (
    <>
      <section className="mb-16 flex flex-col">
        <div className="flex flex-col self-center items-center w-full md:flex-row max-w-screen md:w-[95%] md:justify-around">
          <img
            src={APlus}
            className="max-w-[8rem] md:max-w-[200px] mb-8 md:mb-0"
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
            <p className="text-[1.1rem] md:text-lg mb-2 text-center md:text-left">
              Our tutors are hand-picked students who are at the top of their
              grade academically and in the field of their chosen subject. They
              are experienced in teaching and know exactly how to help you
              succeed. What sets us apart from other services is that our tutors
              are students, just like you, who have taken the exact same courses
              as you.
            </p>
            <p className="text-[1.1rem] md:text-lg italic text-center md:text-left">
              We <span className="font-bold">guarantee</span> that your tutor
              has already taken the class that you are currently in.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-16 flex flex-col">
        <div className="self-center flex flex-col items-center w-full max-w-screen md:w-[95%] md:justify-around ">
          <h1
            style={{
              fontFamily: "Mulish, sans-serif",
              fontWeight: "700",
              fontSize: "2.5rem",
              fontStyle: "bold",
            }}
            className="mb-5 text-center md:text-left"
          >
            What we offer
          </h1>
          <div className="flex flex-wrap flex-row justify-around w-full">
            <div className="feature-box">
              <div className="flex flex-row h-full">
                <div className="h-full flex flex-col justify-center px-5 2xl:px-7">
                  <IconContext.Provider value={{}}>
                    <BsPerson size={60} />
                  </IconContext.Provider>
                </div>
                <div className="w-[80%] h-full mx-3 my-3">
                  <h1
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  >
                    Tutoring
                  </h1>
                  <p className="text-smmd md:text-[0.91rem] 2xl:text-[1.03rem]">
                    Get help in a class or on homework. Ask questions to get a
                    better understanding of the topic. Practice your skills and
                    improve.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-box">
              <div className="flex flex-row h-full">
                <div className="h-full flex flex-col justify-center px-5 2xl:px-7">
                  <IconContext.Provider value={{}}>
                    <FaChalkboardTeacher size={60} />
                  </IconContext.Provider>
                </div>
                <div className="w-[80%] h-full mx-3 my-3">
                  <h1
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  >
                    Group Sessions
                  </h1>
                  <p className="text-smmd md:text-[0.91rem] 2xl:text-[1.03rem]">
                    Learn new skills along with other students in a
                    collaborative environment. Choose from a range of subjects
                    at a low cost.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-box border-red-500 border-2">
              <div className="flex flex-row h-full">
                <div>
                  <p className="text-sm text-red-600 ml-2 font-bold">NEW!</p>
                  <div className="h-[70%] flex flex-col justify-center items-center px-5 2xl:px-7">
                    <IconContext.Provider value={{}}>
                      <AiOutlineBook size={60} />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="w-[80%] h-full mx-3 my-3">
                  <h1
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  >
                    Independent Study{" "}
                  </h1>
                  <p className="text-smmd md:text-[0.91rem] 2xl:text-[1.03rem]">
                    Learn a new topic of your choosing with the guidance of a
                    mentor. Topics can range from school subjects to real-world
                    skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-box">
              <div className="flex flex-row h-full">
                <div className="h-full flex flex-col justify-center px-5 2xl:px-7">
                  <IconContext.Provider value={{}}>
                    <BsPen size={60} />
                  </IconContext.Provider>
                </div>
                <div className="w-[80%] h-full mx-3 my-3">
                  <h1
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                  >
                    Essay Review
                  </h1>
                  <p className="text-smmd md:text-[0.91rem] 2xl:text-[1.03rem]">
                    Get your essay/college essay reviewed by a professional.
                    Recieve feedback on areas of improvement and on possible
                    areas of expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

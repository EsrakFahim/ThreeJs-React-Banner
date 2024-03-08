import gsap from "gsap";
import React, { useEffect } from "react";

const Content = ({ activeData, setCondition, condition }) => {
      useEffect(() => {
            if (condition) return;

            setCondition(true);

            gsap.to(".button", {
                  color: activeData.buttonColor.text,
                  backgroundColor: activeData.buttonColor.background,
                  ease: "power3.inOut",
                  duration: 1,
            });

            gsap.to("p", {
                  color: activeData.headingColor,
                  ease: "power3.inOut",
                  duration: 0.1,
            });

            gsap.set(".text", { y: 200, opacity: 0 }); // Set initial state
            gsap.to(".text", {
                  y: 0,
                  opacity: 1,
                  ease: "power4.out",
                  duration: 1,
                  stagger: {
                        amount: 0.3,
                  },

                  onComplete: () => {
                        setCondition(false);
                  },
            });

            return () => {};
      }, [activeData]);

      return (
            <div className="select-none w-full h-2/5 flex justify-center items-center lg:w-1/2 lg:h-full lg:justify-end mb-2 lg:mb-0">
                  <div className=" flex justify-start flex-col items-start w-3/4 lg:w-2/3 ">
                        <h1 className="text-left text-5xl font-bold mb-1 w-full relative p-1 overflow-hidden md:text-[7xl] md:mb-2 ">
                              <p className="text">{activeData.heading}</p>
                        </h1>
                        <h6 className="text-left text-2xl font-regular mb-6 w-full p-1 overflow-hidden md:text-4xl">
                              <p className="text">{activeData.subHeading}</p>
                        </h6>
                        <p className="w-full text-xs font-medium text-left mb-6 p-1 overflow-hidden  md:text-base md:mb-12 ">
                              <p className="text">{activeData.text}</p>
                        </p>
                        <div className="relative overflow-hidden  lg:p-4 ">
                              <button className=" text cursor-pointer button rounded-2xl outline-none px-8 py-2  font-medium  bg-[#4A6E6A]  md:px-10 md:py-4  ">
                                    Shop Now
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Content;

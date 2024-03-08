import React, { useEffect, useRef, useState } from "react";
import { data } from "../Data/index";
import Canvas from "./Canvas";
import Content from "./Content";
import gsap from "gsap";

const Banner = () => {
      const banner = useRef();

      const [condition, setCondition] = useState(false);
      const [isLoading, setIsLoading] = useState(true);
      const [activeData, setActiveData] = useState(data[1]);

      const handleSwatchClick = (item) => {
            if (activeData?.id !== item?.id) setActiveData(item);
      };

      const handleLoading = () => {
            setIsLoading(false);
      };

      useEffect(() => {
            gsap.to(banner.current, {
                  background: activeData?.background,
                  ease: "power3.inOut",
                  duration: 0.8,
            });

            gsap.to(".logo", {
                  color: activeData?.headingColor,
                  ease: "power3.inOut",
                  duration: 0.8,
            });

            return () => {};
      }, [activeData]);

      return (
            <div ref={banner} className="w-screen h-screen relative">
                  <div className="logo absolute my-2 ms-5 text-left text-2xl font-bold tracking-widest md:ms-28 lg:ms-[12vw] lg:my-8">
                        Banner Logo
                  </div>
                  <div className="rotation">
                        Please Rotate Your Device To See The Product
                  </div>
                  <div className="w-full h-full flex justify-between items-center flex-col lg:flex-row-reverse">
                        <Canvas 
                        activeData={activeData}
                        swatchData={data}
                        handleSwatchClick={handleSwatchClick}
                        handleLoading={handleLoading}
                        condition={condition}
                        />
                        <Content 
                        activeData={activeData}
                        condition={condition}
                        setCondition={setCondition}
                        />
                  </div>
            </div>
      );
};

export default Banner;

import React from "react";

const SwatchItem = ({ activeID, item, handleClick }) => {
      return (
            <div
                  className={`cursor-pointer w-5 h-5 lg:w-8 lg:h-8 p-1 rounded-full drop-shadow-xl bg-white  transition ease-in hover:scale-110 ${
                        item.id === activeID ? "scale-125" : ""
                  }`}
                  onClick={() => handleClick(item)}
            >
                  <div 
                  style={{backgroundColor: item.swatchColor}}
                  className="w-full h-full rounded-full"
                  >

                  </div>
            </div>
      );
};

export default SwatchItem;

import React from "react";

const Prices = () => {
  return (
    <>
      <div className="">
        <h2 className="sidebar-title price-title mt-5 text-[22px] font-bold mb-2">
          Price
        </h2>

        <label className="relative flex gap-1 mb-3 cursor-pointer">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
      </div>
    </>
  );
};

export default Prices;

import React from "react";
import Input from "../../components/input/Input";

const Prices = ({ handleChange }) => {
  return (
    <>
      <div className="">
        <h2 className="sidebar-title price-title mt-5 text-[22px] font-bold mb-2">
          Price
        </h2>
        <div>
          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - 50"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - $150"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      </div>
    </>
  );
};

export default Prices;

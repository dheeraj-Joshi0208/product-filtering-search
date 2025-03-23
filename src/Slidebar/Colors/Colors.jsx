import React from "react";
import Input from "../../components/input/Input";
const Colors = ({ handleChange }) => {
  return (
    <div className="">
      <h2 className="mt-5 text-[22px] font-bold mb-2">Color</h2>

      <div>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
      </div>
    </div>
  );
};

export default Colors;

import React from "react";

const Input = () => {
  return (
    <>
      <label className="relative flex gap-1 mb-3 cursor-pointer">
        <input type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>
    </>
  );
};

export default Input;

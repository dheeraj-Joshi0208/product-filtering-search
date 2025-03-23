import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <>
      <label className="relative flex gap-1 mb-3 cursor-pointer">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </>
  );
};

export default Input;

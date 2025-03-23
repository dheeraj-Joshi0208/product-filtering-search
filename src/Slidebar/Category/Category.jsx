import React from "react";

const Category = () => {
  return (
    <div>
      <h2 className="text-[22px] font-bold mb-2">Category</h2>
      <div>
        <label className="relative flex gap-1 mb-3 cursor-pointer">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
      </div>
    </div>
  );
};

export default Category;

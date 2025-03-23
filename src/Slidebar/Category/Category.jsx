import React from "react";
import Input from "../../components/input/Input";

const Category = (handleChange) => {
  return (
    <div>
      <h2 className="text-[22px] font-bold mb-2">Category</h2>
      <div>
        <Input
          handleChange={handleChange}
          value="Sneakers"
          title="Snikers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;

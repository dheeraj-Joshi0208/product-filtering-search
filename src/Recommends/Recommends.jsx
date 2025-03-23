import React from "react";

const Recommends = () => {
  return (
    <>
      <div className="p-4">
        <h2 className="mb-20px mt-20px text-2xl">Recommended</h2>
        <div className="flex mt-2">
          <button className="btns">All Products</button>
          <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button>
        </div>
      </div>
    </>
  );
};

export default Recommends;

import React from "react";

const Recommends = () => {
  return (
    <>
      <div>
        <h2 className="ml-[20rem] mb-20px mt-20px text-2xl">Recommended</h2>
        <div className="flex ml-[20rem]">
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

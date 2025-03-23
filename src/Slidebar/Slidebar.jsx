import React from "react";
import Category from "./Category/Category";
import Price from "./Prices/Prices";
import Colors from "./Colors/Colors";

const Slidebar = ({ handleChange }) => {
  return (
    <>
      <section className="fixed w-64 border-r-2 border-gray-200 h-screen flex flex-col pl-10">
        <div className="mb-16">
          <h1 className="mt-6">🛒</h1>{" "}
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Slidebar;

import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Prices";
import Colors from "./Colors/Colors";

const Slidebar = () => {
  return (
    <>
      <section className="border-r-2 border-gray-200 h-screen flex flex-col pl-10">
        <div className="mb-16">
          <h1 className="mt-6">🛒</h1>{" "}
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Slidebar;

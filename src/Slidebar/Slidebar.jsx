import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Prices";
import Colors from "./Colors/Colors";

const Slidebar = () => {
  return (
    <>
      <section className="sidebar w-[15%] fixed h-screen z-[3]">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Slidebar;

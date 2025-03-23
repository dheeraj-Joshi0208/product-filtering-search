import React from "react";
import Products from "./src/Products/Products";
import Recommends from "./src/Recommends/Recommends";
import Slidebar from "./src/Slidebar/Slidebar";
import Nav from "./src/Navigation/Nav";
const App = () => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="w-64 h-screen">
        <Slidebar />
      </div>
      <div className="flex-1">
        <Nav />
        <Recommends />
        <Products />
      </div>
    </div>
  );
};
export default App;

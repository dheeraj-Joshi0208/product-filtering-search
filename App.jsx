import React from "react";
import Nav from "./src/navigation/Nav";
import Products from "./src/Products/Products";
import Recommends from "./src/Recommends/Recommends";
import Slidebar from "./src/Slidebar/Slidebar";
const App = () => {
  return (
    <div className="container flex">
      <div className="w-64 h-screen">
        <Slidebar />
      </div>
      <div className="flex-1/2">
        <Nav />
        <Recommends />
        <Products />
      </div>
    </div>
  );
};
export default App;

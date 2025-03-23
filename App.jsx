import React from "react";
import Nav from "./src/navigation/Nav";
import Products from "./src/Products/Products";
import Recommends from "./src/Recommends/Recommends";
import Slidebar from "./src/Slidebar/Slidebar";
const App = () => {
  return (
    <div className="container">
      <Slidebar />
      <Nav />
      <Recommends />
      <Products />
    </div>
  );
};
export default App;

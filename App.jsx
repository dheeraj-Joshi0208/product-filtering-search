import React from "react";
import Nav from "./src/navigation/Nav";
import Products from "./src/Products/Products";
import Recommends from "./src/Recommends/Recommends";
const App = () => {
  return (
    <div className="container">
      <Nav />
      <Products />
      <Recommends />
    </div>
  );
};

export default App;

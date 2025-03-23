import React, { useState } from "react";
import Products from "./src/Products/Products";
import Recommends from "./src/Recommends/Recommends";
import Slidebar from "./src/Slidebar/Slidebar";
import Nav from "./src/Navigation/Nav";
import productsData from "./src/db/data";
import Card from "./src/components/card/Card";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //------------------- Input Filter ----------------------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterItems = productsData.filter((product) => {
    return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  const filterData = (products, selected, query) => {
    let filteredProducts = products;
    if (query) filteredProducts = query;

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const output = filterData(productsData, selectedCategory, query);

  return (
    <div className="relative flex overflow-hidden">
      <div className="w-64 h-screen">
        <Slidebar handleChange={handleChange} />
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

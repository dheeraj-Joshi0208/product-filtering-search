import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import "./Card.css";

const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg"
        alt="Nike Men's Sneaker"
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">Nike Men's Sneaker</h3>
        <section className="card-reviews">
          <AiFillStar className="rating-star" />
          <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$300</del> <span className="discount-price">$200</span>
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;

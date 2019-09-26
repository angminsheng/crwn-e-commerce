import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <p className="name">{name}</p>
        <p>
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

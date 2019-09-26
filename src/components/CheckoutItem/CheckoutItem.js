import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addCartItem,
  removeCartItem
} from "../../redux/cart/cart.actions";

// not adding the action onto the argument will just called the action directly instead of through the dispatch function and causes the reducer function to not be called !
const CheckoutItem = ({
  item,
  clearItemFromCart,
  addCartItem,
  removeCartItem
}) => {
  const { id, name, imageUrl, price, quantity } = item;
  console.log(quantity);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>

      <div className="quantity">
        <div className="arrow" onClick={() => removeCartItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(item)}>
          &#10095;
        </div>
      </div>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: id => dispatch(clearItemFromCart(id)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeCartItem: id => dispatch(removeCartItem(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

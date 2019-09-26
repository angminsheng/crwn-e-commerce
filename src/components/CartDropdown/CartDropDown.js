import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { cartItemsSelector } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem item={item} key={item.id}></CartItem>)
        ) : (
          <span className="empty-message">Your cart is empty </span>
        )}
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            toggleCartHidden();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartHidden }
  )(CartDropDown)
);

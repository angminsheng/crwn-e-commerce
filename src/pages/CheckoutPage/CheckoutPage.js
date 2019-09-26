import React from "react";
import "./CheckoutPage.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  cartItemsSelector,
  cartItemsTotalSelector
} from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripCheckoutButton";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <div className="total">Total: ${cartItemsTotal}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartItemsTotal} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  cartItemsTotal: cartItemsTotalSelector
});

export default connect(mapStateToProps)(CheckoutPage);

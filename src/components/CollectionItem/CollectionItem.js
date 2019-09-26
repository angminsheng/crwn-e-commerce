import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);

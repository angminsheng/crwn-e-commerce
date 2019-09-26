import React from "react";
import { connect } from "react-redux";
import { collectionSelector } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import "./CollectionPage.scss";

const CollectionPage = ({ match, collection: { items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{match.params.collectionId}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

import React from "react";
import { previewCollectionsSelector } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const CollectionsOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview
          {...collection}
          id={collection.id}
          key={collection.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: previewCollectionsSelector
});

export default connect(mapStateToProps)(CollectionsOverview);

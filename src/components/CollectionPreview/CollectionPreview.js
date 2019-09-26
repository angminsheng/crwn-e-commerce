import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

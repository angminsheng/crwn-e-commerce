import { createSelector } from "reselect";

const shopSelector = state => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

export const collectionsSelector = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const previewCollectionsSelector = createSelector(
  [shopSelector],
  shop => Object.values(shop.collections)
);

export const collectionSelector = collectionName =>
  createSelector(
    [shopSelector],
    shop => shop.collections[collectionName]
  );

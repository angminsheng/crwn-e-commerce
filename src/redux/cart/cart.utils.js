// this is not working. The reference to the array is new but the reference to the object is still the same.

// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(
//     cartItem => cartItem.id === cartItemToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map(cartItem =>
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
// };

export const addItemToCart = (cartItem, item) => {
  // started with the code below and doesn't work
  // let cartItemCopy = [...cartItem]
  let cartItemCopy = cartItem.map(item => ({ ...item }));
  let foundIndex = cartItem.findIndex(el => el.id === item.id);
  if (foundIndex === -1) {
    cartItemCopy.push({ ...item, quantity: 1 });
  } else {
    cartItemCopy[foundIndex].quantity++;
  }
  return cartItemCopy;
};

export const removeItemFromCart = (cartItem, id) => {
  let foundCartItem = cartItem.find(item => item.id === id);

  if (foundCartItem.quantity === 1) {
    return cartItem.filter(item => item.id !== id);
  }

  return cartItem.map(item =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

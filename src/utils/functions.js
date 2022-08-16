export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
};

export const setCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const cartEmpty = (cart) => (!cart || (Array.isArray(cart) && cart.length === 0));

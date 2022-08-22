export const getCart = () => JSON.parse(localStorage.getItem('cart'));

export const setCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const cartEmpty = (cart) => (!cart || (Array.isArray(cart) && cart.length === 0));

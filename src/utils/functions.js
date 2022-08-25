export const getCart = () => JSON.parse(localStorage.getItem('cart'));

export const setCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getVisited = () => JSON.parse(localStorage.getItem('visited'));

export const setVisited = (visited) => {
  localStorage.setItem('visited', JSON.stringify(visited));
};

export const cartEmpty = (cart) => (!cart || (Array.isArray(cart) && cart.length === 0));

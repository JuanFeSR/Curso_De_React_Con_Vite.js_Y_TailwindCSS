/**
 * This function calculates the total price of a new order.
 * @param {Array} products selectedProducts: Array of Objects.
 * @returns {number} Total Price
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum.toFixed(2);
};

/**
 *
 * @returns Current Date
 */

export const currentDate = () => {
  const date = new Date().toLocaleDateString();
  return date;
};

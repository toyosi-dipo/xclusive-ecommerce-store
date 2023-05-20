function maxValue(array) {
  return array.reduce((total, product) => {
    if (total >= product.price) {
      return total;
    } else {
      return product.price;
    }
  }, 0);
}

export default maxValue;

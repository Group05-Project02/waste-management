module.exports = {
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    },
    subtract: (arg1, arg2) => {
      return arg1-arg2;
    },
    loss: (quantity, consumption, price) => {
      return (quantity-consumption)*price;
    },
    percentage: (quantity, consumption, price) => {
      return ((quantity-consumption)*price)/(quantity*price);
    }
  };
  
module.exports = {
    subtract: (arg1, arg2) => {
      return arg1-arg2;
    },

    loss: (quantity, consumption, price) => {
      return ((quantity-consumption)*(price/quantity)).toFixed(2);
    },

    wasteQuantityPercentage: (products) => {
      if(products.length){
        var quantitySum = 0;
        var priceSum = 0;
        var consumptionSum = 0;

        products.forEach(product => {
        quantitySum+=product.quantity;
        priceSum+=product.price;
        consumptionSum+=product.consumption;
        });
        return ((quantitySum-consumptionSum)*100/quantitySum).toFixed(2); 
      }
      return 0;     
    },

    wasteCost: (products) => {
      var totalLoss=0;
      products.forEach(product => {
        totalLoss+=(product.quantity-product.consumption)*(product.price/product.quantity);
      });
      return totalLoss.toFixed(2);
    },

    totalCost: (products) =>{
      var totalCost=0.00;
      products.forEach(product => {
        totalCost+=parseFloat(product.price);
      });
      return totalCost;
    }
  };
  
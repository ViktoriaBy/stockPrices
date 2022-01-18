
const getMaxProfit = (prices) => {
    let maxProfit = 0;
      
    for (let buyDay = 0; buyDay < prices.length; buyDay++) {
      const buyPrice = prices[buyDay];
  
      for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
        const sellPrice = prices[sellDay];
        const currentProfit = sellPrice - buyPrice;
  
        maxProfit = Math.max(maxProfit, currentProfit);
      }
    }
  
    return maxProfit;
  };
    
          
  
  getMaxProfit([44, 30, 24, 32, 35, 30, 40, 38, 15]);  
  
  // best([1, 2, 3, 4, 5])\
  // best([2, 3, 10, 6, 4, 8, 1])
  // best([5, 4 , 3, 2, 1])
  
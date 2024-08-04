// 121. Best Time to Buy and Sell Stock

//* DRY RUN
//[7,1,5,3,6,4]
//min = 7
//profit = 0
//min(7 , 7) = 7
//max(0 , 7 - 7) = 0
//min(7 , 1) = 1
//max(0 , 1 - 1) = 0
//min(1 , 5) = 1
//max(0 , 5 - 1) = 4
//min(1 , 3) = 1
//max(4 , 3 - 1) = 4
//min(1 , 6) = 1
//max(4 , 6 - 1) = 5
//min(1 , 4) = 1
//max(5 , 4 - 1) = 5
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    for(let i = 0 ; i < prices.length ; i++){
        min = Math.min( min , prices[i]);
        profit = Math.max(profit , prices[i] - min);
    }
    return profit;
};

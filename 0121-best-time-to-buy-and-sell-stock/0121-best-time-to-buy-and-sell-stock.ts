function maxProfit(prices: number[]): number {
    let buy = 0;
    let maxResult = 0;
    for(let i =1; i<prices.length;i++){
        if(prices[buy]<prices[i]){
            const profit = prices[i]-prices[buy]
            maxResult = Math.max(maxResult,profit)
        }  else{
            buy=i
        }

    }
    return maxResult;
};


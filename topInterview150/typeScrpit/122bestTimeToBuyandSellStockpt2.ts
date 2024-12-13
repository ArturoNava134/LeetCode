// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

// Constraints:

// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104

let pricesspt2 = [7,6,4,3,1];
let prices2pt2 = [1,2,3,4,5];


//Accepted by leetcode

function maxProfitCorrect(prices: number[]): number {
    //we set our maxProfit as 0 to increase it each time the profit is positive.
    let maxProfit: number = 0;
    //we start the loop since the seccond position so we can compare the last day and the current day.
    for (let i: number = 1; i < prices.length; i++){
        // we declare buy and sell buy as the i day -1 and sell as the current day.
        let buy: number = prices[i-1];
        let sell: number = prices[i];
        // we declare the difference variable as the substract of the sell - the buy.
        let difference: number = sell - buy;
        // then we validate if we have a profit in the current day, if the difference is positive, we add it to the profit variable.
        // if it is not, we continue with the loop.
        if (difference > 0){
            maxProfit += difference;
        }
    }
    console.log(maxProfit);
    return maxProfit;
}
maxProfitCorrect(pricesspt2)
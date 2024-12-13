
//my Solution Accepted but not submited:


function maxProfit(prices: number[]): number {
    // we declare 2 variables to don't use the loop's variables for getting the position bc they're gonna be reset each time the
    // first loop is repeated.
    let Position = 0;
    let num = 1;
    // then we can assign our profits variable.
    let profits: number[] = [];
    // we declare the length to be able of modify it for each j looped through
    let length = prices.length;
    // we declare the first loop to through for all the posible days 1-7
    for (let j = 0; j<prices.length; j++){
        //this variable is gonna be used to save all the profits for each day.
        let arrOperations: number[] = [];
        //this seccond loop is gonna be used for push all the possible results for the first day.
        for(let i = 0; i<length; i++){
            // we set the currValue as the position we are currently in.
            let currValue = prices[Position];
            // then we can set the value to check as the position we need to compare, this is gonna be increased each time 
            // the loop runs
            let valueToCheck = prices[num];
            // we set the currentValue as negative so we can add the valueToCheck with it and get the profit.
            let negativeValue = 0 - currValue;
            //we do the sum of both variables
            let operation = negativeValue + valueToCheck;
            //then we push the result each time the loop runs
            arrOperations.push(operation);
            // we add 1 to the num each time the loop runs so we can move through the value to Check.
            num++;
        }
        // each time the first loop is completed we add 1 to the starting num variable, so we can start in the next position to
        // do the sum the correct numbers
        num = j+1;
        // we substract 1 to the length each time the first loop is completed so we don't get more days than the left ones in the week.
        length--;
        // we assign the variable profits as the max number of the arrayOperations where we compared the first day with the rest.
        let profit: number = Math.max(...arrOperations);
        // then we check if the profit is 0 or NaN we assign it as 0, into the profits variable that is where we are gonna save all the
        // max values obtained in the complete week.
        if (profit < 0 || isNaN(profit)) {
            profits.push(0);
        }else{
            // if the value isn't 0 or Nan we can push it as it is.
            profits.push(profit);
        }
        // once we saved our value into the profits variable, we can add 1 to the position variable so we can move to the next day.
        Position++;
        
    }
    console.log(profits);
    
    // we can declare the buying and selling values, the selling as the max number in profits, and the buying as the position
    // or in other words, the day where we obtained the max profit
    let selling: number = Math.max(...profits);
    let buyingArr: number = profits.indexOf(selling);
    let buying: number = buyingArr+1;
    console.log(selling, buying);
    return selling;

};

let prices = [7,6,4,3,1];
let prices2 = [7,1,5,3,6,4];

// maxProfit(prices);



// solution Submited: 

function maxProfitAccepted(prices: number[]): number {

    let min = 0;
    let maxI = 0;
    let res = 0;

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < prices[min]) {
      min = i;
      maxI = i;
    }
    if (prices[i] > prices[maxI]) {
      maxI = i;
      res = Math.max(res, prices[maxI] - prices[min])
    }
  }

  return res;
};

// maxProfitAccepted(prices)


// also accepted, less code lines but can't be submited.

function maxProfitBetter(prices: number[]): number {
    let min: number = Math.min(...prices);
    let posibleSellings: number[] = [];
    let minPosition: number = prices.indexOf(min);
    let maxPosition = 0;
    let count = 0;
    for (let i = minPosition; i < prices.length; i++){
        if (prices[i] < prices[min]) {
            min = i;
            maxPosition = i;
        }else{
            posibleSellings.push(prices[i]);
            console.log(posibleSellings)
            count++;
        }
        
    }
    let max: number = Math.max(...posibleSellings);
    let idx: number = posibleSellings.indexOf(max);
    let res: number = idx+minPosition;
    if (count == 1){
        return 0;
    }else{
        return count;
    }

};

// maxProfitBetter(prices);
var generateParenthesis = function(n) {

    function backtrack(res, current, open, close) {
        // If no parentheses are left to add, store the valid combination
        if (open === 0 && close === 0) {
            res.push(current);
            return;
        }

        // If there are open parentheses available, add one and recurse
        if (open > 0) {
            backtrack(res, current + "(", open - 1, close);
        }

        // If there are more close parentheses available than open, add one and recurse
        if (close > open) {
            backtrack(res, current + ")", open, close - 1);
        }
    }

    // Initialize result array and start the recursive process
    let result = [];
    backtrack(result, "", n, n);
    console.log(result);
    return result;
};

let n = 3;

generateParenthesis(n);
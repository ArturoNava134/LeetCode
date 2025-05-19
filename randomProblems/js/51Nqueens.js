var solveNQueens = function(n) {
  if (n === 1) return [["Q"]];
  
  const cols    = new Set();
  const posDiag = new Set();
  const negDiag = new Set();

  const res   = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  // Comprueba si podemos poner reina en (r,c)
  const isValid = (r, c) => (
    !cols.has(c) &&
    !posDiag.has(r + c) &&
    !negDiag.has(r - c)
  );

  const placeQueen = (r, c) => {
    cols.add(c);
    posDiag.add(r + c);
    negDiag.add(r - c);
    board[r][c] = "Q";
  };

  const removeQueen = (r, c) => {
    cols.delete(c);
    posDiag.delete(r + c);
    negDiag.delete(r - c);
    board[r][c] = ".";
  };

  const backtrack = (r) => {
    if (r === n) {
      // Guardamos la configuración actual como solución
      res.push(board.map(row => row.join("")));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (isValid(r, c)) {
        placeQueen(r, c);
        backtrack(r + 1);
        removeQueen(r, c);
      }
    }
  };

  backtrack(0);
  return res;
};

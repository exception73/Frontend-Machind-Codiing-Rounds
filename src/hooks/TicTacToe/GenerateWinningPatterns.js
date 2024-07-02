function generateWinningPatterns(n) {
    const WINNING = [];
  
    // Rows
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(i * n + j);
      }
      WINNING.push(row);
    }
  
    // Columns
    for (let j = 0; j < n; j++) {
      const col = [];
      for (let i = 0; i < n; i++) {
        col.push(i * n + j);
      }
      WINNING.push(col);
    }
  
    // Top-left to bottom-right diagonal
    const diag1 = [];
    for (let i = 0; i < n; i++) {
      diag1.push(i * n + i);
    }
    WINNING.push(diag1);
  
    // Top-right to bottom-left diagonal
    const diag2 = [];
    for (let i = 0; i < n; i++) {
      diag2.push(i * n + (n - 1 - i));
    }
    WINNING.push(diag2);
  
    return WINNING;
  }
  
export default generateWinningPatterns
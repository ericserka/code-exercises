// 1198. Find Smallest Common Element in All Rows
// Given a matrix mat where every row is sorted in increasing order, return the smallest common element in all rows.

// If there is no common element, return -1.

// Example 1:

// Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
// Output: 5


// Constraints:

// 1 <= mat.length, mat[i].length <= 500
// 1 <= mat[i][j] <= 10^4
// mat[i] is sorted in increasing order.

const solution = (mat) => {
  const map = new Map()
  for (const row of mat) {
    for (const x of row) {
      const xCount = map.get(x)
      const updatedCount = xCount ? xCount + 1 : 1
      if (updatedCount == mat.length) {
        return x;
      }
      map.set(x, updatedCount)
    }
  }
  return -1;
}

console.log(solution([[1, 2, 3, 4, 5], [2, 4, 5, 8, 10], [3, 5, 7, 9, 11], [1, 3, 5, 7, 9]]))
console.log(solution([[1, 2, 3, 4, 5], [2, 4, 5, 8, 10], [3, 5, 7, 9, 11], [1, 3, 4, 7, 9]]))

# Brute force

1. Initialise an integer variable ‘ANS’ to 0, which will store the final ‘ANS’ i.e length of the longest switching subarray.
2. Generate the subarray of the given array by running two nested loops, the outer loop picks starting element('START') and inner loop considers all elements on the right of the picked('START') element as the ending element('END') of the subarray.
3. For every ‘SUBARRAY’['START', ‘END’], check whether it is switching subarray or not.
  - Run a loop from ‘START’ + 2 to ‘END’.
  - If the element at ‘ARR’[i] is equal to the element at ‘ARR’[i-2] then continue, otherwise, return false.
  - If the whole subarray got traversed then it satisfies the switching subarray condition, so return true.
4. If the subarray is switching, get its length and update ‘ANS’ to the maximum of ‘ANS’ and length of the subarray.
5. Finally, return the ‘ANS’.

# Time Complexity

O(N ^ 3), where N is the length of the array.

In the worst case, we will be generating all the subarrays, to do so we are fixing every index as starting index O(N), and then for each starting index we are fixing an ending index, thus, generating subarray takes O(N^2) time. For each subarray, we need to check whether it is switching or not, in the worst case we have to traverse the whole subarray that can take O(N) time.

Thus, overall time complexity would be O(N^3).

# Space Complexity

O(1)

Constant extra space is required.

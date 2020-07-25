/*Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.


Input: [1,3,5,6], 5
        0 1 2 3
Output: 2

Input: [1,3,5,6], 2
        0 1 2 3
        ^
              ^
          ^  
Output: 1
8/

/*sudo: 
[1, 3, 4, 6], 5
 0  1  2  3 
          ^
          ||
          f  
        L

mid = 3
Input: [1,3,5,6], 0 <- target
Output: 0 <-index
*/
let first = 0
let last = arry.lenght-1
while first < last {
    middle = Math.floor(first + last)/2)
if (arry[middle] = target){
    return middle 
}else {
if (arry[middle] < target){
    first = middle + 1   
   
}
if (arry[middle] > target){
    last = middle - 1 
}
}
if (first > last){
    return first 
}



var searchInsert = function(nums, target) {
    
};



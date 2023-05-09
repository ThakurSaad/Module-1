"use strict";
/**
 * Write a TypeScript function that takes in two arrays of numbers as parameters.
 * The function should compare the elements in both arrays and return a new array
 * that contains only the elements that are present in both arrays.
 
 * For example, if the first array is [1, 2, 3, 4, 5] and the second array is
 * [2, 4, 6, 8], the function should return a new array with the elements 2 and 4
 * because they are present in both arrays.

 * The function should handle arrays of any length and should return the resulting
 * array in the same order as they appear in the first array.
 */
const commonNumbersArr = (arr1, arr2) => {
    const newArr = arr1.filter((num) => arr2.includes(num));
    return newArr;
};
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6, 5, 6, 45, 43, 3, 2, 2, 4, 4, 4, 4];
commonNumbersArr(arr1, arr2);

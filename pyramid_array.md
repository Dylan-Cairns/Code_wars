# Pyramid Array
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

## problem
input - an integer >= 0
output - a matrix of arrays

## algorithm
0. if input int is 0, return an empty array.
1. create an empty array
2. starting from 1 and counting up towards the integer given as input,
  - create a new array of length of counter,
  - fill array with 1's
  - push array to output array.


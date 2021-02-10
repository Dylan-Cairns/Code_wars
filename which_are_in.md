# Which are in?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

## Problem
input - two arrays of strings
output - a sorted array of strings
rules - do not modify input

## Algorithm
0. create an output array.
1. for each string in array1,
  - for each string in array2,
    - if a1 is a substring of a2, add a1 to the output array and break the inner loop.
2. sort the output array.
3. return the output array.
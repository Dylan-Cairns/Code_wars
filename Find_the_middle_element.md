# Find the middle element
create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

## Problem
input - an array containing 3 integers
output - an integer representing the index of the input inter whose value is between the other two elements

## Examples
gimme([2, 3, 1]) => 0

gimme([5, 10, 14]) => 1

## Algorithm
1. check wether the first element is smaller than the 2nd but larger then the 3rd element. if so, return it.
2. repeat this process for each remaining element.
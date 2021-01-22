# Triple Trouble
*Write a function which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.*

## Problem
input - two integers
output - an integer 1 or 0 
rules - 
edgecases - what about all zeroes?

## Algorithm
1. convert the first argument int to a string
2. starting from the second element of the string: 
  - for each element of the string, 
  - if idx-1 element is the same as idx, increment a counter.
3. if the counter reaches 2,
  - save the number at idx
  - else, return false
4. convert the 2nd argument to a string.
5. starting from the first element,
  - if idx & idx+1 = previously saved number,
  - return true
  - else, return false.
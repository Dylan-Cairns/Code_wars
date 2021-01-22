# Fizz Buzz
Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

## Problem
input - an array of integers
output - the input array, modified
rules - modify the original array
edgecases - smallest # of elemensts is 1

## Algorithm
1. for each element of the input array,
  - if the element is a multiple of 3 & 5, replace the current value with FizzBuzz
  - if the element is a multiple of 3, replace the current value with Fizz
  - if the element is a multiple of 5, replace the current value with Buzz
2. return the input array.
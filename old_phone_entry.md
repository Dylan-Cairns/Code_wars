# Old mobile phone input
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

## Problem
input - string
output - an integer representing the number of keypresses required given the input string
rules
  - ignore punctuation
  - upper/lower case are same
  - number comes after letters

## Algorithm
1. create a string which contains the given keyboard layout, with spaces as dividers
2. create a function which will calculate the number of keypresses for each letter, and store the integer values in an object.
3. convert input to lower string, calculate the total based in the input, return the total.
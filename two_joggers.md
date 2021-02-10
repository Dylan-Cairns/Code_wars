# Two Joggers
Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

    The length of Bob's lap (larger than 0)
    The length of Charles' lap (larger than 0)

The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

    The first number is the number of laps that Bob has to run
    The second number is the number of laps that Charles has to run

## problem
input - two integers
output - array containing two integers
edge cases - input will always be a positive integer

## algorithm
0. initialize a counter and an output array
1. starting from 1, incrementally check each integer to find the lowest value that is has a remainder of 0 when divided by both numbers. store it in the counter
2. for each number, divide it by the counter and store the result in the output array.
3. return the output array.
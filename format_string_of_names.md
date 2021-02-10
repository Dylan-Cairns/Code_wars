# Format a string of names like 'Bart, Lisa & Maggie'.
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

## Problem
input - array containing objects
output - a formatted string
rules - there should be ampersand rather than comma before last name

## Algorithm
1. create an empty string
2. for each element of the array except for the last one, add it to the output string with a comma.
3. add an ampersand followed by the last element.
4. return the string.
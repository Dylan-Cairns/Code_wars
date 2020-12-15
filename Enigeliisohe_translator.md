# Enigeliisohe Translator
Create an English to Enigeliisohe Translator, which after each consonant or semivowel inserts in lower case form the last vowel which precedes it in the alphabet.

## Problem
input - string consisting of words to be translated
output - string containing translated words.
rules/ edgecases - empty string?

## Algorithm
1. check if the input string is empty. if so, return an empty string.
2. create a key containing each letter of the alphabet.
3. create a key containing each vowel.
4. initialize an empty object to act as a dictionary.
5. for each letter in the alphabet:
  - check if it is a consonant. if so:
    - check consecutive previous elements of the key until a vowel is found.
      - add this consonant/vowel pair to the dictionary.
6. for each word in the input string:
  - for each letter in the word:
    - create a new variable to hold an output string.
    - for each letter in the input string:
      - append the input letter to the string. if an entry exists for it in the key, append that as well.
      - append the new word to an output string.
7. return the output string.
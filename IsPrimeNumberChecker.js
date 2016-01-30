/*
http://planetmath.org/howtofindwhetheragivennumberisprimeornot
What is a prime number

A number is greater than 1 is called a prime number, if it has only two factors, namely 1 and the number itself.

Prime numbers up to 100 are:2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

Procedure to find out the prime number

Suppose A is given number.

Step 1: Find a whole number nearly greater than the square root of A. K ¿ square root(A) Step 2: Test whether A is divisible by any prime number less than K. If yes A is not a prime number. If not, A is prime number.

Example:

Find out whether 337 is a prime number or not?

Step 1: 19 ¿ square root (337) Prime numbers less than 19 are 2, 3, 5, 7, 11, 13, 17 Step 2: 337 is not divisible by any of them

Therefore 337 is a prime number

These are simple and easy tricks which are helpful to solve your math homework problems .

Approach.
  using a dictionanry to store non primes and query against it
  check if input/2 down are primes 
*/

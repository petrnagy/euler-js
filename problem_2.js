/**
 * @see https://projecteuler.net/problem=2
 * @author PN
 */

var start = new Date;

var limit = 4000000;

var n2  = 1;
var n1  = 2;
var n   = 3;
var sum = 2;

while ( n < limit ) {
    if ( 0.00 === n % 2 ) {
        sum += n;
    } // end if
    n2 = n1;
    n1 = n;
    n = n1+n2;
} // end while

var end = new Date;

print("Considering the terms in the Fibonacci sequence whose values do not exceed four million, the sum of the even-valued terms is: " + sum.toString());
print("Took: " + (end.getTime() - start.getTime()) / 1000 + 'sec')
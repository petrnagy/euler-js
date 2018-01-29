/**
 * @see https://projecteuler.net/problem=1
 * @author PN
 */

var start = new Date;

var sum = 0;

for (var i = 1; i < 1000; i++) {
    if (0.00 === i % 3 || 0.00 === i % 5) {
        sum += i;
    } // end if
} // end for

var end = new Date;

print("The sum of all the multiples of 3 or 5 below 1000 is: " + sum.toString());
print("Took: " + (end.getTime() - start.getTime()) / 1000 + 'sec')
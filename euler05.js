// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

;(function smallest_number_without_remainder(limit) {
    var num = 1;

    for ( var i = 1; i <= limit; i++ ) {
        if ( !(num % i) ) {
            continue;
        } else {
            i = 1;
            num++;
        }
    }

    console.log(num);

})(20)
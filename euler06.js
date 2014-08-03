// The sum of the squares of the first ten natural numbers is,
// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)**2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
;(function difference_of_squares_and_sums(limit) {

    console.log(square_of_sum(limit) - sum_of_squares(limit));

    function sum_of_squares(lim) {
        var sum = 0, i = 0;
        while ( i <= lim ) {
            sum += Math.pow(i, 2);
            i++;
        }

        return sum;
    }

    function square_of_sum(lim) {
        var sum = 0, i = 0;
        while ( i <= lim ) {
            sum += i;
            i++
        }

        return Math.pow(sum, 2);
    }

})(100);

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10,001st prime number?

;(function nth_prime(n) {

    var i = 1, p = 1;

    while ( p <= n ) {
        i = next_prime(i);
        p++;
    }

    console.log(i);

    function next_prime(num) {
        do {
            num++;
        } while ( !is_prime(num) );

        return num;
    }

    function is_prime(num) {
        for ( var i = 2; i < num; i++ ) {
            if ( !(num % i) ) {
                return false;
            }
        }
        return true;
    }

})(10001)
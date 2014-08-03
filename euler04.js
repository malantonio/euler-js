// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

;(function largest_three_digit_palindrome(number_of_digits) {
    var start = parseInt(array_fill(9, number_of_digits).join('')),
        i = start,
        limit = Math.pow(10, number_of_digits - 1) - 1,
        pal = 0
        ;

    for ( ; i > limit; i-- ) {
        var prod = start * i;
        if ( is_palindromic(prod) ) { 
            
            // this threw me off: we're not simply looking for the palindrome w/ the largest
            // 2-digit numbers, but the palindrome w/ the largest value
            if ( pal < prod ) { pal = prod; }   
        }

        if ( i === limit + 1 ) {
            i = start;
            start--;
        }

        if ( start === limit ) { break; }
    }

    console.log(pal);
    return;

    function is_palindromic(num) {
        var str = num.toString().split(''),
            i = 0, j = -1,
            str_len = str.length;

        for ( ; i < str_len; i++, j-- ) {
            if ( str[i] !== str[str_len + j] ) { return false; }
        }

        return true;
    }

    function array_fill(val, start, end) {
        if ( !end ) {
            end = start;
            start = 0;
        }

        var arr = [];

        while ( start < end ) {
            arr[start++] = val;
        }

        return arr;
    }


})(3)
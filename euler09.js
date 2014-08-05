// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a**2 + b**2 = c**2

// For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

;(function() {
    var a,b,c,sum;

    for ( var i = 1; i <= 1000; i++ ) {
        for ( var j = i+1; j <= 1000; j++ ) {
            a = i;
            b = j;
            c = get_c(a,b);

            if ( parseInt(c) === c ) {
                sum = a + b + c;
                if ( sum === 1000 ) {
                    console.log('found \'em!: ' + a + ',' + b + ',' + c);
                    console.log('product: ' + (a * b * c));
                    return;
                }
            }
        }
    }

    function get_c(a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
})()
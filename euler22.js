// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it 
//     into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the 
//     list to obtain a name score.
//
// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the 
//     list. So, COLIN would obtain a score of 938 × 53 = 49714.
//
// What is the total of all the name scores in the file?

var fs = require('fs');

fs.readFile('names.txt', {'encoding': 'UTF-8', 'flag': 'r'}, function(err, data) {
    if ( err ) { throw Error(err); }

    var name_bundle = data.replace(/\"/g, '').split(',');
    name_bundle.sort(alpha_sort);

    var total_score = 0;

    name_bundle.forEach(function(name, idx) {
        var ns = get_name_score(name);
        
        total_score = (ns * (idx + 1)) + total_score;
    });

    console.log(total_score);
});

function alpha_sort(a, b) {
    if ( a === b ) { return 0; } 
    else { return a < b ? -1 : 1; }
}

// leave space at beginning of alphabet string to give spaces a value of 0 and to
// adjust score so that A is 1st position
function get_letter_score(letter) {
    var arr = ' abcdefghijklmnopqrstuvwxyz'.split('');
    return arr.indexOf(letter.toLowerCase());
}

function get_name_score(name) {
    var score = 0;
    name.split('').forEach(function(let) {
        score += get_letter_score(let);
    });

    return score;
}
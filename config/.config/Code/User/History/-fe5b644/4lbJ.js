function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
string1 = "This is a sentence and an example";

letters = Array.from(new Set(string1));
console.log(letters);
tst = getFrequency(string1)
console.log(tst)
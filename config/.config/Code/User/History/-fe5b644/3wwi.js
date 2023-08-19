function letFreqOrder(string1){    
    function getFrequency(string) {
        var freq = {};
        for (var i=0; i<string.length;i++) {
            var character = string.charAt(i);
            if (freq[character]) {
            if (freq[character] != ' ') {
                freq[character]++;
            }
                
            } else {
                if (freq[character] != ' ') {
                    freq[character] = 1;
                } 
            }
        }

        return freq;
    };

    function sortObj(obj) {
        return Object.entries(obj)
            .sort((a, b) =>
                a[1] !== b[1] ?
                b[1] - a[1] :
                b[0] < a[0] ? 1 : -1
            )
            .map(e => e[0]);
    }

    string2 = string1.split(' ').sort().join('').toLowerCase()
    frequency_dict = getFrequency(string2)

    for ([key, value] of Object.entries(frequency_dict)){
        if (value < 2) {
            delete frequency_dict[key]
        }
    }

    return sortObj(frequency_dict).join('')
}

string1 = "This is a sentence and ann example";
console.log(letFreqOrder(string1))
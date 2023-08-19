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
string1 = "This is a sentence and an example";
string2 = string1.split(' ').join('').toLowerCase()
frequency_dict = getFrequency(string2)

for ([key, value] of Object.entries(frequency_dict)){
    if (value < 2) {
        delete frequency_dict[key]
    }
}

new_dict = Object.entries(frequency_dict).sort(([,a],[,b]) => b-a)

for (item of Object.entries(new_dict)){
    console.log(item[0][0])
}
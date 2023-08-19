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
string2 = string1.split(' ').join('')
frequency_dict = getFrequency(string2)

console.log(frequency_dict)

for ([key, value] of Object.entries(frequency_dict)){
    if (item[Object.keys(item)[0]] < 2) {
        delete frequency_dict;
    }
    
}
// for (item of frequency_dict){
//     console.log(item)
// }
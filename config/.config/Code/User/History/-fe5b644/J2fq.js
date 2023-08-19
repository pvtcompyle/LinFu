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

frequency_dict = getFrequency(string1)

console.log(frequency_dict)

// for (item of frequency_dict){
//     if (item[Object.keys(item)[0]] < 2) {
//         vowels.splice(vowels.indexOf(item), 1);
//     }
    
// }
for (item of dir(frequency_dict)){
    console.log(item)
}
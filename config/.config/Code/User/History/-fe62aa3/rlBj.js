string1 = "iighjleldlfelqwpeghnoxcvoa"

vowels = [
    {"a":0},
    {"e":0},
    {"i":0},
    {"o":0},
    {"u":0}
];

array1 = string1.split('')
for (char of array1) {
    switch(char) {
        case 'a':
            vowels[0].a++;
            break;
        case 'e':
            vowels[1].e++;
            break;
        case 'i':
            vowels[2].i++;
            break;
        case 'o':
            vowels[3].o++;
            break;
        case 'u':
            vowels[4].u++;
            break;
        default:
            break
    }
}
for (item of vowels){
    if (item[Object.keys(item)[0]] < 2) {
        vowels.splice(vowels.indexOf(item), 1);
    }
}
for (item of vowels){
    console.log(item)
}
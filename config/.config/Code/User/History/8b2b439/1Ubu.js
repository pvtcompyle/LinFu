string1 = "iighjleldlfelqwpeghnoxcvoa"

vowels = [
    {"a":0},
    {"e":0},
    {"i":0},
    {"o":0},
    {"u":0}
]

array1 = string1.split('')
for (char of array1) {
    switch(char) {
        case 'a':
            vowels['a']++
    }
    console.log(char)
}
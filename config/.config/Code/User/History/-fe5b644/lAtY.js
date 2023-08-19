function letFreqOrderA(string1){    
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

function letFreqOrderB(string1) {
    letAndNumObj = []
    newString = string1.replace(/\s/g, '')
    newString = newString.toLowerCase()
    array1 = newString.split("")
    array1 = array1.sort()
    newString = array1.join("")
    for(var a=0; a<newString.length; a++) {
      var count=0
      for(var b=0; b<newString.length; b++) {
        if(newString[a] == newString[b] && a > b) {
          break;
        }
        if(newString[a] == newString[b]) {
          count++
        }
      }
      if(count > 1) {
      newObj = {}
      newObj.letter = newString[a]
      newObj.number = count
      letAndNumObj.push(newObj)
      }
    }
    var sorted = letAndNumObj.sort(
      function(first, second) {
        if(first.number > second.number)
          return -1
        else if(first.number < second.number)
          return 1
        if(first.letter < second.letter)
          return -1
        else if(first.letter > second.letter)
          return 1
      }
    )
    finalString = ''
    for(var c=0; c<sorted.length; c++) {
      finalString += sorted[c].letter
    }
    return finalString
  }
string1b = "Here is another test so let us see if this works out"
string1 = "This is a sentence and an example";
console.log(letFreqOrderA(string1).length)
console.log(letFreqOrderB(string1).length)
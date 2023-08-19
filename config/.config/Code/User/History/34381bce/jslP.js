array1 = ["at", "flag", "words", "round", "object", "run", "will", "how", "to", "set", "then", "flag", "run", "will", "at", "do", "run"];
num1 = 3;
string1 = "new";

filter_array = array1.filter(word => word.length == num1);
replace_string = filter_array.map(item => item == filter_array.find(item => item == filter_array[0]) ? string1 : item);
replaced_array = filter_array.map(item => item == replace_string ? string1 : item);

console.log(filter_array);
console.log(replace_string);
console.log(replaced_array);

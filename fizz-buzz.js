var arr = [];
var number = 1;
fizzbuzz();
function fizzbuzz() {
while(number <= 100){
    if(number % 15 === 0) {
        arr.push("fizzbuzz");
    }
    else if(number % 5 === 0) {
        arr.push("buzz");
    }
    else if(number % 3 === 0) {
        arr.push("fizz");
    }
    else {
        arr.push(number);
    }
number++;
}  
    return console.log(arr);
}
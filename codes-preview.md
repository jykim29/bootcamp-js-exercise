# Preview
## tweet-length.js
```javascript
var str = prompt("문장을 입력해주세요. (최대 250자)");
var leftStr = 250 - str.length;
if(leftStr > 0 && str.length != 0) {
    alert("당신은 "+str.length+"자를 입력하였으며, "+leftStr+"자를 더 입력할 수 있습니다.");
}
else if(leftStr < 0) {
    alert("250자를 초과하였습니다.");
}
else if(str.length == 0) {
    alert("아무것도 입력하지 않았습니다.");
}
```
---
## tweet-lengh-limited.js
```javascript
var tweet = prompt("트윗을 입력하세요. (최대 30자)");
alert(tweet.slice(0,30));
```
---
## upper-lower-case.js
```javascript
var yourName = prompt("Please type your name.");
var firstLetter = yourName.slice(0,1);
var leftLetter = yourName.slice(1,yourName.length);
var upperLetter = firstLetter.toUpperCase();
var lowerLetter = leftLetter.toLowerCase();
var final = upperLetter + lowerLetter;
alert("Hello, "+final);
```
---
## dog-age-calc.js
```javascript
var dogAge = prompt("개의 나이를 입력하시오.");
var humanAge = (dogAge - 2) * 4 + 21;
alert("사람으로 치면 "+humanAge+"살 입니다.");
```
---
## bmi-calculator.js
```javascript
 bmiCalculator(93, 1.76);
function bmiCalculator(weight, height) {
    return Math.round( weight / Math.pow(height, 2) );
}
```
---
## bmi-calc-advanced.js
```javascript
bmiCalculator(60, 2);
bmiCalculator(80, 2);

function bmiCalculator (weight, height) {
  var bmi = weight / Math.pow(height, 2);
  var interpretation;
  if(bmi < 18.5) {
      interpretation = "Your BMI is "+bmi+", so you are underweight."
  }
  if(18.5 <= bmi && bmi <= 24.9) {
      interpretation = "Your BMI is "+bmi+", so you have a normal weight."
  }
  if(bmi > 24.9) {
      interpretation = "Your BMI is "+bmi+", so you are overweight."
  }
  
  return console.log(interpretation);
}
```
---
## random-dice.js
```javascript
Math.floor(Math.random() * 6 + 1);
```
---
## love-calc.js
```javascript
var myName = prompt("This is Love Calc. What is your name?");
var loverName = prompt("What is his/her name?");
var loveScore = Math.floor(Math.random() * 100 + 1);
alert(myName+" ♥ "+loverName+" Love Score is..."+loveScore+"!!!");
```
---
## include-name.js
```javascript
```javascript
var guestList = ["Angela", "John", "Paul", "Sean", "Christopher", "Jane"];
var yourName = prompt("What is your name?");
if(guestList.includes(yourName) === true) {
    alert("you are guest");
}
if(guestList.includes(yourName) === false) {
    alert("you are not guest");
}
```
---
## whos-buying-lunch.js
```javascript
 var member = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(member);
function whosPaying(names) { 
    var memberCount = names.length;
    var randomPersonPos = Math.floor(Math.random() * memberCount) + 1;
    var randomPerson = names[randomPersonPos - 1];
    return (randomPerson+" is going to buy lunch today!");
}
```
---
## fizz-buzz.js
```javascript
var arr = [];
var number = 1;
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
```
---
## beer.js
```javascript
function beer() {
    var count = 99;
    var left = 99;
    var bottleWord = "bottles"
    while(count > 0) {
        left = count - 1;
        if(count === 1) {
            bottleWord = "bottle"
            left = "no more"
            console.log(count+" "+bottleWord+" of beer on the wall, "+count+" "+bottleWord+" of beer. Take one down and pass it around, "+left+" "+bottleWord+" of beer on the wall.");
            console.log(left+" bottles of beer on the wall, "+left+" bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        else {
        console.log(count+" "+bottleWord+" of beer on the wall, "+count+" "+bottleWord+" of beer. Take one down and pass it around, "+left+" "+bottleWord+" of beer on the wall.");
        }
        count--;
    }
}
```
---
## fibonacci-generator.js
```javascript
function fibonacciGenerator(n) {
    var arr = [];
    for(var i = 0 ; i < n ; i++) {
        if(i < 2) {
            arr.push(i);
        }
        else {
            arr.push(arr[i-2] + arr[i-1]);
        }
    }
    return arr;
}
```
---
## include-name.js
```javascript
var guestList = ["Angela", "John", "Paul", "Sean", "Christopher", "Jane"];
var yourName = prompt("What is your name?");
if(guestList.includes(yourName) === true) {
    alert("you are guest");
}
if(guestList.includes(yourName) === false) {
    alert("you are not guest");
}
```
---
## leap-year.js
```javascript
isLeap(1948);
isLeap(1998);
function isLeap(year) {
    
      if(year % 4 === 0 && year % 100 !== 0) {
          return console.log("Leap year.");
      }
      if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
          return console.log("Leap year.");
      }
      else { return console.log("Not leap year."); }
  }
```
---
## live-in-weeks.js
```javascript
lifeInWeeks(56);

function lifeInWeeks(age) {

     var leftAge = 90 - age;
     var months = leftAge * 12;
     var weeks = leftAge * 52;
     var days = leftAge * 365;
     console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.")

  }
```
---
## random-dice.js
```javascript
console.log(Math.floor(Math.random() * 6 + 1));
```
---
## variables.js
```javascript
test();

function test() {
  var a = "3";
  var b = "8";
  var c = 0;

  c = a;
  a = b;
  b = c;

  return console.log("a is "+a+", b is "+b);
}
```
---
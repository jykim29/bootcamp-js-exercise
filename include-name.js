var guestList = ["Angela", "John", "Paul", "Sean", "Christopher", "Jane"];
var yourName = prompt("What is your name?");
if(guestList.includes(yourName) === true) {
    alert("you are guest");
}
if(guestList.includes(yourName) === false) {
    alert("you are not guest");
}
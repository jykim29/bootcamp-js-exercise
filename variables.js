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
/* Output
a is 8, b is 3
*/
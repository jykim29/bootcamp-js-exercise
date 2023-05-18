fibonacciGenerator(10);

function fibonacciGenerator (n) {

      var arr = [];
      
      for(var i = 0 ; i < n ; i++) {
          if(i < 2) {
              arr.push(i);
          }
          else {
              arr.push(arr[i-2] + arr[i-1]);
          }
      }
      return console.log(arr);
  }
  
  /* Output  : [0, 1,  1,  2,  3, 5, 8, 13, 21, 34] */

  
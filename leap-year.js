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


  /* Output 
  Leap year.
  Not leap year.
  */
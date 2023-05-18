lifeInWeeks(56);

function lifeInWeeks(age) {

     var leftAge = 90 - age;
     var months = leftAge * 12;
     var weeks = leftAge * 52;
     var days = leftAge * 365;
     console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.")

  }

/*Output
You have 12410 days, 1768 weeks, and 408 months left.
*/
  
  
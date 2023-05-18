var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

for(var i = 0 ; i < 6 ; i++) {
  whosPaying(names);
}

function whosPaying(names) {
    
      var memberCount = names.length;
      var randomPersonPos = Math.floor(Math.random() * memberCount) + 1;
      var randomPerson = names[randomPersonPos - 1];
      return console.log(randomPerson+" is going to buy lunch today!");
  }

  /* Output
  [Random Listed Person] is going to buy lunch today!
  [Random Listed Person] is going to buy lunch today!
  [Random Listed Person] is going to buy lunch today!
  [Random Listed Person] is going to buy lunch today!
  [Random Listed Person] is going to buy lunch today!
  */
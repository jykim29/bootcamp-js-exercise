beer();

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
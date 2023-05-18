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

/* Output 
Your BMI is 15, so you are underweight.
Your BMI is 20, so you have a normal weight. */
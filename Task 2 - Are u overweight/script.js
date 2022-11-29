let weight = prompt('What\'s your weight in kg?');
let height = prompt('What\'s your height in cm?');
let bmi = weight / Math.pow(height / 100, 2);

// //Without if..else

// alert('Are you overweight? ' 
//         + (bmi >= 25 ? 'You are overweight!'
//         : (bmi <= 18.5 ? 'You are underweight!' 
//         : 'You are normalweight!')));

//With if..else

alert('Are you overweight?');
if(bmi >= 25) {
    alert(`Yes, your weight is up to normal by ${(bmi - 25).toPrecision(4)}`);
}
else if(bmi <= 18.5) {
    alert('You are underweight');
}
else {
    alert('No, you are normalweight');
}
const calculateTips = (val) => val < 20 ? .2 * val : .15 * val;

bills = [11, 20, 47];

tips = [
    calculateTips(bills[0]), 
    calculateTips(bills[1]), 
    calculateTips(bills[2])
];

totalBills = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
]

console.log(bills);
console.log(tips);
console.log(totalBills);
const quart1_1 = [35467, 29842, 38501];
const quart1_2 = [70533, 50121, 33899];
const quart2_1 = [50301, 21984, 19207];
const quart2_2 = [72381, 41562, 29465];

const getAverage = (arr) => (arr[0] + arr[1] + arr[2]) / arr.length;

const printBonus = (arr1, arr2) => {
    const sub1 = getAverage(arr1) / getAverage(arr2);
    const sub2 = getAverage(arr2) / getAverage(arr1);
    return sub1 >= 1.3 ? `Dept 1 will get a bonus of ${((sub1 - 1) * 100).toFixed(2)}%` 
    : sub2 >= 1.3 ? `Dept 2 will get a bonus of ${((sub2 - 1) * 100).toFixed(2)}%` : 'No bonus for depts';
}

console.log(printBonus(quart1_1, quart1_2));
console.log(printBonus(quart2_1, quart2_2));
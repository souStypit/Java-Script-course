const data1 = [49, 51, 63];
const data2 = [31, 29, 43, 58, 52];

const printHumiditiesForecast = (arr) => arr.map((el, i) => `... ${el}% humidity in ${i} days `).join('');

document.body.innerHTML = 
    `
    ${printHumiditiesForecast(data2)}
    `

'use strict'

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

const tips = [], totals = [];

const calcTips = (billsArr, tipsArr, totalsArr) => {
    for(let i = 0; i < bills.length; i++) {
        tipsArr.push(
            billsArr[i] < 20 ? .2 * billsArr[i] : .15 * billsArr[i]
        );
        totalsArr.push(billsArr[i] + tipsArr[i]);
    }
}

const calcSum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const calcAvg = (arr) => {
    return calcSum(arr) / arr.length;
}

calcTips(bills, tips, totals);

const html = `

<div>
    <p>You need to pay <span>${Math.trunc(calcSum(totals))}</span><p>
    <p>Max payment is <span>${Math.max.apply(null, totals)}</span> on ${totals.indexOf(Math.max.apply(null, totals))} bill<p>
</div>

` 

document.body.innerHTML = html;
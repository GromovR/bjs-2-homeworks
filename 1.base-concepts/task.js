"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  

    if (discriminant < 0) {
        return [];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    }
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;


    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    countMonths = parseInt(countMonths);


    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths) || percent < 0 || countMonths < 0) {
        return false;
    }

    const loanBody = amount - contribution;

    const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

    const totalAmount = monthlyPayment * countMonths;

    const roundedTotalAmount = Math.round(totalAmount * 100) / 100;

    return roundedTotalAmount;
}

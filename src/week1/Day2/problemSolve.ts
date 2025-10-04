
/**
 * 
 * @param n مسألة 1 – Factorial

اكتب دالة ترجع ناتج n! (يعني حاصل ضرب كل الأرقام من 1 إلى n).
 * @returns 
 */
function factorial(n:number):number {
    if (n === 0) return 1;
    return n*factorial(n-1)
}
console.log(factorial(5)); // 120

// ////////////////////////////////'
// Find Max Number

function findMaxNum(arr:number[]):number{
    return Math.max(...arr)
}

console.log(findMaxNum([1, 2, 3, 4, 5])); // 5
console.log(findMaxNum([-10, -5, -1])); // -1
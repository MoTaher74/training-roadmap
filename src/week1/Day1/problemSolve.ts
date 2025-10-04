// اكتب function تقلب string (reverse string).

const reverseString=(str:string)=>{
return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("level")); // "level"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// ///////////////////////////////////////////////////////////////

// اكتب function ترجع true لو الكلمة palindrome.
const palindrome=(str:string)=>{
    const reversed=str.split("").reverse().join("");
    return str===reversed;
}
console.log(palindrome("level")); // true
console.log(palindrome("hello")); // false

// ////////////////////////////////////////////

// اكتب function تصفي array وترجع الأعداد الزوجية بس.
function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([10, 15, 20, 25])); // [10, 20]
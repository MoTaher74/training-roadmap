// // check prime number)

// function primeNumber(num:number){
// if(num>1){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }else{
//     return false;
// }
// }
// console.log(primeNumber(13));

function isPrime(num: number) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(13));
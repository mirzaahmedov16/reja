// //CALLBACK functions
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshlliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//      else if(a <= 20) callback(null, list[0]); 
//      else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//   else{
//     setTimeout(function (){
//             callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(88, (err, data) => {
//     if(err) console.log("ERROR:", err)
//         else{
//         console.log("javob:", data);
//         }
// });
// console.log("passed here 1")


// ASYNS functions
// async function maslahatBering(a) {
//    if (typeof a !== "number") throw new Error("insert a number");   
// else if(a <= 20) return list[0];
// else if(a > 20 && a <= 30 ) return list[1];
// else if(a > 30 && a <= 40 ) return list[1];
// else if(a > 40 && a <= 50 ) return list[1];
// else if(a > 50 && a <= 60 ) return list[1];
// else {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list [5]);
//         }, 4000)
//     });
//   }
// }

//  them/catch
// console.log("passed here 0") ;
// maslahatBering(65)
//         .then((data) => {
//             console.log("javob:", data);
//         })
//             .catch((err) => {
//                 console.log("ERROR:", err);
//                 });
//                 console.log("passed here 1");

// async/wait 
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     let javob = await maslahatBering(70);
//     console.log(javob);
//      let javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();






// Task A

// function countletter(letter, word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         if(word[i] === letter){
//             count++;
//         }
//      }
//         return count;
// }

// console.log(countletter("a", 'mirzaahmad'));


// function countnumber(number, numbers) {
//     let count = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] === number){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countnumber(2, [8,6,5,4,2,6,8,5,2,4,8,6,5,4,2,8,6,5,2]));

// B Task
function countDigits(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if( string[i] === "0" ||
            string[i] === "1" ||
            string[i] === "2" ||
            string[i] === "3" ||
            string[i] === "4" ||
            string[i] === "5" ||
            string[i] === "6" ||
            string[i] === "7" ||
            string[i] === "8"||
            string[i] === "9" 
        ){
            count++;
        }
    }
    return count;
}
console.log(countDigits("uoy3hgtb34khtb54lk4j3bntkh54tb2432"));

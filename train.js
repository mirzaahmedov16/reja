//CALLBACK functions
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
// function countDigits(string) {
//     let count = 0;

//     for (let i = 0; i < string.length; i++) {
//         if( string[i] === "0" ||
//             string[i] === "1" ||
//             string[i] === "2" ||
//             string[i] === "3" ||
//             string[i] === "4" ||
//             string[i] === "5" ||
//             string[i] === "6" ||
//             string[i] === "7" ||
//             string[i] === "8"||
//             string[i] === "9"
//         ){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countDigits("uoy3hgtb34khtb54lk4j3bntkh54tb2432"));

// C task

// function chekContent(a, b) {
//     if (a.length !== b.length) {
//         return false;
//     }

//     for (let i = 0; i < a.length; i++) {
//         if (!b.includes(a[i])) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(chekContent("boshlanishihalibuu", "halibuboshlanishi"));;

// D task
// const moment = require("moment");

// class Shop {

//     non;
//     lagmon;
//     cola;

//     constructor(non, lagmon, cola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//     qoldiq() {
//         let vaqt = moment().format("HH:mm");

//         console.log(
//             `Hozir ${vaqt} da ${this.non} ta non ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`
//         );
//     }

//     sotish(mahsulot, miqdor) {
//         let vaqt = moment().format("HH:mm");

//         if (mahsulot == "non") {
//             this.non -= miqdor;
//         }

//         if (mahsulot == "lagmon") {
//             this.lagmon -= miqdor;
//         }

//         if (mahsulot == "cola") {
//             this.cola -= miqdor;
//         }

//         console.log(
//             `Hozir ${vaqt} da ${this.non} ta non ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`
//         );
//     }

//     qabul(mahsulot, miqdor) {
//         let vaqt = moment().format("HH:mm");

//         if (mahsulot == "non") {
//             this.non += miqdor;
//         }

//         if (mahsulot == "lagmon") {
//             this.lagmon += miqdor;
//         }

//         if (mahsulot == "cola") {
//             this.cola += miqdor;
//         }

//         console.log(
//             `Hozir ${vaqt} da ${this.non} ta non ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`
//         );
//     }
// }

// const shop = new Shop (4, 5, 2);

// shop.qoldiq();

// shop.sotish("non", 3);

// shop.qabul("cola", 4 );

// shop.qoldiq()

// F task
// function findDoublers(string) {
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// console.log(findDoublers("hello"));
// console.log(findDoublers("abc"));

// E task
// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(getReverse("TIM olleH "));

// G task

// function getHighestIndex(arr) {
//   let highest = arr[0];
//   let highestIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//       highest = arr[i];
//       highestIndex = i;
//     }
//   }

//   return highestIndex;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));

// H task
// function getPositive(int) {
//   let result = "";

//   for (let i = 0; i < int.length; i++) {
//     if (int[i] > 0) {
//       result += int[i];
//     }
//   }

//   return result;
// }

// console.log(getPositive([3, 45, -12]));

// I task

function majorityElement(arr) {
  let counts = {};

  // 1. Har bir raqamni sanaymiz
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }

  // 2. Eng ko‘p takrorlanganini topamiz
  let max = 0;
  let result;

  for (let key in counts) {
    if (counts[key] > max) {
      max = counts[key];
      result = key;
    }
  }

  return Number(result);
}

console.log(majorityElement([1, 2, 3, 4, 5, 3, 4, 3, 4, 3]));

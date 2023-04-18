//כתבו פונקציה שתחזיר את שני התווים האחרונים של המחרוזת
// const str =  "SeatGeek Israel Rools"

// function last2A(str) {
//     const strLen = str.length
//     let lastStr = str[strLen-2] + str[strLen-1]
//     return lastStr
// }
// console.log(last2A(str))

//כתבו פונקציה שמקבלת מחרוזת ומציגה כל פעם תו אחד מתוך המחרוזת בשורה נפרדת בקונסול. קלטו מחרוזת והריצו את הפונקציה עליה

// function separateStr(){
//     const strFromUser = prompt ("Write something")
//         //let counter = 0
//     for(let i = 0; i < strFromUser.length+1; i++){
//     console.log(strFromUser[i])
//     }}
//     console.log(separateStr())

//כתבו פונקציה המקבלת שני פרמטרים - מחרוזת ותו.הפונקציה סופרת כמה פעמים התו מופיע במחרוזת ומחזירה מספר זה.

// const str = "SeatGeek Israel Rools"
// const sign = "s"

// function howManyTimes(str, sign) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === sign) {
//         count++;
//       }
//     }
//     return count;
//   }
// console.log(howManyTimes(str, sign))

//כתבו פונקציה המקבלת שתי מחרוזות ומחזירה את השילוב של שתיהן, אחת בתוך השנייה.

// const str1 = prompt("What is your first name?")
// const str2 = prompt("What is your last name?")

// function mergeStr(str1, str2){
//     const mergedStr = str1.toString() + str2.toString()
//     console.log(mergedStr)
// }
// console.log(mergeStr(str1, str2))

//

function mergeStrings(arr) {
    let mergedString = '';
    for (let i = 0; i < arr.length; i++) {
      mergedString += arr[i];
    }
    return mergedString;
  }

const strings = ["hello", "world", "!"];
let result = mergeStrings(strings);
console.log(result); // prints "helloworld!"

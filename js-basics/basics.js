// // // console.log('hello world')

// // let myName = 'Yael' //string
// // const myLastName = ' Heiftez'
// // const myAge = 39 //number
// // console.log(myName,myLastName)
// // myName += myLastName
// // console.log(myName)
// // const isMale = false //boolean
// // let isFamle = true //boolean
// // console.log(isFamle)
// // const myKids = 3
// // const mykid1 = 'Yarden'
// // const myKid2 = 'Danielle'
// // const mykid3 = 'Adir'

// // isFamle += false
// // console.log(isFamle)

// // // console.log(myKids)
// // // console.log(mykid1,myKid2,mykid3)
// // // let favoriteFood
// // // favoriteFood = 'Sushi'
// // // console.log(favoriteFood)
// // // const mykid1Age = '9'
// // // const myKid2Age = '6'
// // // const mykid3Age = '2'
// // // console.log(mykid1Age+myKid2Age+mykid3Age)
// // // const mykid1Age1 = 9
// // // const myKid2Age2 = 6
// // // const mykid3Age3 = 2
// // // console.log((mykid1Age1+myKid2Age2+mykid3Age3)/3)
// // // console.log(mykid1Age>myKid2Age2)
// // // console.log(myKid2Age!==mykid3Age3)
// // // console.log(mykid1Age1<=mykid3Age3)

// // // let counter = 0
// // // counter++
// // // console.log(counter)
// // // counter--
// // // console.log(counter)
// // // counter--
// // // console.log(counter)

// // // let myWork = 'I work at SeatGeek '
// // // console.log(myWork)
// // // const workYears = '9 years'
// // // console.log(myWork + workYears)

// // // let myMoney = 150
// // // const mySalary = 18500
// // // myMoney += mySalary
// // // console.log(myMoney)

// // // console.log('B'+'a'+'a'*'a'+'a')

// // // const temp = parseInt(prompt('What is the temp outside'))

// // // if(temp <= 14){
// // //     console.log('It is recommended to wear warm clothing')
// // // } else if(temp >14 && temp <=24){
// // //     console.log('It is recommended to wear light clothing')
// // // } else if(temp > 24 && temp <38){
// // //     console.log('Summer clothe are recommended')
// // // } else {
// // //     alert('Swim suit is recommended')
// // // }

// // const day = prompt('enter todays day')
// // const hour = parseInt(prompt('what is the hour'))

// // if(day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday'){
// //     if(hour >6 && hour <=9){
// //         console.log('Wake up its a beutiful morning')
// //     }
// //     else if (hour >9 && hour <=18){
// //             console.log('It is work time. Have a good one')
// //         }
// //     else if (hour >18 && hour <=20){
// //             console.log('It is family time. Spend some time with your kids and eat dinner')
// //         }
// //     else if (hour >20 && hour <=22){
// //             console.log('It is quality time with your best friend. Make a coffee and share your Today"s happenings')
// //         }
// //     else{
// //             console.log('Sweet dreams')
// //         }
// // }
// //   else if (day === 'Thursday') {
// //     if(hour >=6 && hour <=9){
// //         console.log('Wake up! Happy Thursday')
// //     }
// //     else if (hour >=20 && hour <=22) {
// //             console.log('Pour yourself a glass of wine, play your favorite music and enjoy the weekend!')
// // }} else {
// //     alert('Weekend is here! Relex, take it easy and Spend some time with your family')
// // }

// // // //1//
// // // for(let i=0; i < 10; i++){
// // //     console.log(i)
// // //     console.log('Wake up its a beutiful morning')
// // // }

// // // //2//
// // const num = parseInt(prompt('Enter a number'))

// // if(num => 0){
// // let line = 'Hello'
// // for(let i=0; i < num; i++)

// //     console.log(line)*(num)
// // }

// // // //3//
// // const num = parseInt(prompt('Enter a number'))
// // let sumOfGrade = 0
// // for(let i=0; i < num; i++){
// //     sumOfGrade += parseInt(prompt('Enter you grade in Math'))
// // }
// // console.log(num)
// // console.log(sumOfGrade)
// // const avg = sumOfGrade / num

// // //4//
// // let word = ''
// // for(let i=0; word !== 'stop'; i++){
// //     prompt('Enter any word, if you want this to stop write "stop"')
// //     if(word!=="stop"){
// //         console.log(word)
// //     }
// // }

// two types of functions:
// void: a function that does not return anything
// none-void: a function that returns a value to a variable

// //1//

// function createFullName(firstName, lastName){
//     const yourFullName = firstName + ' ' + lastName
//     return yourFullName
// }

// const firstName = prompt('What is your first name?')
// const lastName = prompt('What is your last name?')
// const fullName = createFullName (firstName, lastName)
// console.log(fullName)

// //2//

// function biggerNumber(num1, num2){
//     if(num1 > num2 && num1 > num3){
//         return num1
//     }
//     if(num2 > num1 && num2 > num3){
//         return num2
//     }
//     else{
//         return num3
//     }
// }

// const getNum1 = parseInt(prompt('Enter a number'))
// const getNum2 = parseInt(prompt('Enter a number'))
// const getNum3 = parseInt(prompt('Enter a number'))
// const biggestNum = biggerNumber(getNum1,getNum2,getNum3)
// console.log(biggestNum)

// //3//

// function checkNumber() {
//   const num = parseInt(prompt("Enter a number"))
//   let numType = ""
//   if (num > 0) {
//     numType = "Positive"
//   } else if (num < 0) {
//     numType = "Negetive"
//   } else {
//     numType = "0"
//   }
//   console.log(numType)
// }

// for (let i = 0; i < 4; i++) {
//   checkNumber()
// }

// //4//

// function isPersonAllowed(yourFullName, yourAge) {
//     if (yourAge > 18) {
//         return yourFullName + " You can enter"
//     }
//     else {
//         return yourFullName + " You cannot enter"
//     }
// }
//  console.log(isPersonAllowed('Yael Heifetz', '39'))

// function whoAreYou() {
//     const fullName = prompt("What is your full name?");
//     const myAge = parseInt(prompt("How old are you?"));
//     alert(isPersonAllowed(fullName, myAge))
// }

// for (let i = 0; i < 2; i++) {
//     whoAreYou()
// }



// 5//

// function checkNumber1() {
//   const num = parseInt(prompt("Enter a number"));
//   let numType = "";
//   if (num % 2 == 0) {
//     numType = "מספר זוגי";
//   } else {
//     numType = "מספר אי זוגי";
//   }
//   console.log(numType);
// }

// for (let i = 0; i < 3; i++) {
//   checkNumber1();
// }


// function whoIsBigger(num1, num2){
//     if(num1 > num2){
//         return num1
//     }
//     else{
//         return num2
//     }
// }

// const num1 = parseInt(prompt("Type a number"))
// const num2 = parseInt(prompt("Type a number"))
// console.log(whoIsBigger(num1, num2))

function countNums(getNum1, getNum2, operator){
    if(operator=== "*"){
        console.log(getNum1*getNum2)
    } else if (operator=== "/"){
        console.log(getNum1/getNum2)
    } else if (operator=== "+"){
        console.log(getNum1+getNum2)
    }
    else{
        console.log('Cannot calculate')
    }
}

countNums(25, 43, "*")

function multiple(getNum1, getNum2){
    console.log(getNum1*getNum2)
}
function plus(getNum1,getNum2){
    console.log(getNum1+getNum2)
}
function divide(getNum1,getNum2){
    console.log(getNum1/getNum2)
}

const fisrtNum = parseInt(prompt("Enter a number for calculation"))
const secondNum = parseInt(prompt("Enter another number"))
const operation = prompt("Enter an operator")

if(operation === "+"){
    plus(fisrtNum, secondNum)
} else if(operation === "*"){
    multiple(fisrtNum,secondNum)
} else if(operation === "/"){
    divide(fisrtNum,secondNum)
} else{
    alert("Cannot calculate")
}


// function sumNumbers(num1, num2){
//     console.log(num1+num2)
// }
// console.log(sumNumbers(10,10))

// function multNumbers(getNum1, getNum2){
//     console.log(getNum1*getNum2)
// }
// console.log(multNumbers(10,10))

// const sign = prompt('Plus (+) or Multiple (*)?')
// function whaToDo() {
    
//     let whatSign = ""
//     if(sign === '+'){
//         whatSign = sumNumbers(num1, num2)
//     }
//     else{
//         whatSign = multNumbers(getNum1, getNum2)
//     }
//     console.log(whatSign)
// }

// console.log(whaToDo())





function last2(str) {
    let lastStr = ""
    for(let i = str.length - 1; i > 0; i-- ){
        lastStr += str[i] + str[i-1]}
console.log(lastStr)
}
console.log(last2("SeatGeek Israel Rools"))
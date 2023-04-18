//1//

function createFullName(firstName, lastName){
    const yourFullName = firstName + ' ' + lastName
    return yourFullName
}

const firstName = prompt('What is your first name?')
const lastName = prompt('What is your last name?')
const fullName = createFullName (firstName, lastName)
console.log(fullName)

//2//

function biggerNumber(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }
    if(num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}

const getNum1 = parseInt(prompt('Enter a number'))
const getNum2 = parseInt(prompt('Enter a number'))
const getNum3 = parseInt(prompt('Enter a number'))
const biggestNum = biggerNumber(getNum1,getNum2,getNum3)
console.log(biggestNum)

//3//

function checkNumber() {
  const num = parseInt(prompt("Enter a number"))
  let numType = ""
  if (num > 0) {
    numType = "Positive"
  } else if (num < 0) {
    numType = "Negetive"
  } else {
    numType = "0"
  }
  console.log(numType)
}

for (let i = 0; i < 4; i++) {
  checkNumber()
}

//4//

function isPersonAllowed(yourFullName, yourAge) {
    if (yourAge > 18) {
        return yourFullName + " You can enter"
    }
    else {
        return yourFullName + " You cannot enter"
    }
}
 console.log(isPersonAllowed('Yael Heifetz', '39'))

function whoAreYou() {
    const fullName = prompt("What is your full name?");
    const myAge = parseInt(prompt("How old are you?"));
    alert(isPersonAllowed(fullName, myAge))
}

for (let i = 0; i < 2; i++) {
    whoAreYou()
}



5//

function checkNumber1() {
  const num = parseInt(prompt("Enter a number"));
  let numType = "";
  if (num % 2 == 0) {
    numType = "מספר זוגי";
  } else {
    numType = "מספר אי זוגי";
  }
  console.log(numType);
}

for (let i = 0; i < 3; i++) {
  checkNumber1();
}

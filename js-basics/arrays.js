// כתבו פונקציה היוצרת מערך שמספר התאים בו נקבע ע״י קלט מהמשתמש והציגו מערך זה. השתמשו בפונקציה בתוכנית
// function createArray(cells) {
//     const arr = []
//     for (let i=0; i < cells; i++) {
//         arr.push(null)
//     }
//     console.log(arr)
// }

// const newArr = createArray(prompt("How many cells do you want to create?"))
// console.log(newArr)

// כתבו פונקציה דאבל המקבלת מערך, יוצרת מערך כפול ומחזירה את המערך הכפול. השתמשו בפונקציה בתוכנית
// function doubled(arr){
    
//     const doubleArr = []
//     for (let i=0; i < arr.length; i++) {
//         doubleArr.push(arr[i])
//         doubleArr.push(arr[i])
//     }
//     console.log(doubleArr)
// }

// const array = ["I", "love", "Purim"]
// console.log(doubled(array))

// כתבו פונקציה המקבלת מערך ומחזירה את המערך בסדר הפוך - ללא שימוש בפונקציית ריברס. השתמשו בפונקציה בתוכנית
// function reverseArr(arr){
    
//     const reversedArr = []
//     for (let i= arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i])
//     }
//          console.log(reversedArr) 
// }

// const array = ["Roger", "Rabbit", "Loves", "Jessica"]
// const reversedArr = reverseArr(array)
// console.log(reversedArr)

//כתבו פונקציה הבונה מערך עם 10 תאים כך שבכל תא ישנו המספר העוקב של התא הקודם. ערך התא הראשון ייקבע ע"י קלט מהמשתמש. לסיום הציגו את המערך. השתמשו בפונקציה בתוכנית
// function createNewArray() {

//     const firstValue = parseInt(prompt("choose a number"))
//     const followedArr = [firstValue]
//     for (let i=1; i < 10; i++) {
//         followedArr.push(followedArr[i-1] + 1)
//     }
//     console.log(followedArr)
// }

// const arr = createNewArray()
// console.log(arr)

//כתבו פונקציה הקולטת מהמשתמש פרטי 3 כלבים (מסוג אובייקט) במערך. בכל תא במערך ישמר כלב עם צבע עיניים, משקל וגיל.
//בסיום הציגו את המערת והשתמשו בפונקציה בתוכנית

// function threeDogs() {

//     const arr= []
    
//     for (let i=0; i<3; i++){
//         const dogEyeColor = prompt("Choose a color for the dog eyes")
//         const dogAge = prompt("Choose the dog age")
//         const dogWeight = prompt("Choose the dog weight")
//         const dog = {
//             eyeColor: (dogEyeColor),
//             weight: (dogWeight), 
//             age: (dogAge)
//         }
//     arr[i] = (dog)
// }
//     console.log(arr)
// }
//     console.log(threeDogs())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


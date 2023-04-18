//הגדירו אובייקט שייצג חתול בשם cat, 
//ויכיל תכונות (properties) ומתודות (methods) המתאימות לחתולים. 
//(לדוגמא - color, name, sayMewo...)

// const cat = {
//     name: 'Mrs. Whiskerson',
//     nickname: 'Inside out',
//     color: 'Grey',
//     race: 'Sphynx',
//     sayMewo: function(){
//         console.log('Mewo')
//     }
// }

// console.log(cat)

//בקשו מהמשתמש להכניס תכונה נוספת לחתול, בקשו ממנו ערך מתאים, הוסיפו את התכונה לאובייקט הקיים והציגו את האובייקט החדש

// cat.abilities = prompt ("Write an ability for a cat")
// console.log(cat)

//כתבו פונקציה שמקבלת חתול (אובייקט) ושם של חתול (מחרוזת) ומחזירה true/false אם זהו שמו של החתול. 


function catsName(cat,catName){
   
    if(cat.name === catName){
        return true
    }
    else {
        return false
    }
}

// const catName = 'Phoebe'
// console.log(catsName(cat,catName))

//כתבו פונקציה שמקבלת שני אובייקטים ומחזירה אובייקט אחד גדול שמכיל את התכונות והערכים של שניהם

// function myDogs(firstDog, secondDog){
    
//     const allOfMyDogs = {}    
    
//     for (const dogName1 in firstDog) {
//         allOfMyDogs[dogName1] = firstDog[dogName1]
//     }
//     for (const dogName2 in secondDog) {
//         allOfMyDogs[dogName2] = secondDog[dogName2]
//     }
//         console.log(allOfMyDogs) 
// }

// const firstDog = {
//     dogName1: `Lucky`,
//     dogRace1: `Great Dane`}
// const secondDog = {
//     dogName2: `Lichi`,
//     dogRace2: `Pinscher mix`}

// const allOfMyDogs = myDogs(firstDog, secondDog)
// console.log(allOfMyDogs)

//צרו 3 חתולים כך שלכל אחד מהם יהיה צבע שונה אותו תקלטו מהמשתמש. 

// const colorfullCats = {
// cat1:{
//     color1: prompt("Choose a color for cat number 1")
// },
// cat2:{
//     color2: prompt("Choose a different color for cat number 2")
// },
// cat3:{
//     color3:prompt("Choose a different color for cat number 3")
// }
// }
// for (let i = 0; i < colorfullCats.lenght; i++) {
//     const threeCats = colorfullCats[i]

//     for (let color in threeCats) {
//         console.log(`${color}: ${threeCats[color]}`)
//     }
//     console.log()
// }
// if(colorfullCats.cat1.color1===colorfullCats.cat2.color2 || colorfullCats.cat1.color1===colorfullCats.cat3.color3 || colorfullCats.cat2.color2===colorfullCats.cat3.color3){
//     console.log("Two cats with the same color is boring")
// } else {
//     console.log()
// }

// console.log(colorfullCats)

//קלטו 3 חתולים עם שמות שונים, לאחר מכן קלטו שם נוסף כלשהו והשתמשו בפונקציה שכתבתם בתשובה 3 כדי להציג את התשובה המתאימה לכל אחד מהם

// const soManyCats = {
//     cat1:{
//         name: prompt("Choose a name for the first cat")
//     },
//     cat2:{
//         name: prompt("Choose a name for the second cat")
//     },
//     cat3:{
//         name: prompt("Choose a name for the third cat")
//     }
// }

// const catName1 = prompt("Choose a name for another cat")

// for (let i = 0; i < soManyCats.lenght; i++) {
//     const cat = soManyCats[i]

//     console.log(catsName(cat,catName1))
// }


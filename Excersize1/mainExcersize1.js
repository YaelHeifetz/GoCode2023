// const temp = parseInt(prompt('What is the temp outside'))

// if(temp <= 14){
//     console.log('It is recommended to wear warm clothing')
// } else if(temp >14 && temp <=24){
//     console.log('It is recommended to wear light clothing')
// } else if(temp > 24 && temp <38){
//     console.log('Summer clothe are recommended')
// } else {
//     alert('Swim suit is recommended')
// }

const day = prompt('enter todays day')
const hour = parseInt(prompt('what is the hour'))

if(day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday'||day ==='Thursday' && hour >="9" && hour <="18") {
    console.log('It is work time. Have a good one')
} else if (day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday'||day ==='Thursday' && hour >="18" && hour <="20") {
    console.log('It is family time. Spend some time with your kids and eat dinner')
} else if (day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday'||day ==='Thursday' && hour >="20" && hour <="22") {
    console.log('It is quality time with your best friend. Make a coffee and share your Today"s happenings')
} else if (day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday'||day ==='Thursday' && hour >="22" && hour <="6") {
    console.log('Sweet dreams')
} else if (day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday'||day ==='Thursday' && hour >="6" && hour <="9") {
    console.log('Wake up it"s a beutiful morning')
} else if (day === 'Thursday' && hour >="6" && hour <="9") {
    console.log('Wake up! Happy Thursday')
} else if (day === 'Thursday' && hour >="20" && hour <="22") {
    console.log('Pour yourself a glass of wine, play your favorite music and enjoy the weekend!')
} else {
    alert('Weekend is here! Relex, take it easy and Spend some time with your family')
}



const day = prompt('enter todays day')
const hour = parseInt(prompt('what is the hour'))

if(day === 'sunday'||day ==='monday'||day ==='tuesday'||day ==='wednesday' && hour >="6" && hour <="9"){
    console.log('Wake up its a beutiful morning')
    if (hour >"9" && hour <="18"){
            console.log('It is work time. Have a good one')} 
    else if (hour >"18" && hour <="20"){
            console.log('It is family time. Spend some time with your kids and eat dinner')}
    else if (hour >"20" && hour <="22"){
            console.log('It is quality time with your best friend. Make a coffee and share your Today"s happenings')}
    else if (hour >="22"){
            console.log('Sweet dreams')}
}
  else if (day === 'Thursday' && hour >="6" && hour <="9") {
    console.log('Wake up! Happy Thursday')
        if (day === 'Thursday' && hour >="20" && hour <="22") {
            console.log('Pour yourself a glass of wine, play your favorite music and enjoy the weekend!')
}} else {
    alert('Weekend is here! Relex, take it easy and Spend some time with your family')
}
type User = {
    readonly _id:string[],
    name:string,
    email:string,
    isActive:boolean,
    creditCard?:number

}
let myUser: User ={
    _id:['1','2'],
    name:"yash",
    email:'yash@gmail.com',
    isActive:true
}
myUser.email = "abc@gmail.com"
// myUser._id = 'aa'
// var ans = myUser._id.push('22')
// console.log(myUser._id)
// function createUser(user:User):User{
//     return {name:'',email:'',isActive:false}
// }
// createUser({name:'',email:'',isActive:false})

type CardNumber = {
    cardNum:string
}
type CardDate = {
    cardDate:number
}
type CardDetails = CardNumber & CardDate & {
    cvv:number
}

function processDetail(card:CardDetails):void{
    console.log('Card Number',card.cardNum);
    console.log('Card Date',card.cardDate);
    console.log('Card Cvv',card.cvv);
}
let UserData:CardDetails = {
    cardNum:'1622',
    cardDate:2001,
    cvv:302
}   
processDetail(UserData)
export {}
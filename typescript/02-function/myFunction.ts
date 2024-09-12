function addTwo(num:number):number{
    return num + 1;
    // return "helo"
}

function addString(str:string){
    return str.toUpperCase();
}

function signUp(name:string,email:string,isPaid:boolean){

}
let and = addTwo(2)
addString("sds")
signUp("yash","yash@gmail.com",false)

//Arrow function
let loginUser = (name:string,email:string,paying:boolean = false) => {

}
loginUser("hello","h@h.com")



//Union type(remaining)
// function getValues(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s:string):string => {
    return ""
}
const hero = ['a','b','c'];
// const hero = [1,23];
hero.map((he:string) => {
    return `Hero is ${he}`
})
hero.map((he):string => {
    return ""
})

function consoleError(str:string):void{
    console.log(str)
    // return 1
}

function handleError(err:string):never{
    throw new Error(err)
}

export {}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 1;
    return "helo";
}
function addString(str) {
    return str.toUpperCase();
}
function signUp(name, email, isPaid) {
}
var and = addTwo(2);
addString("sds");
signUp("yash", "yash@gmail.com", false);
//Arrow function
var loginUser = function (name, email, paying) {
    if (paying === void 0) { paying = false; }
};
loginUser("hello", "h@h.com");





var myUser = {
    _id: ['1', '2'],
    name: "abc",
    email: 'abc@gmail.com',
    isActive: true,
};
Object.defineProperty(myUser,'_id',{
    value:Object.freeze(['1','2']),
    writable:false,
    configurable:false
})
myUser._id.pop();
myUser.email = "abc@gmail.com";
// var ans = myUser._id.push('23');

console.log(myUser._id);
// console.log(ans)
// function createUser(user:User):User{
//     return {name:'',email:'',isActive:false}
// }
// createUser({name:'',email:'',isActive:false})

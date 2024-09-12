"use strict";
// class User {
//     #name:string;
//     private email:string;
//     private readonly city:string = "";
//     constructor(name:string,email:string){
//         this.name = name,
//         this.email = email;
//     }
// }
// const output = new User("public","public@gmail.com");
// output.city = "Rajkot";
class Users {
    constructor(email, id) {
        this.email = email;
        this.id = id;
        this.names = "public";
        this._courseCount = 1;
    }
    get AppleEmail() {
        return `Email:${this.email}`;
    }
    get CourseCount() {
        return this._courseCount;
    }
    set CourseCount(num) {
        if (num <= 1) {
            throw new Error("Course count must be greater than");
        }
        else {
            this._courseCount = num;
        }
    }
}
const res = new Users("public.@gmail.com", 1);
function getWild(wild) {
    console.log(wild.name);
    console.log(wild.age);
    console.log(wild.breed);
    console.log(wild.cvv);
}
let AllAnimal = {
    name: "dog",
    age: 3,
    breed: "Labrador",
    names: "public",
    isWild: true,
    cvv: 123
};
getWild(AllAnimal);
class SubUser extends Users {
    constructor() {
        super(...arguments);
        this.isFamily = false;
    }
    CountingCourseMemeber() {
        this._courseCount = 1;
        console.log('METHOD CALLED');
    }
}
const getData = new SubUser('rrr@gmail.com', 2);
console.log(getData.CountingCourseMemeber());

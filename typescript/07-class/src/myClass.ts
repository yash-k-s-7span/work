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
    readonly names:string = "public";
    protected _courseCount  = 1;
    constructor(
        public email:string,
        public id:number,
    ){}
    get AppleEmail():string{
        return `Email:${this.email}`;
    }
    get CourseCount():number{
        return this._courseCount;
    }
    set CourseCount(num){
        if(num <=1){
            throw new Error("Course count must be greater than");
        }else{
            this._courseCount = num;
        }
    }

}
const res = new Users("public.@gmail.com", 1);



type Animal = {
    name:string,
    age:number,
    breed:string
}
type Wild = {
    names:string,
    isWild:boolean
}
type Mix = Animal & Wild &{
    cvv:number,
};
function getWild(wild:Mix){
    console.log(wild.name)
    console.log(wild.age)
    console.log(wild.breed)
    console.log(wild.cvv)
}
let AllAnimal:Mix = {
    name:"dog",
    age:3,
    breed:"Labrador",
    names:"public",
    isWild:true,
    cvv:123
}
getWild(AllAnimal)


class SubUser extends Users{
    isFamily:boolean = false;
    CountingCourseMemeber(){
        this._courseCount = 1;
        console.log('METHOD CALLED')
    }
}
const getData = new SubUser('rrr@gmail.com',2);
console.log(getData.CountingCourseMemeber());

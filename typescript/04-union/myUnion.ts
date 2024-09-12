var score:string | number = 33;
score = 32;
score = "string";


type User = {
    name:string;
    id:number
}
type Admin = {
    userName:string;
    id:number;
}
let allUser:User | Admin = {name:'aa',id:1};
allUser={userName:'bb',id:2}

getDbId(3)
getDbId("ds")

function getDbId(id:number | string){
    if(typeof id == "string"){
        id.toLowerCase()
    }
}

const data:string[] = ['1'];
const dataOne:number[] = [1];
const mixData:string[] | number[] = [1,2,3]
const mixesData:(string | number | boolean)[] = ["1",1,true]

let tuple: [string,number,boolean];
tuple=['sd',1,false]
type Users = [number,string];
var newUser:Users = [112,"sd"];
if(typeof newUser == "string"){
    

}

newUser.push(2001)
console.log(newUser)

type User1 = {
    id:number,
    name:string
}
function AddUsersData(user:User1):void{
    console.log(user.id)
    console.log(user.name)
}
AddUsersData({id:1,name:"yash solanki"})
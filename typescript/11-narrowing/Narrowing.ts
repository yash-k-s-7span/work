// // function DetectType(val:string | number) {
// //     if(typeof val === 'string'){
// //         return val.toLowerCase()
// //     }
// //     return val + 3;
// // }

// // function printAll(vals:string | string[] | null){
// //  if(vals){
// //     if(typeof vals === 'object'){
// //         for(const v of vals){
// //             console.log(v);
// //         }
// //     }
// //     else if(typeof vals === 'string'){
// //         console.log(vals)
// //     }
// //  }
// // }
// // printAll("yash")
// interface User{
//     name:string,
//     email:string
// }
// interface Admin{
//     name:string,
//     email:string,
//     role:string,
//     isAdmin:boolean
// }
// function printAllData(val:User | Admin){
//     if('isAdmin' in val){
//         return val.isAdmin
//     }
// }
// function InstanceMethod(anim:Date|string){
//     if(anim instanceof Date){
//         console.log('Date',anim.getHours());
//     }else{
//         console.log('String',anim.toUpperCase());
//     }
// }
// const insAns = new Date(2024,9,5)
// InstanceMethod(insAns);
// type Fish = {swim: () => void};
// type Bird = {fly: () => void};

// function isPet(pet:Fish| Bird):pet is Fish{
//     return (pet as Fish).swim === undefined;
// }
// function getFood(pet:Fish|Bird){
//     if(isPet(pet)){
//         pet
//         return "Fish Food"
//     }else{
//         pet
//         return "Bird Food"
//     }
// }


//Discriminated Unions
interface Circle{
    kind:'circle',
    radius:number
}
interface Square{
    kind:'square',
    side:number
}
interface Rectangle{
    kind:'rectangle',
    width:number,
}
type Shape = Circle | Square | Rectangle;
function getTrueShape(shape:Shape){
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius ** 2
    }else{
            return (shape as Square).side ** 2
    }
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number // Added missing property
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side ** 2
        case 'rectangle':
            return shape.width * shape.height // Fixed property access
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

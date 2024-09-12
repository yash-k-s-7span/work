interface User{
    name?:string,
    id:number,
    readonly dbId:number
    // First Method// startTrail:() => string
    startTrail(): string //method return string
    getCoupons(couponName:string):number
}
interface User{
    googleId:number
}

interface Admin extends User{
    role:'HR'|'TL'
}
const hc: Admin = {
    id: 2,
    dbId: 1,
    role:'HR',
    googleId:100,
    // startTrail: function (): string {
    //     throw new Error("Function not implemented.")
    // }
    startTrail:() => {
        return "Started Already";
    },
    getCoupons:(name:"YAASH") => {
        return 10
    }
}
console.log(hc)

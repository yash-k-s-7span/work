// function DetectType(val:string | number) {
//     if(typeof val === 'string'){
//         return val.toLowerCase()
//     }
//     return val + 3;
// }
function printAllData(val) {
    if ('isAdmin' in val) {
        return val.isAdmin;
    }
}
function InstanceMethod(anim) {
    if (anim instanceof Date) {
        console.log('Date', anim.getHours());
    }
    else {
        console.log('String', anim.toUpperCase());
    }
}
var insAns = new Date(2024, 9, 5);
InstanceMethod(insAns);

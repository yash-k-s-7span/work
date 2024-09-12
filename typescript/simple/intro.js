const user = {
    name:'John',
    address:{
        city:'rajkot',
        zipcode:'360002'
    }
}
let city = user?.address?.city || 'not found';
// if(user && user.address && user.address.city){
//     city = user.address.city;
// }else{
//     city = 'Unknown'
// }

console.log('Traditional approach',city);
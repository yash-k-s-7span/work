// const score:Array<number>= [];
// const data:string []=[];
// data.push("1");

// function AddOne(val:number | string):number|string{
//     return val;
// }
// function AddTwo(val:any):any{
//     return val;
// }
// function AddThree<Type>(val:Type):Type{
//     return val;
// }
// function AddFour<T>(val:T):T{
//     return val;
// }

// interface Bottle{
//     id:number;
//     name:string
// }
// AddFour<Bottle>({id:1,name:'1'})
// AddThree("yash")

// function getSomeData <T>(val:Array<T>):T{
//     const num = 1;
//     return val[num];
// }
// const getSomeProducts = <T,>(product:T[]):T => {
//     const nums = 2
//     return product[nums];

// }
// const getLoad = (product:Array<number>[]):number => {
//     return 4;
// }
// const GetLoadData = (product:number[]):number => {
//     return 2;
// } 

interface Database{
    connection:string;
    username:string;
    password:string;
}

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
anotherFunction(1,{connection:"",username:"",password:""})


interface Quiz{
    id:string;
    name:string;
}
interface Course{
    courseName:string;
    author:string;
}
class MyDataCollection<T> {
    public cart:T[] = [];
    addToCart(product:T):void{
        let bucket = this.cart.push(product);
        console.log(bucket)
        console.log(product)
    }
}
const myCart = new MyDataCollection();
myCart.addToCart([11,12,13,14,15])
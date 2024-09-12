// const score:Array<number>= [];
// const data:string []=[];
// data.push("1");
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction(1, { connection: "", username: "", password: "" });
var MyDataCollection = /** @class */ (function () {
    function MyDataCollection() {
        this.cart = [];
    }
    MyDataCollection.prototype.addToCart = function (product) {
        var bucket = this.cart.push(product);
        console.log(bucket);
        console.log(product);
    };
    return MyDataCollection;
}());
var myCart = new MyDataCollection();
myCart.addToCart([11, 12, 13, 14, 15]);

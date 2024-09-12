// class User {
//     #name:string;
//     private email:string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     private readonly city:string = "";
//     constructor(name:string,email:string){
//         this.name = name,
//         this.email = email;
//     }
// }
// const output = new User("public","public@gmail.com");
// output.city = "Rajkot";
var Users = /** @class */ (function () {
    function Users(email, id) {
        this.email = email;
        this.id = id;
        this.names = "public";
        this._courseCount = 1;
    }
    Object.defineProperty(Users.prototype, "AppleEmail", {
        get: function () {
            return "Email:".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "CourseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (num) {
            if (num <= 1) {
                throw new Error("Course count must be greater than");
            }
            else {
                this._courseCount = num;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Users;
}());
var res = new Users("public.@gmail.com", 1);
function getWild(wild) {
    console.log(wild.name);
    console.log(wild.age);
    console.log(wild.breed);
    console.log(wild.cvv);
}
var AllAnimal = {
    name: "dog",
    age: 3,
    breed: "Labrador",
    names: "public",
    isWild: true,
    cvv: 123
};
getWild(AllAnimal);
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = false;
        return _this;
    }
    SubUser.prototype.CountingCourseMemeber = function () {
        this._courseCount = 1;
        console.log('METHOD CALLED');
    };
    return SubUser;
}(Users));
var getData = new SubUser('rrr@gmail.com', 2);
console.log(getData.CountingCourseMemeber());

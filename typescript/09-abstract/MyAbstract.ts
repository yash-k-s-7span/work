abstract class MyAbstract{
    constructor(
        public name:string,
        public age:number
    ){

    }
    abstract getSepia():void
    getReelTime():number{
        return 500;
    }
}
class My extends MyAbstract{
    constructor(
        public name:string,
        public age:number,
        public color:string
    ){
        super(name,age)
    }
    getSepia():void{
        console.log("Calling abtract method")
    }
}
const res = new My("name",1,"color");

interface Camera{
    CameraLens:number;
    Sound:string;
    ZoomEffect:string;

}
interface Performance{
    betterSound():void
}
class SplitMoney implements Camera{
    constructor(
        public CameraLens: number,
        public Sound: string,
        public ZoomEffect: string
    ) { } 
}

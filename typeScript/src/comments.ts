// let printMe : (name:string, number:number) => void = (name:string, age:number)=> void{};


type myFunc = (name:string, age:number) => void

let g : myFunc = function(name:string, age:number) :void {}
let t : myFunc = (name:string, age:number):void => {};

type OptionalFunc = (name:string, age?:number) => void;

let o : OptionalFunc =(name:string, age?:number):void => {};

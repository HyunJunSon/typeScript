// interface IPerson{
//     name: string 
//     age: number
//     etc?: boolean
// }

// import { Agent } from "http";

// let good: IPerson = {name:'son', age:22};
// // let bad1: IPerson = {'son', 33}; 오류
// let good2: IPerson = {name:'min', age:37, etc:true}

// let ai: {
//     name: string
//     age: number
//     etc?: boolean
// } = {name: 'john', age:37, etc:false}
import Chance from "chance";

function printMe(me : {name: string, age: number, etc?: boolean}){
    console.log(
        me.etc ?
        `${me.name}: ${me.age} ${me.etc}` :
        `${me.name}: ${me.age}`
    );
}
const chance = new Chance();
printMe({name:chance.name(), age:chance.age() })
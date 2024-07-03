import * as U from '../utils/makeRandomNumber'
import IPerson from './IPerson';

let MAX_AGE = 100

// export interface IPerson{
//     name: string,
//     age: number
// }

export default class Person implements IPerson{
    constructor(public name: string, public age: number){}
}

function makeRandomNumber(max: number = MAX_AGE): number{
    return Math.ceil((Math.random() * max));
}

export const makePerson = 
(name: string, age: number = U.makeRandomNumber()) => ({name, age});

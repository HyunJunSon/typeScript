export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number=10) :Person =>{
    const person = {name,age}
    return person
}

// console.log(makePerson('Jake'));
// console.log(makePerson('Jane', 33));

export const makePerson2 = (name: string, age: number = 10) : Person => ({name, age})
console.log(makePerson2('mini'))
console.log(makePerson2('max',37))
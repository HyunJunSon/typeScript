let numArray: number[] = [1,2,3]
let strArray: string[] = ['hello', 'world']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name:'son'}, {name:'yang', age:19}]

personArray.forEach(console.log)
// let add = new Function('a','b','return a + b')
// console.log(add(1,2))

const f = (callback : () => void) : void => {}
export type NumbeToNumberFunc = (a: number) => number


// const add2 = (a: number):(b:number) => number => {
//     return (b:number): number => a+b
// }

export const add3 = (a:number) : NumbeToNumberFunc =>{
    const _add : NumbeToNumberFunc = (b: number): number =>{
        return a+b;
    }
    return _add
}
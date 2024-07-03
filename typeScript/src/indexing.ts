const makeObject = (key:any, value:any) => ({[key]: value})

console.log(makeObject('name','Jack'));

type KeyType2 = {
    [key: string]: string
}
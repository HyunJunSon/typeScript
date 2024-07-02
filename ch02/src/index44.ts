interface IPerson4{
    name: string
    age?: number
}

class Person4 implements IPerson4{ // public 을 빼면 에러난다.
    constructor(public name: string, public age?: number){}
}
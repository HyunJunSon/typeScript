export class A{
    value: number = 1
    method: ()=>void = () => console.log(`value: ${this.value}`)
}

export class B{
  constructor(public value: number = 1) {}
  method(): void {
      console.log(`value: ${this.value}`)
  }
}
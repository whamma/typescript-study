{
  let age:number = 1;
  age = 2;

  // primitive 타입일경우 있을수도 있고
  // 없을 수도 있다면 undefined를 optional로 주로 사용
  // Object라면 null이 더 맞으려나?
  function find(): number | undefined {
    return undefined;
  }

  let person: string;
  person = 'jobs';

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 💩

  // never 리턴이 절대 없는 경우
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    // while(true) {
      
    // }
  }

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({name: 'hello'});
  acceptSomeObject({age: 100});
}
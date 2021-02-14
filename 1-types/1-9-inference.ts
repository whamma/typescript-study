{
  // Type Inference
  let text = 'hello';
  // text = 1; => error
  function print(message = '') {
    console.log(message);
  }
  print('hello');
  // print(1); => error

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 3);

  // 원시타입을 제외하고는 왠만하면 정확하게 타입을 명시하는게 좋다.
  // 단, void는 생략 가능
}
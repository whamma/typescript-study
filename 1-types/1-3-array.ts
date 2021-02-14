{
  // Array
  const fruits: string[] = ['🍓', '🍉'];
  const scores: Array<number> = [1, 3, 4];
  // readonly는 string[]만 허용됨
  function printArray(fruits: readonly string[]) {
  }

  // Tuple 💩 가독성이 떨어짐 => interface, type alias, class
  // 동적으로 다른 타입을 쓸때만 유용함(React의 useState같은...)
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123
  const [name, age] = student; // 이렇게 되긴 하지만 그래도 별로임...
}
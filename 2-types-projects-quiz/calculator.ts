/**
 * Let's make a calculator 🧮
 */
type Operator = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(operator:Operator, a:number, b:number): number {
  let result: number = 0;
  switch(operator) {
    case 'add':
      result = a + b;
      break;
    case 'substract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    case 'remainder':
      result = a % b;
      break;
  }
  return result;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

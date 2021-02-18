/**
 * Let's make a game 🕹
 */

const position: Position = {x: 0, y: 0};
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

type Position = {
  x: number;
  y: number;
}

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction) {
  switch(direction) {
    case 'up':
      position.y++;
      return;
    case 'down':
      position.y--;
      return;
    case 'left':
      position.x--;
      return;
    case 'right':
      position.x++;
      return;
  }
}

const row = prompt("qatorlar sonini kiriting: ");
const column = prompt("ustun sonini kiriting: ");

for (let i = 0; i < row; i++) {
    let line = '';
    for (let j = 0; j < column; j++) {
        if (i === 0 || i === row - 1 || j === 0 || j === column - 1 || i === j) {
            line += '⬛';
        } else {
            line += '⬜';
        }
    }
    console.log(line);
}

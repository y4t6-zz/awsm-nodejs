const stdin = process.stdin;
const stdout = process.stdout;

/*
stdout.write('Node.js\n');
stdout.write('Node.js\n');
*/

stdout.write('Hi! What is your name? ');
stdin.on('data', input =>  {
  const name = input.toString().trim(); 
  const reversedName = name.split('').reverse().join('');
  stdout.write(`\n${name}, your name reverse: ${reversedName}`);
  process.exit();
});

process.on('exit', () => stdout.write('\n\nBe happy to learn Node.js\n'));

const fs = require('fs');

/*
fs.writeFile('note.txt', 'Hello, node.js', error => {
  if (error) throw error;

  console.log('File created');
})
fs.appendFile('note.txt', '!!!', error => {
  if (error) throw error;

  console.log('File appended');
})
*/

const filename = getValue('-f');
const content = getValue('-c');

fs.appendFile(filename, content, error => {
  if (error) throw error;

  console.log('File appended');
})

function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > -1) ? process.argv[index + 1] : null;
}



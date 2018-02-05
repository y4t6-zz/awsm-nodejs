const fs = require('fs');

/*
console.log('Reading directory...');
const contents = fs.readdirSync(__dirname);
console.log(contents);
console.log('Finish reading!');
*/
 
console.log('Reading directory...');
fs.readdir(__dirname, (error, contents) => {
  if (error) throw error;

  console.log(contents);
});
console.log('Finish reading!');





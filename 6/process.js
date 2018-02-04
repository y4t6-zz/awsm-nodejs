/*
console.log(process.execPath);
console.log(process.version);
console.log(process.platform);
*/

/*
console.log(process.argv);
const message = process.argv[2];
console.log(message);
*/

/*
const index = process.argv.indexOf('-m');
if(index > -1) {
  const message = process.argv[index + 1];
  console.log(message);
}
*/

function getValue(flag) {
  const index = process.argv.indexOf(flag);
  return (index > -1) ? process.argv[index + 1] : null;
}
const message = getValue('-m') || 'Hello';
const name = getValue('-n') || 'friend';
console.log(`${message}, ${name}`);

const waitTimeout = 1000;
const waitInterval = 10;
let currentTime = 0;
let percent = 0;

process.stdout.write('Loading...');

setInterval(() => {
  currentTime += waitInterval;
  percent = Math.floor(currentTime / waitTimeout * 100);
  print(percent);
}, waitInterval);

setTimeout(() => {
  print(100);
  process.stdout.write('\nDone!\n');
  process.exit();
}, waitTimeout);

function print(percent) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Loading... ${percent}%`);
}

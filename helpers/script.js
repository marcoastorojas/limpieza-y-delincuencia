const chance = require('chance').Chance();
const fs = require('fs');

const stream = fs.createWriteStream('people.txt');

for (let i = 0; i < 20; i++) {
  const name = chance.first();
  const surname = chance.last();
  const age = chance.integer({ min: 18, max: 99 });
  const line = `${name} ${surname} ${age}\n`;
  stream.write(line);
}

stream.end();




const fs = require('fs');
const readLine = require('readline');

const solve = async () =>
{
    const stream = fs.createReadStream('./input.txt');

    const lineIterator = readLine.createInterface(stream);

    let greater = [0, 0, 0];
    let current = 0;

    for await (const line of lineIterator) {
        const value = Number(line.trim());

        if(!value){
            const pos = greater.findIndex(x => x < current);
            if(pos != -1) {
                greater.splice(pos, 0, current);
                greater.pop();
            };
            current = 0;
        }

        current += value;
    }
    console.log(greater.reduce((a,b) => a + b ))
}

solve();
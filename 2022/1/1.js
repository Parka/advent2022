const fs = require('fs');
const readLine = require('readline');

const solve = async () =>
{
    const stream = fs.createReadStream('./input.txt');

    const lineIterator = readLine.createInterface(stream);

    let greater = 0;
    let current = 0;

    for await (const line of lineIterator) {
        const value = Number(line.trim());

        if(!value){
            greater = Math.max(greater, current);
            current = 0;
        }

        current += value;
    }
    console.log(greater)
}

solve();
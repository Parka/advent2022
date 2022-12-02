const fs = require('fs');
const readLine = require('readline');

const PLAYS = {
    X: 1,
    Y: 2,
    Z: 3,
}

const WINS = {
    A: "Y",
    B: "Z",
    C: "X",
}

const TIES = {
    A: "X",
    B: "Y",
    C: "Z",
}

const solve = async () =>
{
    const stream = fs.createReadStream('./input.txt');

    const lineIterator = readLine.createInterface(stream);

    let score = 0;

    for await (const line of lineIterator) {
        const [opponentPlay, myPlay] = line.trim().split(' ');
        score += PLAYS[myPlay];
        if(WINS[opponentPlay] === myPlay) {
            score += 6;
            continue;
        }
        if(TIES[opponentPlay] === myPlay) {
            score += 3;
        }
    }
    console.log(score)
}

solve();
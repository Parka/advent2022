const fs = require('fs');
const readLine = require('readline');

const OUTCOMES = {
    X: 0,
    Y: 3,
    Z: 6,
}

const PLAYS = {
    X: {
        A: 3,
        B: 1,
        C: 2,
    },
    Y: {
        A: 1,
        B: 2,
        C: 3,
    },
    Z: {
        A: 2,
        B: 3,
        C: 1,
    }
}

const solve = async () =>
{
    const stream = fs.createReadStream('./input.txt');

    const lineIterator = readLine.createInterface(stream);

    let score = 0;

    for await (const line of lineIterator) {
        const [opponentPlay, outcome] = line.trim().split(' ');
        score += OUTCOMES[outcome];
        score += PLAYS[outcome][opponentPlay];
    }
    console.log(score)
}

solve();
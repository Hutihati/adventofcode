'use strict';
import { loadInput, results } from '../utils.js';

const input = loadInput('./inputs/2023/1.txt');
const nums = arr => [arr[0], arr[arr.length - 1]];

function part1() {
    const reg = /\d/g;

    return input.reduce((res, l) => {
        const matches = l.match(reg);
        const [first, last] = nums(matches);
        return res + parseInt(first + last, 10);
    }, 0);
}

function part2() {
    const dict = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };
    const reg = new RegExp(`(?=(\\d|${Object.keys(dict).join('|')}))`, 'g');

    return input.reduce((res, l) => {
        const matches = Array.from(l.matchAll(reg), v => v[1]);

        const [firstMatch, lastMatch] = nums(matches);
        const first = dict[firstMatch] ?? firstMatch;
        const last = dict[lastMatch] ?? lastMatch;

        return res + parseInt(first + last, 10);
    }, 0);
}

results(part1, part2);

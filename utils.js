import fs from 'fs';

const start = performance.now();

export function loadInput(path) {
    return fs.readFileSync(path, { encoding: 'utf8', flag: 'rs' }).split('\n');
}

export function results(
    part1 = () => 'Not completed',
    part2 = () => 'Not completed'
) {
    console.log(
        'Part 1:',
        part1(),
        'Part 2:',
        part2(),
        'Time:',
        performance.now() - start,
        'ms'
    );
}

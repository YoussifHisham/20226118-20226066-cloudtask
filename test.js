// test.js - enhanced version
const assert = require('assert');

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Run multiple tests
const tests = [
    { name: 'Sum test', fn: () => assert.strictEqual(sum(1, 2), 3) },
    { name: 'Subtract test', fn: () => assert.strictEqual(subtract(5, 3), 2) },
    { name: 'Multiply test', fn: () => assert.strictEqual(multiply(3, 4), 12) }
];

let passed = 0;
let failed = 0;

tests.forEach(test => {
    try {
        test.fn();
        console.log(`${test.name} passed`);
        passed++;
    } catch (e) {
        console.error(` ${test.name} failed: ${e.message}`);
        failed++;
    }
});

console.log(`\n Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
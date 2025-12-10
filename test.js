// test.js
const assert = require('assert');

// A simple function to test
function sum(a, b) {
    return a + b;
}

// A simple test case
try {
    assert.strictEqual(sum(1, 2), 3);
    console.log("✅ Test Passed: 1 + 2 = 3");
    process.exit(0); // Success exit code
} catch (e) {
    console.error("❌ Test Failed");
    process.exit(1); // Error exit code
}
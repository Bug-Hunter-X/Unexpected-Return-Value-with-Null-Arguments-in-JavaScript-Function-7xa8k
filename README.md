# Unexpected Return Value with Null Arguments in JavaScript Function

This repository demonstrates a potential bug in a JavaScript function where the return value might not always align with expectations when null arguments are passed. The bug is in the way the function handles null values, returning 0 in these scenarios. This might be unintended behavior depending on the application context.

The `bug.js` file shows the original buggy code. The `bugSolution.js` provides a possible solution to mitigate this issue, offering more robust handling of null or undefined parameters.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (browser console, Node.js, etc.). Observe the outputs.
3. Compare with the output of `bugSolution.js` which handles the null parameters in a more controlled way.
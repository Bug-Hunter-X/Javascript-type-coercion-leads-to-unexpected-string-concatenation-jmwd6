# Javascript Type Coercion Bug
This repository demonstrates a common JavaScript bug related to type coercion.  The `foo` function is intended to add two numbers, but due to JavaScript's loose typing, it unexpectedly concatenates strings when provided string arguments.

## Bug Description
The `foo` function uses the `+` operator which performs both addition and string concatenation in Javascript. When numbers and string are mixed,  javascript converts the numbers to string before concatenation. This behavior may not be intuitive, leading to unexpected results.

## How to reproduce
1. Clone this repository.
2. Run the `bug.js` file using a Javascript engine like Node.js (e.g. `node bug.js`).
3. Observe that the output is unexpected when passing strings or mixture of strings and numbers to the function `foo`.

## Solution
The solution involves explicitly checking the type of the inputs and handling them appropriately.  The `bugSolution.js` file demonstrates a fixed version of the function.

## License
MIT
function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Null or undefined arguments are not allowed.'); // Throw an error for null or undefined values
  }
  return a + b;
}

//console.log(foo(null, 5)); //Throws an error
//console.log(foo(5, null)); //Throws an error
console.log(foo(5, 5)); // Output: 10
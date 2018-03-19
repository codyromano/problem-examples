/**
* Multiply two integers without using a multiplication operator.
* Must use recursion.
*/
function multiply(x, y) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return y;
  }
  return y + multiply(x - 1, y);
}

// Examples
console.assert( multiply(2, 5) === 10 );
console.assert( multiply(3, 3) === 9 );
console.assert( multiply(0, 10) === 0 );

function multiplyOptimized(x, y) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return y;
  }
  // Divide by 2 and round
  const halfX = x >> 1;
  const lowerHalf = multiplyOptimized(halfX, y);

  // Check if x is odd
  if (x % 2 === 1) {
    return lowerHalf + lowerHalf + y;
  }

  return lowerHalf + lowerHalf;
}

// Examples
console.assert( multiply(2, 5) === 10 );
console.assert( multiply(3, 3) === 9 );
console.assert( multiply(0, 10) === 0 );

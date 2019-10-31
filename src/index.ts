// Checkout the following branches to get the answers, next test or previous test.
//
// current: recursive
// answer: recursive-answer
// next: 
// previous: for

export function isPalindromeRecursive(test: string): boolean {
  if (test.length < 2) { return true; }

  const doFirstAndLastMatch = test[0] === test[test.length - 1];
  const nextStringTest = test.slice(1, test.length - 1);

  return doFirstAndLastMatch && isPalindromeRecursive(nextStringTest);
}

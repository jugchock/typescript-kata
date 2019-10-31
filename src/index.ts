// Checkout the following branches to get the answers, next test or previous test.
//
// current: for
// answer: for-answer
// next: recursive
// previous: switch


// return {inString} concatenated {times} times
// use a for loop
export function forTest(inString: string, times: number): string {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += inString;
  }

  return result;
}

export function isPalindromeFor(test: string): boolean {
  if (test.length < 2) {
    return true;
  }

  let result = true;
  for (let start = 0, end = test.length - 1; start < end; start++ , end--) {
    if (test[start] !== test[end]) {
      result = false;
      break;
    }
  }

  return result;
}

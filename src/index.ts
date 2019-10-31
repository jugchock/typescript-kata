// Checkout the following branches to get the answers, next test or previous test.
//
// current: if
// answer: if-answer
// next: switch
// previous: add

// return true if input is the string "true", otherwise return false
// use an if statement
export function ifTest(input: string): boolean {
  if (input === 'true') {
    return true;
  }

  return false;
}

// return the string "true" if input is true,
// the string "false" if input is false and
// the string "neither" if input is anything else
// use an if/else statement
export function ifElseTest(input: any): string {
  if (input === true) {
    return 'true';
  } else if (input === false) {
    return 'false';
  } else {
    return 'neither';
  }
}

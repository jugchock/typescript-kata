// Checkout the following branches to get the answers, next test or previous test.
//
// current: switch
// answer: switch-answer
// next: for
// previous: if

// return "bar" if "foo" is passed in, "two" if "one" is passed and "none" otherwise
// use a switch statement
export function switchTest(input: string): string {
  switch (input) {
    case 'foo':
      return 'bar';
    case 'one':
      return 'two';
    default:
      return 'none';
  }
}

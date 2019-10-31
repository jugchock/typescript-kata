// Checkout the following branches to get the answers, next test or previous test.
//
// current: 
// answer: 
// next: 
// previous: 

// return the value passed in
export function returnValue(input: any): any {
  return input;
}

// add the two values passed in
export function add(inputA: number, inputB: number): any {
  return inputA + inputB;
}

// return true if input is the string "true", otherwise return false
// use an if statement
export function ifTest(input: string): boolean {
  if (input === 'true') {
    return true;
  }

  return false;
}

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

export function isPalindromeRecursive(test: string): boolean {
  if (test.length < 2) { return true; }

  const doFirstAndLastMatch = test[0] === test[test.length - 1];
  const nextStringTest = test.slice(1, test.length - 1);

  return doFirstAndLastMatch && isPalindromeRecursive(nextStringTest);
}

// IIFE
(function IIFE() {
  let foo = 'foo';

})();


let FooModel = (function IIFE() {
  let foo = 'foo';

  return function constructor() {
    return Object.create({
      foo: {
        get: function getFoo() {
          return foo;
        },
      },

    });
  }
})

// let myFoo = new FooModel();

export class ClassTest {
  public foo = 'foo';

  public returnFoo() {
    return this.foo;
  }
}

let classTest = new ClassTest();


// class with constructor
export class ConstructorTest {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public returnName() {
    return this.name;
  }
}

let constructorTest = new ConstructorTest('joe');
constructorTest.name = 'not joe';
constructorTest.returnName();


export class PrivatePropertyTest {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public returnName() {
    return this.name;
  }
}

let privatePropertyTest = new PrivatePropertyTest('joe');

Object.create({

});




// class with private method?
// class with private property?


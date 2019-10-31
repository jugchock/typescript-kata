import {
  add
} from './index';

describe('Add two values', () => {
  it('should add two values together', () => {
    expect(add(7, 2)).toBe(9);
    expect(add(-8, 11)).toBe(3);
  });
});

import {
  ifTest,
  ifElseTest
} from './index';

describe('If test', () => {
  it('should return true', () => {
    const result = ifTest('true');
    expect(result).toBe(true);
  });

  it('should return false', () => {
    const result = ifTest('false');
    expect(result).toBe(false);
  });
});

describe('If/else test', () => {
  it('should return "true"', () => {
    const result = ifElseTest(true);
    expect(result).toBe('true');
  });

  it('should return "false"', () => {
    const result = ifElseTest(false);
    expect(result).toBe('false');
  });

  it('should return "neither"', () => {
    expect(ifElseTest(undefined)).toBe('neither');
    expect(ifElseTest(17)).toBe('neither');
    expect(ifElseTest('taco')).toBe('neither');
  });
});

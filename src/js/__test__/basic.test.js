import sum from '../basic';

test('sum test 1+2+3', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('sum test 1', () => {
  const result = sum([1]);

  expect(result).toBe(1);
});

test('sum test 0 values', () => {
  const result = sum([]);

  expect(result).toBe(0);
});

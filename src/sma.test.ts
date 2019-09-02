import sma from './sma';

test('sma', () => {
  const result = sma([1, 2, 3], 3);

  expect(result).toBe(2);
});

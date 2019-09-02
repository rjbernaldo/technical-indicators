import ema from './ema';

test('ema', () => {
  const result = ema([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8);

  expect(result).toBe(11.472327831311471);
});

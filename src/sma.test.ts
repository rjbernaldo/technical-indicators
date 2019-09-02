import sma from './sma';

test('regular', () => {
  const dataSet = [1, 2, 3];
  const result = sma(dataSet, 3);

  expect(result).toBe(2);
});

test('period greater than dataSet length', () => {
  const dataSet = [1, 2, 3];
  const result = sma(dataSet, 4);

  expect(result).toBe(NaN);
});

test('overflowing data set', () => {
  const dataSet = [
    10410,
    10398,
    10399,
    10384.4799991,
    10394.50847478,
    10401,
    10364,
    10388.07693079,
    10437,
    10474,
    10528,
    10519,
    10471,
    10510.05063801,
    10487,
    10559,
    10532.65998619,
    10584,
    10622.86524859,
    10439,
  ];

  const result = sma(dataSet, 10);

  expect(result).toBe(10525.257587279);
});

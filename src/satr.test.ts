import satr from './satr';

test('regular', () => {
  const tickers = [
    { high: 48.7, low: 47.79, close: 48.16 },
    { high: 48.72, low: 48.14, close: 48.61 },
    { high: 48.9, low: 48.39, close: 48.75 },
    { high: 48.87, low: 48.37, close: 48.63 },
    { high: 48.82, low: 48.24, close: 48.74 },
    { high: 49.05, low: 48.64, close: 49.03 },
    { high: 49.2, low: 48.94, close: 49.07 },
    { high: 49.35, low: 48.86, close: 49.32 },
    { high: 49.92, low: 49.5, close: 49.91 },
    { high: 50.19, low: 49.87, close: 50.13 },
    { high: 50.12, low: 49.2, close: 49.53 },
    { high: 49.66, low: 48.9, close: 49.5 },
    { high: 49.88, low: 49.43, close: 49.75 },
    { high: 50.19, low: 49.73, close: 50.03 },
    { high: 50.36, low: 49.26, close: 50.31 },
    { high: 50.57, low: 50.09, close: 50.52 },
    { high: 50.65, low: 50.3, close: 50.41 },
    { high: 50.43, low: 49.21, close: 49.34 },
    { high: 49.63, low: 48.98, close: 49.37 },
    { high: 50.33, low: 49.61, close: 50.23 },
    { high: 50.29, low: 49.2, close: 49.24 },
    { high: 50.17, low: 49.43, close: 49.93 },
    { high: 49.32, low: 48.08, close: 48.43 },
    { high: 48.5, low: 47.64, close: 48.18 },
    { high: 48.32, low: 41.55, close: 46.57 },
    { high: 46.8, low: 44.28, close: 45.41 },
    { high: 47.8, low: 47.31, close: 47.77 },
    { high: 48.39, low: 47.2, close: 47.72 },
    { high: 48.66, low: 47.9, close: 48.62 },
    { high: 48.79, low: 47.73, close: 47.85 },
  ];

  const result = satr(tickers, 14);

  expect(result).toBe(1.6271428571428572);
});

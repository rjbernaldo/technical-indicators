import sma from './sma';

// https://www.investopedia.com/terms/e/ema.asp
export default function(dataSet: Array<number>, period: number): number {
  const emaSet = [];
  const firstIndex = period - 1;
  for (let i = firstIndex; i < dataSet.length; i++) {
    const close = dataSet[i];

    const result = sma(dataSet.slice(0, i + 1), period);

    if (i === firstIndex) {
      emaSet.push(result);
    } else {
      const mult = 2 / (period + 1);
      const prev: number = emaSet[emaSet.length - 1];
      const ema: number = (close - prev) * mult + prev;
      emaSet.push(ema);
    }
  }

  return emaSet[emaSet.length - 1];
}

import { b } from './utils';
import sma from './sma';
import BigNumber from 'bignumber.js';

// https://www.investopedia.com/terms/e/ema.asp
export default function(dataSet: number[], period: number): number {
  const emaSet: BigNumber[] = [];
  const firstIndex = period - 1;
  for (let i = firstIndex; i < dataSet.length; i++) {

    const result = sma(dataSet.slice(0, i + 1), period);

    if (i === firstIndex) {
      emaSet.push(b(result));
    } else {
      const mult = b(2).dividedBy(period + 1);
      const bClose = b(dataSet[i]);
      const bPrev = emaSet[emaSet.length - 1];
      const ema = bClose.minus(bPrev).times(mult).plus(bPrev);
      emaSet.push(ema);
    }
  }

  const final = emaSet[emaSet.length - 1].toString();
  return parseFloat(final);
}

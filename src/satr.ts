import BigNumber from 'bignumber.js'
import { b, n } from './utils';

// https://www.investopedia.com/terms/a/atr.asp
export default function(dataSet: {
  high: number,
  low: number,
  close: number,
}[], period: number): number {
  if (dataSet.length < period) {
    return NaN;
  }
  const reducedDataSet = dataSet.slice(-(period+1));
  const trSet: BigNumber[] = [];
  for (let i = 0; i < reducedDataSet.length; i++) {
    const ticker = reducedDataSet[i];
    const prevTicker = reducedDataSet[i - 1];
    const bHigh = b(ticker.high);
    const bLow = b(ticker.low);
    if (!prevTicker) {
      trSet.push(bHigh.minus(bLow));
    } else {
      const first = n(bHigh.minus(bLow));
      const second = Math.abs(n(bHigh.minus(prevTicker.close)));
      const third = Math.abs(n(bLow.minus(prevTicker.close)));
      const tr = Math.max(
        first,
        isNaN(second) ? 0 : second,
        isNaN(third) ? 0 : third,
      );
      trSet.push(b(tr));
    }
  }

  const satr: BigNumber = trSet
    .slice(-period)
    .reduce(
      (acc: BigNumber, cur: BigNumber) => acc.plus(cur), b(0)
    );

  return n(satr.dividedBy(period))
}

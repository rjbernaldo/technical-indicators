import BigNumber from 'bignumber.js';
import { toBig, toNum } from './utils';

// https://www.investopedia.com/terms/a/atr.asp
export default function(
  dataSet: Array<{
    high: number;
    low: number;
    close: number;
  }>,
  period: number,
): number {
  if (dataSet.length < period) {
    return NaN;
  }
  const reducedDataSet = dataSet.slice(-(period + 1));
  const trSet: BigNumber[] = [];
  for (let i = 0; i < reducedDataSet.length; i++) {
    const ticker = reducedDataSet[i];
    const prevTicker = reducedDataSet[i - 1];
    const bHigh = toBig(ticker.high);
    const bLow = toBig(ticker.low);
    if (!prevTicker) {
      trSet.push(bHigh.minus(bLow));
    } else {
      const first = toNum(bHigh.minus(bLow));
      const second = Math.abs(toNum(bHigh.minus(prevTicker.close)));
      const third = Math.abs(toNum(bLow.minus(prevTicker.close)));
      const tr = Math.max(first, isNaN(second) ? 0 : second, isNaN(third) ? 0 : third);
      trSet.push(toBig(tr));
    }
  }

  const satr: BigNumber = trSet.slice(-period).reduce((acc: BigNumber, cur: BigNumber) => acc.plus(cur), toBig(0));

  return toNum(satr.dividedBy(period));
}

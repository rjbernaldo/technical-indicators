import { b } from './utils';

// https://www.investopedia.com/terms/s/sma.asp
export default function(dataSet: number[], period: number): number {
  if (dataSet.length < period) {
    return NaN;
  }
  const bPeriod = b(period);
  const bZero = b(0)
  const bTotal = dataSet.slice(-period).reduce((acc, cur) => {
    const bCur = b(cur);
    return acc.plus(bCur);
  }, bZero);
  const final = bTotal.dividedBy(bPeriod).toString()
  return parseFloat(final);
}

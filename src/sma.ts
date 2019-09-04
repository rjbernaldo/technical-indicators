import { toBig } from './utils';

// https://www.investopedia.com/terms/s/sma.asp
export default function(dataSet: number[], period: number): number {
  if (dataSet.length < period) {
    return NaN;
  }
  const bPeriod = toBig(period);
  const bZero = toBig(0)
  const bTotal = dataSet.slice(-period).reduce((acc, cur) => {
    const bCur = toBig(cur);
    return acc.plus(bCur);
  }, bZero);
  const final = bTotal.dividedBy(bPeriod).toString()
  return parseFloat(final);
}

import BigNumber from 'bignumber.js'

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
  const tr = [];
  for (let i = 0; i < reducedDataSet.length; i++) {
    const ticker = reducedDataSet[i];
    const prevTicker = reducedDataSet[i - 1];
    if (!prevTicker) {
      tr.push(ticker.high - ticker.low);
    } else {
      tr.push(
        Math.max(
          ticker.high - ticker.low,
          ticker.high - prevTicker.close,
          ticker.low - prevTicker.close,
        ),
      );
    }
  }

  const reducedTr = tr.slice(-period);
  const total = reducedTr.reduce((acc, cur) => acc + cur, 0);
  // console.log(tr, reducedTr, reducedTr.length, period)
  return total / period;
}

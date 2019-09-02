// https://www.investopedia.com/terms/s/sma.asp
export default function(dataSet: number[], period: number): number {
  if (dataSet.length < period) {
    return NaN;
  }
  const total = dataSet.slice(-period).reduce((acc, cur) => acc + cur, 0);
  return total / period;
}

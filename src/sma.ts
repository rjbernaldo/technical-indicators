export default function(
  dataSet: number[],
  period: number,
): number {
  const total = dataSet.reduce((acc, cur) => acc + cur, 0);
  return total / period;
}

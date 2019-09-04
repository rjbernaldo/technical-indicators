import BigNumber from 'bignumber.js';

export function toBig(n: number): BigNumber {
  return new BigNumber(n);
}

export function toNum(b: BigNumber): number {
  return parseFloat(b.toFixed());
}
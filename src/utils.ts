import BigNumber from 'bignumber.js';

export function b(n: number): BigNumber {
  return new BigNumber(n);
}
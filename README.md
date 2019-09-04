# `technical-indicators`

A set of technical indicators used at [coinfu.io](https://coinfu.io) which relies heavily on [bignumber.js](https://github.com/MikeMcl/bignumber.js/).

## Installation
```bash
npm i -S @rjbernaldo/technical-indicators
```

```javascript
import { sma } from '@rjbernaldo/technical-indicators';

const result = sma([1,2,3], 3);
// 2
```

## Indicators
- [SMA](https://github.com/rjbernaldo/technical-indicators/blob/master/src/sma.ts)
- [EMA](https://github.com/rjbernaldo/technical-indicators/blob/master/src/ema.ts)
- [ATR](https://github.com/rjbernaldo/technical-indicators/blob/master/src/atr.ts)
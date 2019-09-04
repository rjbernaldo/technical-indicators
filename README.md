# `technical-indicators`

A set of technical indicators used at [coinfu.io](https://coinfu.io) which heavily relies on [bignumber.js](https://github.com/MikeMcl/bignumber.js/).

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
  - [SMA - Simple Moving Average](https://github.com/rjbernaldo/technical-indicators/blob/master/src/sma.ts)
  - [EMA - Exponential Moving Average](https://github.com/rjbernaldo/technical-indicators/blob/master/src/ema.ts)
  - [[WIP] SATR - Simple Average True Range (no weighting)](https://github.com/rjbernaldo/technical-indicators/blob/master/src/satr.ts)


_WIP - Work in progress_

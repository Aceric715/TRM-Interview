import BigNumber from 'bignumber.js';
import {
  ROUND_ETH_VALUE_BY,
  WEI_PER_ETH,
} from '../constants/common';

export const convertWeiToEth = weiValue => {
  const wei = new BigNumber(weiValue);
  const ethValue = wei.dividedBy(WEI_PER_ETH);
  return ethValue.toFixed(ROUND_ETH_VALUE_BY).toString();
};

export const increaseTotalBy = (transactions, pageSize) =>
  transactions?.length === pageSize ? 1 : 0;

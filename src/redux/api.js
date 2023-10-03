import axios from 'axios';

const etherscanApiUrl = 'https://api.etherscan.io/api';

export const getAddressBalance = ({ address }) =>
  axios.get(etherscanApiUrl, {
    params: {
      module: 'account',
      action: 'balance',
      address,
      tag: 'latest',
      apikey: process.env.ETHERSCAN_API_KEY,
    },
  });

export const getAddressTransactions = ({ address, page = 1, pageSize=10 }) =>
  axios.get(etherscanApiUrl, {
    params: {
      module: 'account',
      action: 'txlist',
      address,
      startblock: 0,
      endblock: 99999999,
      page,
      offset: pageSize,
      sort: 'asc',
      apikey: process.env.ETHERSCAN_API_KEY,
    },
  });

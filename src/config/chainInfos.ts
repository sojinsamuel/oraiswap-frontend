import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfo } from '@keplr-wallet/types';
import {
  ORAI_BRIDGE_CHAIN_ID,
  ORAI_BRIDGE_DENOM,
  ORAI_BRIDGE_LCD,
  ORAI_BRIDGE_PREFIX,
  ORAI_BRIDGE_RPC,
  ORAI_BRIDGE_UDENOM
} from './constants';

/**
 * A list of Cosmos chain infos. If we need to add / remove any chains, just directly update this variable.
 */
export const embedChainInfos: ChainInfo[] = [
  {
    rpc: 'https://rpc.orai.io',
    rest: 'https://lcd.orai.io',
    chainId: 'Oraichain',
    chainName: 'Oraichain',
    stakeCurrency: {
      coinDenom: 'ORAI',
      coinMinimalDenom: 'orai',
      coinDecimals: 6,
      coinGeckoId: 'oraichain-token',
      coinImageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
    },
    walletUrl: 'https://api.wallet.orai.io',
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('orai'),
    get currencies() {
      return [this.stakeCurrency];
    },
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    gasPriceStep: {
      low: 0,
      average: 0.000025,
      high: 0.00004
    },
    features: ['stargate', 'ibc-transfer', 'cosmwasm']
  },
  {
    rpc: 'https://rpc.orai.io',
    rest: 'https://lcd.orai.io',
    chainId: 'Oraichain',
    chainName: 'Oraichain',
    stakeCurrency: {
      coinDenom: 'ORAI',
      coinMinimalDenom: 'orai',
      coinDecimals: 6,
      coinGeckoId: 'oraichain-token',
      coinImageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
    },
    walletUrl: 'https://api.wallet.orai.io',
    bip44: {
      coinType: 118
    },
    bech32Config: Bech32Address.defaultBech32Config('orai'),
    get currencies() {
      return [this.stakeCurrency];
    },
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    gasPriceStep: {
      low: 0,
      average: 0.000025,
      high: 0.00004
    },
    features: ['stargate', 'ibc-transfer', 'cosmwasm']
  },
  {
    rpc: ORAI_BRIDGE_RPC,
    rest: ORAI_BRIDGE_LCD,
    chainId: ORAI_BRIDGE_CHAIN_ID,
    chainName: 'OraiBridge',
    stakeCurrency: {
      coinDenom: ORAI_BRIDGE_DENOM,
      coinMinimalDenom: ORAI_BRIDGE_UDENOM,
      coinDecimals: 6,
      coinGeckoId: 'oraichain-token',
      coinImageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
    },
    bip44: {
      coinType: 330
    },
    bech32Config: Bech32Address.defaultBech32Config(ORAI_BRIDGE_PREFIX),
    get currencies() {
      return [this.stakeCurrency];
    },
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    gasPriceStep: {
      low: 0,
      average: 0,
      high: 0
    },
    features: ['stargate', 'ibc-transfer', 'cosmwasm']
  }
];

// console.log(embedChainInfos[2]);
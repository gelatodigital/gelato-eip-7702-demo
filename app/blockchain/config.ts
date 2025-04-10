import { QueryClient } from '@tanstack/react-query'
import { defineChain } from 'viem';
import { http, createConfig } from 'wagmi'

export const queryClient = new QueryClient()
export const abc = defineChain({
  id: 112112,
  network: "abc",
  name: "ABC",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.abc.t.raas.gelato.cloud"],
    },
    default: {
      http: ["https://rpc.abc.t.raas.gelato.cloud"],
    },
  },
  blockExplorers: {
    default: {
      name: "Block Scout",
      url: "https://explorer.abc.t.raas.gelato.cloud/",
    },
  },
  contracts: {},
  testnet: true,
});
export const wagmiConfig = createConfig({
  chains: [abc],
  pollingInterval: 1000,
  transports: {
    [abc.id]: http(),
  },
})

export const client = wagmiConfig.getClient()
export type Client = typeof client
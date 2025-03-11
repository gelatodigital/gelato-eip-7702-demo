import { QueryClient } from '@tanstack/react-query'
import { defineChain } from 'viem';
import { http, createConfig } from 'wagmi'

export const queryClient = new QueryClient()
export const chess = defineChain({
  id: 123420000962,
  network: "chess",
  name: "Chess",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.chess.t.raas.gelato.cloud"],
    },
    default: {
      http: ["https://rpc.chess.t.raas.gelato.cloud"],
    },
  },
  blockExplorers: {
    default: {
      name: "Block Scout",
      url: "https://gelato-eip7702-demo.cloud.blockscout.com/",
    },
  },
  contracts: {},
  testnet: true,
});
export const wagmiConfig = createConfig({
  chains: [chess],
  pollingInterval: 1000,
  transports: {
    [chess.id]: http(),
  },
})

export const client = wagmiConfig.getClient()
export type Client = typeof client
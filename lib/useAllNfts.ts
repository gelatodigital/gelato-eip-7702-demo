import { useQuery } from '@tanstack/react-query'
import { Address } from 'viem'
import { readContract } from 'viem/actions'
import { client } from "@/app/blockchain/config"
import { Ignis, Tyde } from "@/app/blockchain/contracts"

export function useNFTs(userAddress: Address) {
  return useQuery({
    queryKey: ['nfts', userAddress],
    refetchInterval: 1000,
    queryFn: async () => {
      const collections = [
        { contract: Tyde, name: 'NFT1' },
        { contract: Ignis, name: 'NFT2' }
      ]

      let allNFTs = []

      for (const { contract, name } of collections) {
        const balance = await readContract(client, {
          address: contract.address,
          abi: contract.abi,
          functionName: 'balanceOf',
          args: [userAddress],
        })

        for (let tokenId = 1; tokenId <= Number(balance); tokenId++) {
          const tokenURI = await readContract(client, {
            address: contract.address,
            abi: contract.abi,
            functionName: 'tokenURI',
            args: [BigInt(tokenId)],
          })

          const metadata = await fetch(tokenURI).then(res => res.json())

          allNFTs.push({
            id: tokenId,
            collection: name,
            image: metadata.image
          })
        }
      }
      return allNFTs
    }
  })
}

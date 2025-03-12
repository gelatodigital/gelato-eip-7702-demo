import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Confetti from "react-confetti";
import { ExternalLink, Loader2 } from "lucide-react";
import { shortenAddress } from "@/app/blockchain/utils";
import { BaseError, encodeFunctionData } from "viem";
import { Account } from "@/app/blockchain/account";
import { client } from "@/app/blockchain/config";
import { useWaitForTransactionReceipt } from "wagmi";
import { Ignis, Tyde } from "@/app/blockchain/contracts";

interface Guardian {
  id: number;
  name: string;
  image: string;
}

interface SingleListing {
  id: number;
  type: "single";
  guardian: Guardian;
}

interface BundleListing {
  id: number;
  type: "bundle";
  guardians: [Guardian, Guardian];
}

type Listing = SingleListing | BundleListing;

interface AvatarMarketplaceProps {
  isLoggedIn: boolean;
  addLog: (value: string | JSX.Element) => void;
}

const guardians: Guardian[] = [
  {
    id: 1,
    name: "Tyde",
    image: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Feip-7702%2Fstory-6.50b7eb8fe21bc74b8710.png?alt=media&token=d994c9b7-3a6f-4e46-ab15-77039c27bd29",
  },
  {
    id: 2,
    name: "Ignis",
    image: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Feip-7702%2Fstory-7.92adc9badf10d5ee1d7f.png?alt=media&token=ea0f9038-7a67-49f0-ae5a-df8c904a774b",
  },
  {
    id: 3,
    name: "Tempest",
    image: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Feip-7702%2Fstory-8.bbb546d81d8815bb5b28.png?alt=media&token=9ea75f16-41d5-4d0d-9f0f-c54d452989fd",
  },
  {
    id: 4,
    name: "Acre",
    image: "https://firebasestorage.googleapis.com/v0/b/explorer-assets.appspot.com/o/assets%2Feip-7702%2Fstory-9.cb77c3ffaec97418604f.png?alt=media&token=d763e38d-4592-433e-ab82-95a9e38e5203",
  },
];

const listings: Listing[] = [
  {
    id: 1,
    type: "single",
    guardian: guardians[0],
  },
  {
    id: 2,
    type: "bundle",
    guardians: [guardians[1], guardians[2]],
  },
];

export default function AvatarMarketplace({
  isLoggedIn,
  addLog,
}: AvatarMarketplaceProps) {
  const { data: account } = Account.useQuery();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [mintedListing, setMintedListing] = useState<Listing | null>(null);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [transactionHash, setTransactionHash] = useState("");
  const [mintingListingId, setMintingListingId] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const {
    data: mintHash,
    mutate: executeMint,
    error: mintError,
    ...executeQuery
  } = Account.useExecute({
    client,
    addLog,
  });

  const receiptQuery = useWaitForTransactionReceipt({ hash: mintHash });
  const isSuccess = receiptQuery.isSuccess && executeQuery.isSuccess;

  const closeSuccessModal = useCallback(() => {
    setShowSuccessModal(false);
    setMintedListing(null);
    setSelectedListing(null);
    setTransactionHash("");
  }, []);

  const isMinting = mintingListingId !== null;

  const handlePurchase = useCallback(
    (listing: Listing) => {
      if (!isLoggedIn || !account) {
        addLog("User attempted to mint without logging in");
        return;
      }
      setMintingListingId(listing.id);
      setSelectedListing(listing);

      const avatarName =
        listing.type === "single"
          ? listing.guardian.name
          : `${listing.guardians[0].name} + ${listing.guardians[1].name}`;

      addLog(
        `NFT purchase request for "${avatarName}" was initiated by ${shortenAddress(
          account.address
        )}.`
      );

      executeMint({
        account,
        calls: [
          {
            to: Tyde.address,
            data: encodeFunctionData({
              abi: Tyde.abi,
              functionName: "mint",
              args: [account.address],
            }),
          },
          ...(listing.type === "bundle"
            ? [
              {
                to: Ignis.address,
                data: encodeFunctionData({
                  abi: Ignis.abi,
                  functionName: "mint",
                  args: [account.address],
                }),
              },
            ]
            : []),
        ],
      });
    },
    [addLog, isLoggedIn, executeMint, account]
  );

  useEffect(() => {
    if (isMinting && account?.address) {
      addLog(`User ${account.address} is minting...`);
    }
  }, [isMinting, account]);

  useEffect(() => {
    if (mintError) {
      const errorMessage =
        mintError instanceof BaseError
          ? mintError.shortMessage
          : (mintError as Error).message;
      addLog(
        <span className="text-red-400">
          An error has occurred while minting: {errorMessage}
        </span>
      );
      setMintingListingId(null);
    }
  }, [mintError, addLog]);

  useEffect(() => {
    if (isSuccess && transactionHash) {
      addLog(
        <>
          NFT minted successfully.{" "}
          <a
            href={`https://gelato-eip7702-demo.cloud.blockscout.com/tx/${transactionHash}`}
            target="_blank"
            className="underline underline-offset-2 hover:opacity-80"
          >
            Open on explorer.
          </a>
        </>
      );

      setMintedListing(selectedListing);
      setShowSuccessModal(true);
      setMintingListingId(null);
    }
  }, [isSuccess, transactionHash, addLog, selectedListing]);

  useEffect(() => {
    if (mintHash) {
      setTransactionHash(mintHash);
    }
  }, [mintHash]);

  return (
    <div className="p-4 sm:px-8 pb-8 md:pb-0 bg-black w-full max-w-[1200px]">
      <h2 className="text-2xl font-bold mb-8 text-center text-white drop-shadow-md">
        NFTs Marketplace
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="w-full bg-[#101010] p-4 sm:p-8 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="flex flex-col h-full space-y-4">
              {listing.type === "single" ? (
                <div className="flex-1">
                  <div className="w-full h-[250px] sm:h-[325px] mb-4 sm:mb-8 overflow-hidden border-4 border-[#00AEFA] relative bg-black">
                    <img
                      src={listing.guardian.image}
                      alt={listing.guardian.name}
                      className="w-full h-full object-cover bg-black"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 sm:mb-8 text-white text-center">
                    {listing.guardian.name}
                  </h3>
                </div>
              ) : (
                <div className="flex-1">
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-full h-[250px] sm:h-[325px] mb-4 sm:mb-8"
                  >
                    <div className="relative w-full h-full">
                      {listing.guardians.map((guardian, index) => (
                        <div
                          key={guardian.id}
                          className={`
                          h-full
                          overflow-hidden 
                          border-4 
                          border-[#00AEFA] 
                          absolute 
                          w-full
                          transition-all 
                          duration-500
                          bg-black
                          ${
                            isHovered
                              ? index === 0
                                ? "z-10 translate-x-4 translate-y-4"
                                : "z-20 -translate-x-4 -translate-y-4"
                              : index === 0
                                ? "z-20 -translate-x-4 -translate-y-4"
                                : "z-10 translate-x-4 translate-y-4"
                          }
                        `}
                        >
                          <img
                            src={guardian.image}
                            alt={guardian.name}
                            className="w-full h-full object-cover bg-black"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 sm:mb-8 text-white text-center">
                    NFTs Bundle
                    {/*{listing.guardians[0].name} + {listing.guardians[1].name} Bundle*/}
                  </h3>
                </div>
              )}
              <Button
                onClick={() => handlePurchase(listing)}
                disabled={!isLoggedIn || isMinting}
                className="bg-[#00AEFA] text-black hover:bg-[#00AEFA]/80 transition-colors duration-200 font-semibold px-6 py-2 rounded-full shadow-md w-full"
              >
                {mintingListingId === listing.id ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Minting...
                  </>
                ) : listing.type === "single" ? (
                  "Mint NFT"
                ) : (
                  "Mint NFTs"
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={showSuccessModal} onOpenChange={closeSuccessModal}>
        <DialogContent className="bg-black border-2 border-[#00AEFA] z-[99999]">
          <DialogHeader>
            <DialogTitle className="text-[#00AEFA]">
              Congratulations!
            </DialogTitle>
            <DialogDescription className="text-white">
              You have successfully minted{" "}
              {mintedListing?.type === "single"
                ? mintedListing.guardian.name
                : mintedListing?.type === "bundle"
                  ? `${mintedListing.guardians[0].name} and ${mintedListing.guardians[1].name} NFTs`
                  : ""}
              !
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-4">
            {mintedListing?.type === "single" ? (
              <div className="w-full max-w-md aspect-[16/9] relative border-4 border-[#00AEFA] overflow-hidden mb-4">
                <img
                  src={mintedListing.guardian.image}
                  alt={mintedListing.guardian.name}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
                />
              </div>
            ) : mintedListing?.type === "bundle" ? (
              <div className="w-full max-w-md grid grid-cols-2 gap-4 mb-4">
                {mintedListing.guardians.map((guardian) => (
                  <div
                    key={guardian.id}
                    className="aspect-[16/9] relative border-4 border-[#00AEFA] overflow-hidden"
                  >
                    <img
                      src={guardian.image}
                      alt={guardian.name}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <p className="text-white mb-2">Transaction Hash:</p>
            {transactionHash && (
              <a
                href={`https://gelato-eip7702-demo.cloud.blockscout.com/tx/${transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00AEFA] hover:opacity-80 cursor-pointer flex items-center"
              >
                {transactionHash.slice(0, 10)}...{transactionHash.slice(-8)}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {showSuccessModal && (
        <div className="fixed inset-0 z-[60] pointer-events-none">
          <Confetti />
        </div>
      )}
    </div>
  );
}
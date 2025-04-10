export const ExperimentDelegation = {
  address: "0x5B91C8E7a2DEABC623E6Ab34E8c26F27Cc18bC66",
  "abi": [
    {
      "inputs": [],
      "name": "InvalidAuthority",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidSignature",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "KeyExpired",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "KeyNotAuthorized",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Authorised",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Executed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Forwarded",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "callData",
              "type": "bytes"
            }
          ],
          "internalType": "struct ExperimentDelegation.Call[]",
          "name": "calls",
          "type": "tuple[]"
        }
      ],
      "name": "aggregate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        },
        {
          "internalType": "bytes[]",
          "name": "returnData",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            }
          ],
          "internalType": "struct ECDSA.PublicKey",
          "name": "publicKey",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "expiry",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "r",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "s",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "yParity",
              "type": "uint8"
            }
          ],
          "internalType": "struct ECDSA.RecoveredSignature",
          "name": "signature",
          "type": "tuple"
        }
      ],
      "name": "authorize",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "keyIndex",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            }
          ],
          "internalType": "struct ECDSA.PublicKey",
          "name": "publicKey",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "expiry",
          "type": "uint256"
        }
      ],
      "name": "authorize",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "keyIndex",
          "type": "uint32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "calls",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "r",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "s",
              "type": "uint256"
            }
          ],
          "internalType": "struct ECDSA.Signature",
          "name": "signature",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes",
              "name": "authenticatorData",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "clientDataJSON",
              "type": "string"
            },
            {
              "internalType": "uint16",
              "name": "challengeIndex",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "typeIndex",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "userVerificationRequired",
              "type": "bool"
            }
          ],
          "internalType": "struct WebAuthnP256.Metadata",
          "name": "metadata",
          "type": "tuple"
        },
        {
          "internalType": "uint32",
          "name": "keyIndex",
          "type": "uint32"
        }
      ],
      "name": "execute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "keys",
      "outputs": [
        {
          "internalType": "bool",
          "name": "authorized",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "expiry",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "y",
              "type": "uint256"
            }
          ],
          "internalType": "struct ECDSA.PublicKey",
          "name": "publicKey",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "transactions",
          "type": "bytes"
        }
      ],
      "name": "multiSend",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "keyIndex",
          "type": "uint32"
        }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "keyIndex",
          "type": "uint32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "r",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "s",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "yParity",
              "type": "uint8"
            }
          ],
          "internalType": "struct ECDSA.RecoveredSignature",
          "name": "signature",
          "type": "tuple"
        }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
// abi:[
//   {
//     "inputs": [],
//     "name": "InvalidAuthority",
//     "type": "error"
//   },
//   {
//     "inputs": [],
//     "name": "InvalidSignature",
//     "type": "error"
//   },
//   {
//     "inputs": [],
//     "name": "KeyExpired",
//     "type": "error"
//   },
//   {
//     "inputs": [],
//     "name": "KeyNotAuthorized",
//     "type": "error"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "Authorised",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "Executed",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [],
//     "name": "Forwarded",
//     "type": "event"
//   },
//   {
//     "stateMutability": "payable",
//     "type": "fallback"
//   },
//   {
//     "inputs": [
//       {
//         "components": [
//           {
//             "internalType": "address",
//             "name": "target",
//             "type": "address"
//           },
//           {
//             "internalType": "bytes",
//             "name": "callData",
//             "type": "bytes"
//           }
//         ],
//         "internalType": "struct ExperimentDelegation.Call[]",
//         "name": "calls",
//         "type": "tuple[]"
//       }
//     ],
//     "name": "aggregate",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "blockNumber",
//         "type": "uint256"
//       },
//       {
//         "internalType": "bytes[]",
//         "name": "returnData",
//         "type": "bytes[]"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "x",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "y",
//             "type": "uint256"
//           }
//         ],
//         "internalType": "struct ECDSA.PublicKey",
//         "name": "publicKey",
//         "type": "tuple"
//       },
//       {
//         "internalType": "uint256",
//         "name": "expiry",
//         "type": "uint256"
//       },
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "r",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "s",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint8",
//             "name": "yParity",
//             "type": "uint8"
//           }
//         ],
//         "internalType": "struct ECDSA.RecoveredSignature",
//         "name": "signature",
//         "type": "tuple"
//       }
//     ],
//     "name": "authorize",
//     "outputs": [
//       {
//         "internalType": "uint32",
//         "name": "keyIndex",
//         "type": "uint32"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "x",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "y",
//             "type": "uint256"
//           }
//         ],
//         "internalType": "struct ECDSA.PublicKey",
//         "name": "publicKey",
//         "type": "tuple"
//       },
//       {
//         "internalType": "uint256",
//         "name": "expiry",
//         "type": "uint256"
//       }
//     ],
//     "name": "authorize",
//     "outputs": [
//       {
//         "internalType": "uint32",
//         "name": "keyIndex",
//         "type": "uint32"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes",
//         "name": "calls",
//         "type": "bytes"
//       }
//     ],
//     "name": "execute",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes",
//         "name": "calls",
//         "type": "bytes"
//       },
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "r",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "s",
//             "type": "uint256"
//           }
//         ],
//         "internalType": "struct ECDSA.Signature",
//         "name": "signature",
//         "type": "tuple"
//       },
//       {
//         "internalType": "uint32",
//         "name": "keyIndex",
//         "type": "uint32"
//       },
//       {
//         "internalType": "bool",
//         "name": "prehash",
//         "type": "bool"
//       }
//     ],
//     "name": "execute",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes",
//         "name": "calls",
//         "type": "bytes"
//       },
//       {
//         "components": [
//           {
//             "internalType": "address",
//             "name": "target",
//             "type": "address"
//           },
//           {
//             "internalType": "bytes",
//             "name": "callData",
//             "type": "bytes"
//           }
//         ],
//         "internalType": "struct ExperimentDelegation.Call[]",
//         "name": "callas",
//         "type": "tuple[]"
//       },
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "r",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "s",
//             "type": "uint256"
//           }
//         ],
//         "internalType": "struct ECDSA.Signature",
//         "name": "signature",
//         "type": "tuple"
//       },
//       {
//         "components": [
//           {
//             "internalType": "bytes",
//             "name": "authenticatorData",
//             "type": "bytes"
//           },
//           {
//             "internalType": "string",
//             "name": "clientDataJSON",
//             "type": "string"
//           },
//           {
//             "internalType": "uint16",
//             "name": "challengeIndex",
//             "type": "uint16"
//           },
//           {
//             "internalType": "uint16",
//             "name": "typeIndex",
//             "type": "uint16"
//           },
//           {
//             "internalType": "bool",
//             "name": "userVerificationRequired",
//             "type": "bool"
//           }
//         ],
//         "internalType": "struct WebAuthnP256.Metadata",
//         "name": "metadata",
//         "type": "tuple"
//       },
//       {
//         "internalType": "uint32",
//         "name": "keyIndex",
//         "type": "uint32"
//       }
//     ],
//     "name": "execute",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "to",
//         "type": "address"
//       }
//     ],
//     "name": "forward",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "keys",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "authorized",
//         "type": "bool"
//       },
//       {
//         "internalType": "uint256",
//         "name": "expiry",
//         "type": "uint256"
//       },
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "x",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "y",
//             "type": "uint256"
//           }
//         ],
//         "internalType": "struct ECDSA.PublicKey",
//         "name": "publicKey",
//         "type": "tuple"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "bytes",
//         "name": "transactions",
//         "type": "bytes"
//       }
//     ],
//     "name": "multiSend",
//     "outputs": [],
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "nonce",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint32",
//         "name": "keyIndex",
//         "type": "uint32"
//       }
//     ],
//     "name": "revoke",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint32",
//         "name": "keyIndex",
//         "type": "uint32"
//       },
//       {
//         "components": [
//           {
//             "internalType": "uint256",
//             "name": "r",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint256",
//             "name": "s",
//             "type": "uint256"
//           },
//           {
//             "internalType": "uint8",
//             "name": "yParity",
//             "type": "uint8"
//           }
//         ],
//         "internalType": "struct ECDSA.RecoveredSignature",
//         "name": "signature",
//         "type": "tuple"
//       }
//     ],
//     "name": "revoke",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "stateMutability": "payable",
//     "type": "receive"
//   }
// ]
} as const

export const Tyde = {
  abi:[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_toTokenId",
          "type": "uint256"
        }
      ],
      "name": "BatchMetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "MetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "supply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract ERC20Permit",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  address : "0x2BF28B8675E4eE0cD45Bd4150DbaA906CF72c935"
} as const

export const Ignis = {
abi:[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      }
    ],
    "name": "BatchMetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "MetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "supply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract ERC20Permit",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
],
address: '0x9ebdA09DE384650aA51f572ECE839608F4a09e28',
} as const

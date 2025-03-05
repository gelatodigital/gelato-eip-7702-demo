# Anichess Marketplace - EIP-7702 Demo

This demo showcases the implementation of EIP-7702 with Passkey authentication in a Next.js application. The application demonstrates a secure and user-friendly way to interact with blockchain using WebAuthn (Passkeys) for authentication.

## Overview

The application is a demonstration of NFT minting using EIP-7702 and Passkeys, featuring:
- Passkey-based wallet creation and authentication
- EIP-7702 contract delegation
- NFT minting functionality
- Real-time transaction monitoring

## User Journey

### 1. Account Creation and Authentication
- Users start by clicking the "LOGIN" button in the header
- The system generates a new EOA (Externally Owned Account)
- A WebAuthn credential (Passkey) is created for secure authentication
- The Passkey is authorized on the EOA through an EIP-7702 authorization transaction
- Users can track the process through the terminal log at the bottom of the page

### 2. Wallet Interface
- Once logged in, the user's wallet address is displayed in the header
- The address links to the blockchain explorer for transaction history
- The wallet card shows additional account information

### 3. NFT Marketplace
- Authenticated users can view available NFT listings
- Single NFTs and bundles are available for minting
- Real-time minting status updates
- Success confirmation with transaction details

## Technical Implementation

### Account Management (`app/blockchain/account.ts`)

The account system is built around three main operations:

1. **Account Creation**
```typescript
export async function create({ client, addLog }) {
  // Generate new EOA
  // Create WebAuthn credential
  // Authorize WebAuthn key
  // Store account data
}
```

2. **Authorization**
```typescript
export async function authorize({
  account,
  client,
  publicKey,
}) {
  // Sign EIP-7702 authorization
  // Inject ExperimentDelegation contract
  // Enable WebAuthn key
}
```

3. **Transaction Execution**
```typescript
export async function execute({
  account,
  calls,
  client,
  addLog,
}) {
  // Get nonce
  // Sign transaction with WebAuthn
  // Execute contract calls
}
```

### Key Features

- **Secure Key Management**: Uses WebAuthn for secure key generation and storage
- **Smart Contract Integration**: Implements EIP-7702 for contract delegation
- **Transaction Handling**: Supports both single and batch transactions
- **Real-time Feedback**: Provides transaction status and confirmation
- **Error Handling**: Comprehensive error management and user feedback


## Security Features

- Passkey-based authentication
- EIP-7702 compliant contract delegation
- Secure transaction signing
- User verification requirements
- Real-time transaction monitoring

## Network Information

The demo operates on a custom blockchain network with the following features:
- Block explorer: https://chess.cloud.blockscout.com
- Smart contract verification
- Real-time transaction tracking



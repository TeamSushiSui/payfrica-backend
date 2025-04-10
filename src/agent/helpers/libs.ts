/* eslint-disable prettier/prettier */
import { Agent, DepositRequest, DepositStatus, User, WithdrawRequest, WithdrawStatus } from "@prisma/client";


export const mockAgent = (agentData: Partial<Agent>) => {
  return {
    id: "643d1f9e8f1b2c0012345678", // Mock ObjectId
    balance: 0, // Mock balance
    addr: "0x123456789abcdef", // Mock blockchain address
    coinType: "BTC", // Mock coin type
    minWithdrawLimit: 100,
    maxWithdrawLimit: 5000,
    minDepositLimit: 100,
    maxDepositLimit: 5000,
    accountNumber: "1234567890", // Mock account number
    bank: "Mock Bank", // Mock bank name
    name: "John Doe", // Mock agent name
    pendingWithdrawals: [], // Empty array for pending withdrawals
    successfulWithdrawals: [], // Empty array for successful withdrawals
    totalSuccessfulWithdrawals: 0, // Mock total successful withdrawals
    totalPendingWithdrawals: 0, // Mock total pending withdrawals
    totalSuccessfulWithdrawalsAmount: 0, // Mock total successful withdrawals amount
    totalPendingWithdrawalsAmount: 0, // Mock total pending withdrawals amount
    pendingDeposits: [], // Empty array for pending deposits
    successfulDeposits: [], // Empty array for successful deposits
    totalSuccessfulDeposits: 0, // Mock total successful deposits
    totalPendingDeposits: 0, // Mock total pending deposits
    totalSuccessfulDepositsAmount: 0, // Mock total successful deposits amount
    totalPendingDepositsAmount: 0, // Mock total pending deposits amount
    unsuccessfulDeposits: [], // Empty array for unsuccessful deposits
    totalUnsuccessfulDeposits: 1, // Mock total unsuccessful deposits
    createdAt: new Date("2025-01-01T10:00:00Z"), // Mock creation date
    updatedAt: new Date("2025-04-01T15:00:00Z"), // Mock last updated date
    ...agentData,
  }
}

export const mockAccountDetails = (accountDetails: {
  id?: string,
  accountNumber?: string,
  name?: string,
  bank?: string,
  userId?: string 
}) => {
  return {
    id: "643d1f9e8f1b2c0012345679", // Mock ObjectId for the account details
    accountNumber: "9876543210", // Mock account number
    name: "Jane Doe", // Mock account holder name
    bank: "Mock Bank", // Mock bank name
    userId: "643d1f9e8f1b2c0012345678", // Reference to the user's ID
    ...accountDetails
  }
}

export const mockUserData = (userData: Partial<User>, accountDetails = {
  id: "643d1f9e8f1b2c0012345679", // Mock ObjectId for account details
  accountNumber: "1234567890", // Mock account number
  name: "John Doe", // Mock account holder name
  bank: "Mock Bank", // Mock bank name
  userId: "643d1f9e8f1b2c0012345678", // Reference to the user ID
}) => {
  return {
    id: "643d1f9e8f1b2c0012345678", // Mock ObjectId
    address: "0xabcdef1234567890", // Mock blockchain address
    username: "john_doe", // Mock username
    accountDetails,
    withdrawals: [], // Empty array for withdrawal history
    deposits: [], // Empty array for deposit history
    totalWithdrawn: 0, // Default total withdrawn amount
    totalDeposited: 0, // Default total deposited amount
    createdAt: new Date("2025-04-01T10:00:00Z"), // Mock creation date
    updatedAt: new Date("2025-04-01T10:00:00Z"), // Mock last updated date
    ...userData,
  }
}

export const mockWithdrawRequest = (withdrawData: Partial<WithdrawRequest>) => {
  return {
    id: "643d1f9e8f1b2c0012345678",
    requestId: "req123",
    amount: 500.0,
    user: "0xabcdef1234567890",
    agentId: "643d1f9e8f1b2c0012345679", // Use agentId instead of agent
    successfulAgentId: null,
    unsuccessfulAgentId: null,
    coinType: "BTC",
    status: WithdrawStatus.PENDING,
    requestTime: new Date("2025-04-01T10:00:00Z"),
    statusTime: null,
    createdAt: new Date("2025-04-01T10:00:00Z"),
    updatedAt: new Date("2025-04-01T10:00:00Z"),
    ...withdrawData,
  };
}

export const mockDepositRequest = (depositData: Partial<DepositRequest>) => {
  return {
    id: "643d1f9e8f1b2c0012345678", // Mock ObjectId for the deposit request
    requestId: "req123", // Mock original blockchain request ID
    amount: 500.75, // Mock deposit amount
    user: "0xabcdef1234567890", // Mock user's blockchain address
    agentId: "643d1f9e8f1b2c0012345679", // Mock agent ID
    agent: {
      id: "643d1f9e8f1b2c0012345679", // Mock agent ObjectId
      name: "John Doe", // Mock agent name
      coinType: "BTC", // Mock coin type
    },
    successfulAgent: null, // No successful agent yet
    successfulAgentId: null, // No successful agent ID yet
    unsuccessfulAgent: null, // No unsuccessful agent yet
    unsuccessfulAgentId: null, // No unsuccessful agent ID yet
    coinType: "SUI", // Mock coin type
    status: DepositStatus.PENDING, // Default status
    requestTime: new Date("2025-04-01T10:00:00Z"), // Mock request time
    statusTime: null, // No status time yet
    createdAt: new Date("2025-04-01T10:00:00Z"), // Mock creation date
    updatedAt: new Date("2025-04-01T10:00:00Z"), // Mock last updated date
    ...depositData
  }
}

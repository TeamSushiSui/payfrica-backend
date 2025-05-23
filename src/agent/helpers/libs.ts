/* eslint-disable prettier/prettier */
import { Agent, DepositRequest, DepositStatus, User, WithdrawRequest, WithdrawStatus } from "@prisma/client";

export const mockAgent = (agentData: Partial<Agent>) => {
  return {
    id: "643d1f9e8f1b2c0012345678",
    balance: 0,
    addr: "0x123456789abcdef",
    coinType: "BTC",
    minWithdrawLimit: 100,
    maxWithdrawLimit: 5000,
    minDepositLimit: 100,
    maxDepositLimit: 5000,
    accountNumber: "1234567890",
    bank: "Mock Bank",
    name: "John Doe",
    pendingWithdrawals: [],
    successfulWithdrawals: [],
    totalSuccessfulWithdrawals: 0,
    totalPendingWithdrawals: 0,
    totalSuccessfulWithdrawalsAmount: 0,
    totalPendingWithdrawalsAmount: 0,
    pendingDeposits: [],
    successfulDeposits: [],
    totalSuccessfulDeposits: 0,
    totalPendingDeposits: 0,
    totalSuccessfulDepositsAmount: 0,
    totalPendingDepositsAmount: 0,
    unsuccessfulDeposits: [],
    totalUnsuccessfulDeposits: 1,
    createdAt: new Date("2025-01-01T10:00:00Z"),
    updatedAt: new Date("2025-04-01T15:00:00Z"),
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
    id: "643d1f9e8f1b2c0012345679",
    accountNumber: "9876543210",
    name: "Jane Doe",
    bank: "Mock Bank",
    userId: "643d1f9e8f1b2c0012345678",
    ...accountDetails
  }
}

export const mockUserData = (userData: Partial<User>, accountDetails = {
  id: "643d1f9e8f1b2c0012345679",
  accountNumber: "1234567890",
  name: "John Doe",
  bank: "Mock Bank",
  userId: "643d1f9e8f1b2c0012345678",
}) => {
  return {
    id: "643d1f9e8f1b2c0012345678",
    address: "0xabcdef1234567890",
    username: "john_doe",
    accountDetails,
    withdrawals: [],
    deposits: [],
    totalWithdrawn: 0,
    totalDeposited: 0,
    createdAt: new Date("2025-04-01T10:00:00Z"),
    updatedAt: new Date("2025-04-01T10:00:00Z"),
    ...userData,
  }
}

export const mockWithdrawRequest = (withdrawData: Partial<WithdrawRequest>) => {
  return {
    id: "643d1f9e8f1b2c0012345678",
    requestId: "req123",
    amount: 500.0,
    user: "0xabcdef1234567890",
    agentId: "643d1f9e8f1b2c0012345679",
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
    id: "643d1f9e8f1b2c0012345678",
    requestId: "req123",
    amount: 500.75,
    user: "0xabcdef1234567890",
    agentId: "643d1f9e8f1b2c0012345679",
    agent: {
      id: "643d1f9e8f1b2c0012345679",
      name: "John Doe",
      coinType: "BTC",
    },
    successfulAgent: null,
    successfulAgentId: null,
    unsuccessfulAgent: null,
    unsuccessfulAgentId: null,
    coinType: "SUI",
    status: DepositStatus.PENDING,
    requestTime: new Date("2025-04-01T10:00:00Z"),
    statusTime: null,
    createdAt: new Date("2025-04-01T10:00:00Z"),
    updatedAt: new Date("2025-04-01T10:00:00Z"),
    ...depositData
  }
}

import { Network } from "sui-utils";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
	RPC_URL: (process.env.RPC_URL as string) || 'https://fullnode.testnet.sui.io',
    PACKAGE_ID: "0x07b9682e0b7705b3bda433366a2330b06352a551edb9b0e164c0cdc4ec3d6f92",
	PAYF_RES_ID: "0x2c48df5380e2b4ae85a1115cdff64a05b09f593f723ab4de555602a40abd9114"
};
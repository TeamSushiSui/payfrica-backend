import { Network } from "sui-utils";
import { SuinsClient } from '@mysten/suins';
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
	RPC_URL: (process.env.RPC_URL as string) || 'https://fullnode.testnet.sui.io',
    PACKAGE_ID: "0x85ac1897861a59e3419b97e0c376393782d28ecaf1abd8233bbfe49084a6c782",
	PAYF_RES_ID: "0x07285902f250fa1e4904fa7cdcd3ba851cd95fe223d08d0338098e9aba323032"
};

const rpcUrl = getFullnodeUrl(CONFIG.NETWORK);
export const client = new SuiClient({ url: rpcUrl });

export const suinsClient = new SuinsClient({
	client,
	network: CONFIG.NETWORK,
});
import { Network } from "sui-utils";
import { SuinsClient } from '@mysten/suins';
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
	RPC_URL: (process.env.RPC_URL as string) || 'https://fullnode.testnet.sui.io',
    PACKAGE_ID: "0x162382f82026bd0ff1277487f1c744f2745adbaf2c36aefc34039225cac72f88",
	PAYF_RES_ID: "0x8f2e3807b69d8448a3631624e43938636c76cdd42808b0487d26f213794c28d4"
};

const rpcUrl = getFullnodeUrl(CONFIG.NETWORK);
export const client = new SuiClient({ url: rpcUrl });

export const suinsClient = new SuinsClient({
	client,
	network: CONFIG.NETWORK,
});
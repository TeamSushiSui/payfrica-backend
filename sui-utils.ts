import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { CONFIG, suinsClient } from './config';
export type Network = 'mainnet' | 'testnet';

export const ACTIVE_NETWORK = (process.env.NETWORK as Network) || 'testnet';

export const getClient = (network: Network) => {
	return new SuiClient({ url: getFullnodeUrl(network) });
};

import axios from 'axios';

export async function fetchMetadata(coinType: string) {
	const response = await axios.post(CONFIG.RPC_URL, {
		jsonrpc: "2.0",
		id: 1,
		method: "suix_getCoinMetadata",
		params: [coinType],
	});
	if (response.data.error) {
		throw new Error(response.data.error.message || 'Unknown RPC error');
	}
	return response.data.result;
}

export async function getNsAddress(name: string): Promise<string | null> {
    return (await suinsClient.getNameRecord(name))?.targetAddress || null;
}
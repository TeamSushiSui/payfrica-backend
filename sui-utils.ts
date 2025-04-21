import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
export type Network = 'mainnet' | 'testnet' | 'devnet' | 'localnet';

export const ACTIVE_NETWORK = (process.env.NETWORK as Network) || 'testnet';

export const getClient = (network: Network) => {
	return new SuiClient({ url: getFullnodeUrl(network) });
};
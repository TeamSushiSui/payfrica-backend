import { Network } from "sui-utils";
import { SuinsClient } from '@mysten/suins';
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";

import { Transaction } from "@mysten/sui/transactions";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
	RPC_URL: (process.env.RPC_URL as string) || 'https://fullnode.testnet.sui.io',
	PACKAGE_ID: "0x35fcdca2bd3d7b3a845ea1e5b614e727698da3af3cd64658ba8ace10fdb73a64",
	PAYF_RES_ID: "0xac80865520f184941b43a6e98efc9af7c305f4a389773b2e80e659417baa85af",
	PAYFRICA_ID: "0xd01adbc71f0cd1dd38d0f9f61e9846f12f2b39e7d5e779e6697b266ea78966e2"
};

const rpcUrl = getFullnodeUrl(CONFIG.NETWORK);
export const client = new SuiClient({ url: rpcUrl });

export const suinsClient = new SuinsClient({
	client,
	network: CONFIG.NETWORK,
});

export async function makeUser(address: string) {
	if (!process.env.PRIVATE_KEY) {
		throw new Error("Missing PRIVATE_KEY in .env file");
	}
	const keypair = Ed25519Keypair.fromSecretKey(process.env.PRIVATE_KEY);

	const tx = new Transaction();
	tx.moveCall({
		target: `${CONFIG.PACKAGE_ID}::payfrica::make_user`,
		arguments: [
			tx.object(CONFIG.PAYFRICA_ID),
			tx.pure.address("0x299997c9cc660a99a12e0b9945d138adcca560facde681e06ed9e078b815962e"),
		],
	});

	try {
		const { objectChanges, balanceChanges } = await client.signAndExecuteTransaction({
			signer: keypair,
			transaction: tx,
			options: {
				showBalanceChanges: true,
				showEvents: true,
				showInput: false,
				showEffects: true,
				showObjectChanges: true,
				showRawInput: false,
			}
		});

		if (objectChanges) {
			// console.log('objectChanges', objectChanges);
			
		}
	} catch (error) {
		// console.log('error', error);
	}
}
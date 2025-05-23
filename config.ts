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
	PACKAGE_ID: "0x5f4babde03d2d69e507bf668ada801f462d8b87fffd9bce517b3b69e247b4c9f",
	PAYF_RES_ID: "0xada62e7c4404c563686f9f7770f35c126a7e133c4c11eaf7db78cf6fa6fabbef",
	PAYFRICA_ID: "0x9a903273f8df1f57360d311ce969fec5d31d22ed61e0f86ce672c25bd4780017"
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
			tx.pure.address(address),
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
			
		}
	} catch (error) {
	}
}
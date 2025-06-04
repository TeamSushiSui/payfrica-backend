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
	PACKAGE_ID: "0x11eda397bdd9faf17100b594188d8a92e54c747de0a537c4fd3944bae2cf0dc8",
	PAYF_RES_ID: "0x8a801999a070624389c7248a70ecb6eee1128e7de9550962ad27e4010ea0f678",
	PAYFRICA_ID: "0xc0068fc8efd6edfeee7e0afc1ed7c8f4028f62fd07067ea81364bd6e00fbf687"
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
			return objectChanges
		}
	} catch (error) {
		return null
	}
}
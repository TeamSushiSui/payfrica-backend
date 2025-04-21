import { Network } from "sui-utils";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
    PACKAGE_ID: "0x920dda82ee13d3a75f7842c7797b034f4824d7fae1649e14044a172fc784ca0d"
};
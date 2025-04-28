import { Network } from "sui-utils";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
    PACKAGE_ID: "0xbba86979fd7e9cd649c5a052879e79e2ac963cb306e1c7301437a8a022821695",
	PAYF_RES_ID: "0xf4fbcdcf4954880575d99b43a4cab568b5fbaf0b9680cafb80b8bc8b0a149b92"
};
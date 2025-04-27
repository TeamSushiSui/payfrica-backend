import { Network } from "sui-utils";

export const CONFIG = {
	POLLING_INTERVAL_MS: 1000,
	DEFAULT_LIMIT: 50,
	NETWORK: (process.env.NETWORK as Network) || 'testnet',
    PACKAGE_ID: "0xdabf458fb814844bc168e91f3a0801abc7acbabc3fa33476594987b421fe845f",
	PAYF_RES_ID: "0xde82c872d2f18491ca63d1b2ab676cc8e93e6b22c30824a542179e39ab9fbabb"
};
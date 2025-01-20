import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
import { foundry, sepolia, mainnet, Chain } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Gluon Solidity",
  description: "Website frontend for interacting with Gluon deployments",
  url: process.env.NEXT_PUBLIC_WEBSITE_URL!,
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const isDevelopment = process.env.NODE_ENV === "development";

const productionChains = [mainnet, sepolia] as const;
const developmentChains = [foundry, sepolia] as const;

const selectedChains = isDevelopment ? developmentChains : productionChains;

export const config = defaultWagmiConfig({
  chains: selectedChains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [sepolia.id]: http(
      `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
    ),
    [foundry.id]: http("http://localhost:8545"),
    [mainnet.id]: http(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
    ),
  },
});

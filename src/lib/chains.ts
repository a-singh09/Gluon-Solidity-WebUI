export interface Chain {
  value: string;
  label: string;
  factoryAddress: `0x${string}`;
  explorerUrl?: string;
}

const isDevelopment = process.env.NODE_ENV === "development";

const productionChains = [
  {
    value: "1",
    label: "Ethereum",
    factoryAddress:
      (process.env.NEXT_PUBLIC_FACTORY_ADDRESS_ETHEREUM as `0x${string}`) ||
      undefined,
    explorerUrl: "https://etherscan.io",
  },
  {
    value: "11155111",
    label: "Sepolia",
    factoryAddress:
      (process.env.NEXT_PUBLIC_FACTORY_ADDRESS_SEPOLIA as `0x${string}`) ||
      undefined,
    explorerUrl: "https://sepolia.etherscan.io",
  },
];

const developmentChains = [
  {
    value: "31337",
    label: "Foundry",
    factoryAddress:
      (process.env.NEXT_PUBLIC_FACTORY_ADDRESS_FOUNDRY as `0x${string}`) ||
      undefined,
  },
  {
    value: "11155111",
    label: "Sepolia",
    factoryAddress:
      (process.env.NEXT_PUBLIC_FACTORY_ADDRESS_SEPOLIA as `0x${string}`) ||
      undefined,
    explorerUrl: "https://sepolia.etherscan.io",
  },
];

export const Chains: Chain[] = isDevelopment
  ? developmentChains
  : productionChains;

export const getExplorerUrl = (chainId: number): string | undefined => {
  const chain = Chains.find((chain) => Number(chain.value) === chainId);
  return chain?.explorerUrl;
};

export const getFactoryAddress = (
  chainId: number,
): `0x${string}` | undefined => {
  return Chains.find((chain) => Number(chain.value) === chainId)
    ?.factoryAddress;
};

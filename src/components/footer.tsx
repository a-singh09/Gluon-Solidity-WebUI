"use client";

import { getExplorerUrl } from "@/lib/chains";
import Link from "next/link";

interface FooterProps {
  chainId: string;
  deploymentAddress: string;
  tokenAddress: `0x${string}` | null;
}

const Footer: React.FC<FooterProps> = ({ chainId, deploymentAddress, tokenAddress }) => {
  const explorerUrl = getExplorerUrl(Number(chainId)); // Fetch the explorer URL based on chainId

  return (
    <footer className="mt-10 p-4 bg-gray-100 dark:bg-neutral-900 text-center rounded-lg shadow-md">
      <div className="flex justify-center space-x-2 mt-1">
        <p className="text-gray-700 dark:text-gray-200">View in the Explorer:</p>
        <Link
          href={`${explorerUrl}/address/${deploymentAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pr-1 text-amber-500"
        >
          Gluon Reactor
        </Link>
        |
        <Link
          href={`${explorerUrl}/token/${tokenAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pr-1 text-amber-500"
        >
          XYZ
        </Link>
        |
        <Link
          href="https://explorer.example.com/XYZN"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-1 text-amber-500"
        >
          XYZN
        </Link>
        |
        <Link
          href="https://explorer.example.com/XYZP"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-1 text-amber-500"
        >
          XYZP
        </Link>
        |
        <Link
          href="https://explorer.example.com/hXYZN"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-1 text-amber-500"
        >
          hXYZN
        </Link>
        |
        <Link
          href="https://explorer.example.com/hXYZP"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-1 text-amber-500"
        >
          hXYZP
        </Link>
      </div>
    </footer>
  );
};

export default Footer; 
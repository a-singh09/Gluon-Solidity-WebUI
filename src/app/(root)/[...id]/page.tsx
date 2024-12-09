import { notFound } from 'next/navigation'
import InteractionClient from './interaction-client';

// Workaround to generate a static path for all deployments for Next.js
export function generateStaticParams() {
    return [
        { id: ['g'] }, // Example static path for a specific chain and address
    ];
}

export default function InteractionsPage({
    params,
}: {
    params: {
        id: string[];
    };
}) {
    const [prefix, chainId, contractAddress] = params.id;
    if (prefix !== 'g') {
        return notFound()
    }
    return <InteractionClient initialChainId={chainId} initialAddress={contractAddress} />;
}

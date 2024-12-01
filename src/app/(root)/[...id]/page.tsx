import InteractionClient from './interaction-client';

// Workaround to generate a static path for all deployments for Next.js
export function generateStaticParams() {
    return [
        { id: ['address'] }, // Single static path for all deployments
    ];
}

export default function InteractionsPage({
    params,
}: {
    params: {
        id: string[];
    };
}) {
    const deploymentAddress = params.id[0];
    return <InteractionClient initialAddress={deploymentAddress} />;
}

"use client"
import { useEffect, useState } from 'react';
import Interaction from "@/components/interaction";

export default function InteractionClient({
    initialId,
}: {
    initialId: string;
}) {
    const [deploymentId, setDeploymentId] = useState<string>(initialId);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setDeploymentId(hash);
        }
    }, []);

    return (
        <div className="w-full h-full">
            <Interaction params={deploymentId}/>
        </div>
    );
} 
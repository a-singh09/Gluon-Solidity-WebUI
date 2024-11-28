"use client"
import { useEffect, useState } from 'react';
import Interaction from "@/components/interaction";

export default function InteractionClient({
    initialAddress,
}: {
    initialAddress: string;
}) {
    const [baseTokenAddress, setbaseTokenAddress] = useState<string>(initialAddress);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setbaseTokenAddress(hash);
        }
    }, []);

    return (
        <div className="w-full h-full">
            <Interaction baseTokenAddress={baseTokenAddress} />
        </div>
    );
} 
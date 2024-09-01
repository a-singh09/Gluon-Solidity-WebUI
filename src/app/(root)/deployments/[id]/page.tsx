"use client"
import { useState } from 'react';
import Interaction from "@/components/interaction";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default async function InteractionsPage({
    params,

}: {
    params: {
        id: string;
    };

}) {
    const deploymentId = params.id;
    const [activeTab, setActiveTab] = useState('fusion');
    return (
        <Tabs defaultValue="fusion" className="w-full h-full p-9 box-border overflow-hidden" onValueChange={setActiveTab}>
            <TabsList className="grid w-44 grid-cols-2">
                <TabsTrigger value="fusion">Fusion</TabsTrigger>
                <TabsTrigger value="fission">Fission</TabsTrigger>
            </TabsList>
            <div className="w-full h-full">
                <Interaction params={deploymentId} activeTab={activeTab} />
            </div>
        </Tabs>
    )
}

import React from 'react';
import { Card, CardContent, CardHeader} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingCard = () => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
            <Skeleton className="h-6 w-1/3" />
        </CardHeader>
        <CardContent className="p-6">
            <Skeleton className="h-4 w-full mb-4" />
            
        </CardContent>
    </Card>
);

const InteractionLoadingSkeleton = () => (
    <div className="w-full h-full p-9 box-border overflow-hidden">
        <div className="grid w-44 grid-cols-2 mb-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-md space-y-4">
                <LoadingCard />
                <div className="flex justify-center">
                    <Skeleton className="h-6 w-6" />
                </div>
                <LoadingCard />
                <div className="flex justify-center">
                    <Skeleton className="h-6 w-6" />
                </div>
                <LoadingCard />
            </div>
        </div>
    </div>
);

export default InteractionLoadingSkeleton;
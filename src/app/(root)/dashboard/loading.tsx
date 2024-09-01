import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StatCardsWrapper = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="h-32 rounded-lg animate-pulse"></div>
        <div className="h-32 rounded-lg animate-pulse"></div>
    </div>
);

const TableWrapper = () => (
    <div className="w-full h-64 rounded-lg animate-pulse"></div>
);

const DashboardPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Overview of key metrics and recent interactions
                </p>
            </header>

            <StatCardsWrapper />

            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-gray-100">
                            Recent Interactions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <TableWrapper />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;

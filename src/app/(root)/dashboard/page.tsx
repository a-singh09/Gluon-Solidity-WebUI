import StatCardsWrapper from '@/components/dashboard-card-wrapper';
// import TableWrapper from '@/components/dashboard-table/table-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Dashboard
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Overview of key metrics and recent interactions
                </p>
            </header>
            <StatCardsWrapper />
            <div className="mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Interactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* <TableWrapper /> */}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import Pagination from '@/components/pagination';
import Link from 'next/link';

// const PAGE_SIZE = 6;

export default async function DeploymentsPage() {

    // const totalPages = Math.floor(count / PAGE_SIZE);

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    All Deployments
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Each Deployment represents a unique community or category where
                    you can find and contribute to various funding projects.
                </p>
            </header>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* {deployments.length !== 0 ? (
                    deployments.map((deployment) => ( */}
                <Card
                    // key={deployment.id}
                    className="hover:shadow-lg transition-shadow duration-300"
                >
                    <CardHeader>
                        <CardTitle>Deploment Name</CardTitle>
                        <CardDescription>
                            Deployment Description
                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                        <Link href={'/deployments/1'}>
                            <Button className="mt-4 w-full">
                                View Deployment
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                {/* ))
                ) : (
                    <div>No deployments found.</div>
                )} */}
            </div>
            {/* {totalPages > 1 && (
                <div className="flex w-full justify-between items-center">
                    <Pagination totalPages={totalPages} />
                </div>
            )} */}
        </div>
    );
}

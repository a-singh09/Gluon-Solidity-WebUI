import { Payment, columns } from "../../../components/deployments-table/columns"
import { DataTable } from "../../../components/deployments-table/data-table"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            name: "Deployment 1",
            base_token: "0x0000000000000000000000000000000000000000",
            tvl: "1000",
            critical_ratio: "1.5",
            target_ratio: "2.0",
        },
        {
            id: "2",
            name: "Deployment 2",
            base_token: "0x0000000000000000000000000000000000000000",
            tvl: "2000",
            critical_ratio: "1.2",
            target_ratio: "1.8",
        },
        // ...
    ]
}

export default async function DemoPage() {
    const data = await getData()

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
            <DataTable columns={columns} data={data} />
        </div>
    )
}

import Coins from 'lucide-react/dist/esm/icons/coins';
import Dock from 'lucide-react/dist/esm/icons/dock';
import Wallet2 from 'lucide-react/dist/esm/icons/wallet-2';
import DollarSignIcon from 'lucide-react/dist/esm/icons/dollar-sign';

import { StatCard } from '@/components/stat-card';

const iconMap = {
    vaults: Wallet2,
    locked: Coins,
    deployments: Dock,
    avg: DollarSignIcon,
};

export default async function CardWrapper() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <StatCard
                title="Vaults"
                icon={<Wallet2 className="h-6 w-6 text-green-500" />}
                value='8'
                description="Total number of vaults"
                className=" h-32 flex items-center"
            />
            <StatCard
                title="Deployments"
                icon={<Dock className="h-6 w-6 text-purple-500" />}
                value='7'
                description="Total number of deployments"
                className=" h-32 flex items-center"
            />
        </div>
    );
}

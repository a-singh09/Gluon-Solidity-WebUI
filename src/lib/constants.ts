import Vault from 'lucide-react/dist/esm/icons/vault';
import CirclePlus from 'lucide-react/dist/esm/icons/circle-plus';
import LayoutDashboard from 'lucide-react/dist/esm/icons/layout-dashboard';
import WalletCards from 'lucide-react/dist/esm/icons/wallet-cards';
import LayersIcon from 'lucide-react/dist/esm/icons/layers';
import TextSearch from 'lucide-react/dist/esm/icons/text-search';

export const routes: Route[] = [
    {
        icon: LayoutDashboard,
        href: '/dashboard',
        label: 'Dashboard',
        options: [],
    },
    {
        icon: LayersIcon,
        label: 'Deployments',
        href: '',
        options: [
            {
                icon: CirclePlus,
                label: 'New Deployment',
                href: '/create/deployment',
            },
            {
                icon: TextSearch,
                label: 'View Deployments',
                href: '/deployments',
            },
        ],
    },
    {
        icon: Vault,
        href: '/stake',
        label: 'Stake',
        options: [],
    },
];

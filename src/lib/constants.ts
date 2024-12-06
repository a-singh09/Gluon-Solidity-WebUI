import Vault from 'lucide-react/dist/esm/icons/vault';
import CirclePlus from 'lucide-react/dist/esm/icons/circle-plus';
import LayoutDashboard from 'lucide-react/dist/esm/icons/layout-dashboard';
import WalletCards from 'lucide-react/dist/esm/icons/wallet-cards';
import LayersIcon from 'lucide-react/dist/esm/icons/layers';
import ActivityIcon from 'lucide-react/dist/esm/icons/activity';

export const routes: Route[] = [
    {
        icon: LayoutDashboard,
        href: '/dashboard',
        label: 'Dashboard',
        options: [],
        protected: false,
    },
    {
        icon: CirclePlus,
        label: 'Create',
        href: '/create/deployment',
        options: [
            {
                icon: Vault,
                label: 'Stakes',
                href: '/create/stake',
            },
            {
                icon: WalletCards,
                label: 'Deployment',
                href: '/create/deployment',
            },
        ],
        protected: true,
    },
    {
        icon: LayersIcon,
        href: '/deployments',
        label: 'Deployments',
        options: [],
        protected: false,
    },
    {
        icon: ActivityIcon,
        href: '/profile',
        label: 'My Activity',
        options: [],
        protected: true,
    },
];

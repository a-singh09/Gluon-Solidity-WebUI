// import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar';

export default async function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen">
            <Navbar />
            <main className="h-full pt-[70px]">{children}</main>
            {/* <Toaster /> */}
        </div>
    );
}

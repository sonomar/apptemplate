import './globals.css';
import type { Metadata } from 'next';
import Header from './(components)/header/header'
import { AuthProvider } from './(components)/authProvider/authProvider'

export const metadata: Metadata = {
    title: 'NextTest',
    description: 'NextTest Landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
            <AuthProvider>
                <Header />
                    {children}
            </AuthProvider>
            </body>
        </html>
    );
}
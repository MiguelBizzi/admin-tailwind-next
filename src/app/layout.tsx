import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bizzi Dashboard",
    description: "Dashboard criado por Miguel Bizzi",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="antialiased">
            <body className={inter.className}>
                <div className="min-h-screen grid grid-cols-app">
                    <Sidebar />

                    <main className="px-4 pb-12 pt-8">{children}</main>
                </div>
            </body>
        </html>
    );
}

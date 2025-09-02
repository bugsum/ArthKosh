'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t py-6 mt-12">
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} ArthKosh. All rights reserved.
                </p>
                <nav className="flex gap-4 text-sm">
                    <Link href="/privacy" className="hover:underline">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Terms
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

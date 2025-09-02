'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
    return (
        <header className="border-b">
            <div className="max-w-screen-xl flex h-16 items-center justify-between">
                {/* Brand */}
                <Link href="/" className="text-xl font-bold">
                    ArthKosh
                </Link>

                {/* Nav links */}
                <nav className="flex items-center gap-6">
                    <Link
                        href="/features"
                        className="text-sm font-medium hover:underline"
                    >
                        Features
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium hover:underline"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium hover:underline"
                    >
                        Contact
                    </Link>

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
}

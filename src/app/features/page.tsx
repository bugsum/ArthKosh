export default function FeaturesPage() {
    return (
        <div className="flex flex-1 flex-col justify-center max-w-screen-xl mx-auto gap-2">
            <div>
                <h1 className="text-6xl font-bold mb-4">Features</h1>
                <p className="text-muted-foreground mb-8">
                    ArthKosh comes packed with everything you need to manage
                    your personal finances effectively.
                </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
                <li className="p-6 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Expense Tracking
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Record your daily expenses and categorize them for easy
                        analysis.
                    </p>
                </li>
                <li className="p-6 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Budget Planning
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Set monthly budgets and get insights when you overspend.
                    </p>
                </li>
                <li className="p-6 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Reports & Charts
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Visualize your spending habits with detailed charts and
                        reports.
                    </p>
                </li>
                <li className="p-6 border rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Secure Cloud Sync
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Access your data anywhere with secure cloud storage.
                    </p>
                </li>
            </ul>
        </div>
    );
}

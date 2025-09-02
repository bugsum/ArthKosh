import { Button } from '@/components/ui/button';

export default function HomePage() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center max-w-screen-xl mx-auto text-center gap-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Take Control of Your Finances
            </h1>
            <p className="text-lg text-muted-foreground">
                ArthKosh helps you track expenses, visualize budgets, and
                achieve your financial goals — all in one secure dashboard.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                    Learn More
                </Button>
            </div>
        </div>
    );
}

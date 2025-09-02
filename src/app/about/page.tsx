export default function AboutPage() {
    return (
        <div className="flex flex-1 flex-col justify-center  gap-2">
            <div className="bg-zinc-600/50 border-[#4b4848] border-2 px-8 py-12 rounded-2xl">
                <h1 className="text-3xl font-bold mb-4">About ArthKosh</h1>
                <p className="text-muted-foreground mb-6">
                    ArthKosh is built with one mission in mind — to empower
                    individuals to take control of their financial lives.
                </p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Our Vision
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            We believe everyone deserves clarity in their
                            finances. With modern tools and simple interfaces,
                            ArthKosh makes money management accessible for all.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Why ArthKosh?
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Unlike complex finance apps, ArthKosh is
                            lightweight, private, and user-friendly, designed
                            specifically for individuals and small households.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

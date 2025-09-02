import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
    return (
        <div className="flex flex-1 flex-col justify-center max-w-screen-xl mx-auto gap-2 ">
            <div className="bg-zinc-700/50 border-zinc-700 border-2 text-center px-6 py-8 rounded-2xl">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-purple-700 text-transparent bg-clip-text">
                    Contact Us
                </h1>
                <p className="text-muted-foreground mb-6">
                    Have questions or feedback? We’d love to hear from you.
                </p>

                <form className="space-y-4 max-w-lg">
                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Textarea placeholder="Your Message" required />
                    <Button
                        type="submit"
                        className="bg-gradient-to-r from-sky-300 to-purple-700 w-full"
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
}

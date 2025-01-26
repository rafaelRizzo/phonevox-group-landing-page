import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Ajuda() {
    return (
        <>
            {/* Section de contato/ ajuda */}
            <section className="max-w-5xl p-5 my-5 mx-auto">
                <div className="flex flex-col border border-purple-700 rounded-3xl bg-purple-700 text-zinc-50 p-5 py-8 font-medium text-xl">

                    <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start">
                        <div className="flex flex-col justify-center mb-5 lg:mb-0 ">
                            <p className="text-purple-100/95">Precisa de mais informações?</p>
                            <p className="text-sm text-purple-300/80 font-light">Entre em contato com um de nossos especialistas para tirar suas dúvidas.</p>
                        </div>
                        <Link href="https://wa.me/551832568300" target="_blank">
                            <Button className="bg-zinc-50 hover:bg-zinc-100 text-zinc-950">Entrar em contato</Button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Main() {
    return (
        <>
            {/* Main section */}
            <main id="home" className="max-w-7xl p-5 my-5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">

                <div className="flex-1 flex flex-col">
                    <div className="grid grid-cols-1">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center lg:text-start">Seu cliente ainda está esperando enquanto você lê isso...</h1>
                        <h2 className="text-muted-foreground text-center lg:text-start">Nós podemos ajudar a resolver isso agora!</h2>
                    </div>

                    <div className="w-full my-4 lg:mt-4">
                        <Link href="https://wa.me/558003533000" target="_blank" >
                            <Button className="w-full lg:max-w-fit bg-primary-purple rounded-lg">Garanta um atendimento imediato ao seu cliente</Button>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 w-full rounded-3xl overflow-hidden mt-4 lg:mt-0">
                    <video
                        className="aspect-auto object-cover w-full min-h-[320px] lg:min-h-[450px] rounded-3xl"
                        loop
                        autoPlay
                        muted
                        playsInline
                        poster="/poster-video.webp" // Adiciona a imagem do poster
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
            </main>
        </>
    );
}
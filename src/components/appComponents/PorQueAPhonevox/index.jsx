import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export default function PorQueAPhonevox() {
    return (
        <>
            {/* Por que usar o nosso atendimento */}
            <section id="sobre" className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Por que usar nosso atendimento?</h2>
                    <h3 className="text-muted-foreground text-sm">Oferecemos soluções de atendimento ao cliente rápidas e eficientes para melhorar a experiência dos seus consumidores, com tecnologia de ponta e equipe altamente qualificada.</h3>
                </div>

                <aside className="flex flex-col items-center lg:flex-row gap-10">

                    <div className="flex-1 rounded-3xl overflow-hidden">
                        <video
                            className="aspect-auto object-cover rounded-3xl min-h-[320px]"
                            loop
                            autoPlay
                            muted
                            playsInline
                            poster="/dashboard-poster.webp" // Adiciona a imagem do poster
                        >
                            <source src="/dashboard-video.mp4" type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>

                    <div className="flex-1 justify-center h-full">

                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-2.5  flex-col">
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Atendimento rápido</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Empatia e agilidade</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Atendimento especializado</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Experiência técnica</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Treinamentos constantes</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Registro no seu ERP</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Dashboard em tempo real</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Atendimeneto customizado</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <p className="text-md">Relatórios detalhados</p>
                            </li>
                        </ul>
                        <Link href="https://wa.me/551832568300" target="_blank">
                            <Button className="bg-primary-purple mt-4 w-full lg:w-auto">Tenho interesse!</Button>
                        </Link>
                    </div>
                </aside>
            </section>
        </>
    );
}
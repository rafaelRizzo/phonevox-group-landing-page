import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const benefits = [
    "Atendimento rápido",
    "Empatia e agilidade",
    "Atendimento especializado",
    "Experiência técnica",
    "Treinamentos constantes",
    "Registro no seu ERP",
    "Dashboard em tempo real",
    "Atendimento customizado",
    "Relatórios detalhados",
];

export default function PorQueAPhonevox() {
    return (
        <section id="sobre" className="max-w-7xl mx-auto my-10 p-6 flex flex-col gap-12">
            {/* Cabeçalho */}
            <div className="text-center px-4">
                <h2 className="text-3xl font-semibold tracking-tight">Por que usar nosso atendimento?</h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Oferecemos soluções de atendimento ao cliente rápidas e eficientes para melhorar a experiência dos seus consumidores, com tecnologia de ponta e equipe altamente qualificada.
                </p>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Vídeo ajustado para mobile como no exemplo */}
                <div className="flex-1 w-full rounded-3xl overflow-hidden">
                    <video
                        className="aspect-auto object-cover w-full min-h-[320px] lg:min-h-[450px] rounded-3xl"
                        loop
                        autoPlay
                        muted
                        playsInline
                        poster="/dashboard-poster.webp"
                    >
                        <source src="/dashboard-video.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>

                {/* Lista e Botão */}
                <div className="flex-1 flex flex-col justify-center">
                    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <FaCheck className="text-purple-600 w-4 h-4 flex-shrink-0" />
                                <p className="text-md">{benefit}</p>
                            </li>
                        ))}
                    </ul>
                    <Link href="https://wa.me/558003533000" target="_blank" className="mt-6 block">
                        <Button className="bg-primary-purple w-full lg:w-auto">Tenho interesse!</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
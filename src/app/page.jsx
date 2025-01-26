"use client"
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import * as React from "react"
import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testemunhos = [
        {
            id: 1,
            nome: "Aléxia Luíza",
            empresa: "MJC TELECOM",
            texto: "Excelente todos os atendentes. Sempre procurando ajudar e fazer o melhor para seus clientes.",
            foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            nome: "João Pereira",
            empresa: "Tech Solutions",
            texto: "Ótimo suporte técnico, sempre rápidos e eficientes. Recomendo fortemente!",
            foto: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            nome: "Mariana Silva",
            empresa: "Global Corp",
            texto: "Serviço impecável, desde o atendimento até a entrega final. Estou impressionada!",
            foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            nome: "Carolina Nogueira",
            empresa: "Soft Solutions",
            texto: "Um atendimento impecável e soluções rápidas! Certamente, voltarei a contratar seus serviços.",
            foto: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            nome: "Pedro Almeida",
            empresa: "Almeida & Co.",
            texto: "Não posso recomendar o suficiente! A equipe foi atenciosa e entregou tudo como prometido.",
            foto: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            nome: "Fernanda Costa",
            empresa: "Costa Studio",
            texto: "A experiência foi incrível! Cada detalhe foi pensado para garantir a satisfação do cliente.",
            foto: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 7,
            nome: "Gabriel Fernandes",
            empresa: "Inova Tech",
            texto: "Profissionalismo e eficiência definem o trabalho dessa equipe. Fiquei muito satisfeito com os resultados.",
            foto: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 8,
            nome: "Isabela Rocha",
            empresa: "Design Pro",
            texto: "Adorei o atendimento e a dedicação para atender minhas necessidades. Trabalho de alta qualidade!",
            foto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 9,
            nome: "Laura Mendes",
            empresa: "Bright Future Co.",
            texto: "Foi uma experiência incrível trabalhar com eles. Altamente recomendados para qualquer projeto!",
            foto: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 10,
            nome: "Ricardo Lopes",
            empresa: "Visionary Inc.",
            texto: "A atenção aos detalhes e o compromisso com a qualidade realmente me impressionaram.",
            foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const perguntasFaq = [
        {
            id: 1,
            question: "Tem alguma fidelidade?",
            answer: "Não! todos os nossos planos não possuem fidelidade."
        },
        {
            id: 2,
            question: "Teste gratuito de atendimento",
            answer: "Você pode entrar em contato e agendar um horário conosco para fazer um teste sem compromisso."
        },
        {
            id: 3,
            question: "E se eu não estiver satisfeito com o serviço?",
            answer: "Não se preocupe, iremos fazer o que estiver em nosso alcance para sempre melhorar, mas caso aconteça, todos os nossos planos possuem uma garantia de 30 dias para pedir o seu dinheiro de volta."
        },
        {
            id: 4,
            question: "Preciso falar sobre meu plano",
            answer: "Claro! estamos a disposição para atender a todas as suas necessidades, basta entrar em contato conosco pelo número: 18 3256 8300, telefone ou whatsapp!"
        }
    ]

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testemunhos.length);
        }, 6000); // Muda o depoimento a cada 6 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [testemunhos.length]);

    return (
        <>

            {/* Navbar */}
            <nav className="border-b border-purple-950/10">
                <ul className="flex flex-col lg:flex-row items-center justify-between max-w-5xl px-5 py-3.5 mx-auto">
                    <div>
                        <li>
                            <Link href="/">
                                <Image src="/logo-phonevox.png" alt="Logo da empresa" width={200} height={50} className="max-h-[42px]" />
                            </Link>
                        </li>
                    </div>

                    <div className="hidden lg:flex w-full flex-col justify-center lg:justify-end lg:flex-row items-center gap-5 text-muted-foreground text-sm">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Sobre</Link>
                        </li>
                        <li>
                            <Link href="/">Soluções</Link>
                        </li>
                        <li>
                            <Link href="/">Contato</Link>
                        </li>
                        <li>
                            <Link href="https://central.phonevox.com.br/" target="_blank">
                                <Button className="bg-primary-purple rounded-md">Área do cliente</Button>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>

            {/* Main section */}
            <main className="max-w-5xl p-5 my-5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">

                <div className="flex-1 flex flex-col">
                    <h1 className="text-4xl font-bold text-center lg:text-start">Seu cliente ainda está esperando enquanto você lê isso...</h1>
                    <h2 className="text-muted-foreground text-center lg:text-start">Nós podemos ajudar a resolver isso agora!</h2>

                    <Link href="https://wa.me/551832568300" target="_blank" className="w-full my-4">
                        <Button className="w-full lg:max-w-full bg-primary-purple rounded-lg">Garanta um atendimento imediato ao seu cliente</Button>
                    </Link>
                </div>

                <div className="flex-1 w-full rounded-3xl overflow-hidden">
                    <video src="/video.mp4" className="aspect-auto object-cover min-h-[320px] lg:min-h-[450px] rounded-3xl" loop autoPlay muted></video>
                </div>
            </main>

            {/* Por que usar o nosso atendimento */}
            <section className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Por que usar nosso atendimento?</h2>
                    <h3 className="text-muted-foreground text-sm">Oferecemos soluções de atendimento ao cliente rápidas e eficientes para melhorar a experiência dos seus consumidores, com tecnologia de ponta e equipe altamente qualificada.</h3>
                </div>

                <aside className="flex flex-col items-center lg:flex-row gap-10">

                    <div className="flex-1 rounded-3xl overflow-hidden">
                        <video src="/dashboard-video.mp4" loop autoPlay muted className="rounded-3xl min-h-[320px]"></video>
                    </div>

                    <div className="flex-1 justify-center h-full">

                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-2.5  flex-col">
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Atendimento rápido</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Empatia e agilidade</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Atendimento especializado</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Experiência técnica</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Treinamentos constantes</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Registro no seu ERP</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Dashboard em tempo real</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Atendimeneto customizado</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                <span className="text-md">Relatórios detalhados</span>
                            </li>
                        </ul>
                        <Link href="https://wa.me/551832568300" target="_blank">
                            <Button className="bg-primary-purple mt-4 w-full lg:w-auto">Tenho interesse!</Button>
                        </Link>
                    </div>
                </aside>
            </section>

            {/* Card falando sobre a empresa */}
            <aside className="max-w-5xl p-5 my-5 mx-auto">
                <div className="flex flex-col gap-10 border border-purple-100 rounded-3xl bg-purple-100 text-purple-950 p-5 py-8">
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-2xl">Seu cliente não pode esperar: ofereça atendimento rápido e eficiente!</h2>
                        <h3 className="text-purple-950/60 text-sm">Proporcionamos soluções de atendimento sob medida para empresas de qualquer porte, com expertise em VOIP e PABX na nuvem.</h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 text-center">
                        <div className="flex flex-col justify-center">
                            <div className="font-semibold flex-1 min-h-12 justify-center items-center flex text-lg">Anos de atuação</div>
                            <div className="flex-1 font-light text-purple-800 text-2xl mt-2">7+</div>
                        </div>
                        <div className="flex flex-col justify-center border-l border-r-0 lg:border-r border-purple-950/15">
                            <div className="font-semibold flex-1 min-h-12 justify-center items-center flex text-lg">Empresas</div>
                            <div className="flex-1 font-light text-purple-800 text-2xl mt-2">1K</div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-semibold flex-1 min-h-12 justify-center items-center flex text-lg">Atendimentos</div>
                            <div className="flex-1 font-light text-purple-800 text-2xl mt-2">2M</div>
                        </div>
                        <div className="flex flex-col justify-center border-l border-r-0 lg:border-r border-purple-950/15">
                            <div className="font-semibold flex-1 min-h-12 justify-center items-center flex text-lg">TME</div>
                            <div className="flex-1 font-light text-purple-800 text-2xl mt-2">10s</div>
                        </div>
                        <div className="flex flex-col justify-center col-span-2 lg:col-span-1">
                            <div className="font-semibold flex-1 min-h-12 justify-center items-center flex text-lg">Satisfação</div>
                            <div className="flex-1 font-light text-purple-800 text-2xl mt-2">5</div>
                        </div>
                    </div>
                </div>

            </aside>

            {/* Soluções */}
            <section className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Nossas soluções</h2>
                    <h3 className="text-muted-foreground text-sm">Oferecemos soluções de atendimento personalizadas para empresas de todos os tamanhos, com especialização em VOIP e PABX na nuvem!</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Card className="p-5 shadow-none relative border-purple-700 overflow-hidden">

                        <div className="bg-purple-700 border-purple-700 text-zinc-50 min-h-8 absolute top-0 left-0 right-0 flex items-center justify-center text-center">
                            🔥 MAIS BUSCADO
                        </div>

                        <CardTitle className="text-center text-2xl mt-8">Callcenter</CardTitle>

                        <CardDescription className="text-center">
                            <p>A partir de R$ 299,90</p>
                        </CardDescription>

                        <CardContent>
                            <ul className="flex flex-col gap-2.5 mt-5">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Atendimento 24/7</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Distribuição automática de chamadas</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Ligações gravadas para registro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Relatórios detalhados mensais</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Treinamentos constantes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Registro no seu ERP</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Dashboard em tempo real</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Desbloqueio de clientes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Atendimento via CHAT e TELEFONE</span>
                                </li>
                            </ul>

                            <Button className="bg-primary-purple w-full mt-5">Saiba mais</Button>
                        </CardContent>
                    </Card>

                    <Card className="p-5 shadow-none border-purple-950/20">
                        <CardTitle className="text-center text-2xl my-2">VOIP</CardTitle>

                        <CardDescription className="text-center">
                            <p>A partir de R$ 29,90</p>
                        </CardDescription>

                        <CardContent>
                            <ul className="flex flex-col gap-2.5 mt-5">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">PABX em nuvem</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Consultoria</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Planos com minutos ilimitados</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">0800 ilimitado</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Integração com tecnologias modernas</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Flexibilidade geográfica</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Redução de problemas como interferências de sinal</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Vários canais de saídas e entradas simultâneos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <span className="text-md">Melhor qualidade de áudio e som</span>
                                </li>
                            </ul>

                            <Button className="bg-primary-purple w-full mt-5">Saiba mais</Button>
                        </CardContent>
                    </Card>
                </div>

            </section>

            {/* Parceiros */}
            <section className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Nossos parceiros</h2>
                    <h3 className="text-muted-foreground text-sm">Empresas que confiam em nosso potencial de potencializar seu atendimento</h3>

                </div>

                <div className="mx-auto select-none">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,  // Intervalo entre cada slide (3 segundos)
                                disableOnInteraction: false,  // Permite que o autoplay continue mesmo após interação
                            }),
                        ]}
                        opts={{
                            align: "start",
                            dragFree: true,  // Desabilita o drag manual,

                        }}
                        className="w-full max-w-xs sm:max-w-md lg:max-w-2xl"  // Ajuste a largura para dispositivos móveis
                    >
                        <CarouselContent>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6 user-select-none">
                                    <div className="p-1">
                                        <Card className="shadow-none">
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

            </section>

            {/* Testemunhos */}
            <section className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Relatos de nossos clientes</h2>
                    <h3 className="text-muted-foreground text-sm">
                        Motivados pela experiência e cordialidade, nosso atendimento é exemplar, não há como não elogiar
                    </h3>
                </div>

                <div className="container-carrousel w-full flex items-center justify-center">
                    {testemunhos.map((testemunho, index) => (
                        <div
                            key={testemunho.id}
                            className={`carousel-card p-10 border rounded-3xl w-full lg:max-w-lg shadow transition-opacity duration-700 ${index === activeIndex ? "active-testemunhal" : "opacity-0 absolute"
                                }`}
                        >
                            <div className="carousel-content">
                                {/* Card top */}
                                <div className="carousel-navigation flex items-center justify-center gap-5 mb-5">
                                    <div className="caroulse-photo-cliente">
                                        <div className="min-h-12 min-w-12 max-h-12 max-w-12 rounded-full border bg-zinc-100 overflow-hidden aspect-square">
                                            <Image
                                                src={testemunho.foto}
                                                alt={`Foto de ${testemunho.nome}`}
                                                className="w-full h-full object-cover"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Card content */}
                                <div className="carousel-content relative min-h-36 flex items-center justify-center text-center">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                        <Image
                                            src="/quotes-icon.svg"
                                            alt="Ícone de aspas para os testemunhos"
                                            className="w-[150px] h-[150px] -z-10 opacity-50"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="card-text-testemunho text-3xl font-serif break-words break-normal overflow-hidden text-purple-950">
                                        <span>{testemunho.texto}</span>
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="carousel-footer flex flex-col items-center justify-center gap-1 mt-5">
                                    <span className="carousel-client-name text-sm text-purple-800">{testemunho.nome}</span>
                                    <span className="carousel-client-position text-purple-950/50 text-xs">
                                        {testemunho.empresa}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-5xl p-5 my-5 mx-auto">
                <div className="flex flex-col gap-10 border border-purple-700 rounded-3xl bg-purple-700 text-purple-100 p-5 py-8 text-center font-medium text-xl">
                    <h2>PHONEVOX, CONECTANDO VOCÊ AO FUTURO DA COMUNICAÇÃO!</h2>
                </div>
            </section>

            {/* Faq */}
            <section className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Perguntas frequentes</h2>
                    <h3 className="text-muted-foreground text-sm">Encontre respostas rápidas para as dúvidas mais comuns</h3>
                </div>


                {/* Acordion com perguntas e respostas */}
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {perguntasFaq.map((pergunta) => (
                            <AccordionItem value={pergunta.id} key={pergunta.id}>
                                <AccordionTrigger>{pergunta.question}</AccordionTrigger>
                                <AccordionContent>
                                    {pergunta.answer}
                                </AccordionContent>
                            </AccordionItem>

                        ))}
                    </Accordion>
                </div>
            </section>

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

            {/* Em analise do que colocar aqui */}
            <footer className="bg-purple-700 p-5 py-8  mt-10 text-sm">

                <div className="mx-auto max-w-5xl">
                    {/* Logo e texto descritivo */}
                    <div className="flex flex-col items-center lg:flex-row justify-between">
                        <div className="flex flex-col items-center max-w-xs gap-2">
                            <Image src="/logo-phonevox-white.png" alt="Logo da empresa" width={200} height={200} />
                            <p className="text-purple-300 font-light">#A GENTE NÃO PARA NUNCA</p>
                        </div>

                        <div className="grid grid-cols-1 place-content-center place-items-center text-center lg:flex text-purple-100 gap-10 mt-10 lg:mt-0">
                            <div>
                                <h4 className="mb-2 font-medium">Navegação</h4>
                                <ul className="text-purple-200 space-y-2">
                                    <li>Home</li>
                                    <li>Sobre</li>
                                    <li>Soluções</li>
                                    <li>Contato</li>
                                    <li>Área do cliente</li>
                                </ul>
                            </div>
                            <div className="max-w-[200px]">
                                <h4 className="mb-2 font-medium">Empresa</h4>
                                <ul className="text-purple-200 space-y-2">
                                    <li>Av. José Bonifácio, 481-C, Centro, Santo Anastácio, SP, Brasil</li>
                                    <li>contato@phonevox.com.br</li>
                                    <li>18 3256 8300</li>
                                    <li>Trabalhe conosco</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-2 font-medium">Redes sociais</h4>
                                <ul className="flex gap-5 text-purple-200">
                                    <li><IoLogoInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                    <li><IoLogoFacebook /></li>
                                    <li><FaTiktok /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-10 border-t border-purple-50/50"></div>

                    <div className="flex flex-col items-center justify-center text-purple-300 text-xs" >
                        <span>Feito por <Link href={"https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216"} target="_blank" className="hover:underline">Rafael Rizzo Breschi</Link></span>
                        <span>&copy; 2025 Phonevox Group. Todos os direitos reservados</span>
                    </div>

                </div>

            </footer>

        </>
    );
}

import LayoutLanding from "@/LayoutLanding";
import Image from "next/image";

export const generateMetadata = () => {
    return {
        title: "Call Center - Phonevox",
        description: "A Phonevox oferece soluções completas de VOIP e PABX na nuvem, garantindo atendimento ágil e de alta qualidade. Criamos fluxos de atendimento customizados e integramos nossa URA inteligente aos principais ERPs, como IXCSoft, SGP e Hubsoft.",
        openGraph: {
            title: "Call Center - Phonevox",
            description: "Conheça os nossos serviços de call center, com soluções personalizadas para empresas de todos os tamanhos, garantindo eficiência e qualidade no atendimento.",
            url: "https://phonevox.com.br/callcenter",
            type: "website",
        },
        alternates: {
            canonical: "https://www.phonevox.com.br/callcenter",
        },
    };
};

export default function Callcenter() {
    return (
        <LayoutLanding>
            <div className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10">
                <main className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-purple-950 text-4xl font-bold">Call Center</h1>
                        <h2 className="text-muted-foreground">Tecnologia, eficiência e suporte 24/7 para transformar a experiência dos seus clientes.</h2>
                    </div>
                </main>

                <aside className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Image src="/images/callcenter-2.webp" alt="callcenter" width={1920} height={1080} className="h-[450px] object-contain lg:object-fill rounded-3xl" />
                    <div className="flex items-center">
                        <p>
                            Na Phonevox, oferecemos um Call Center robusto e inteligente, que vai além das soluções tradicionais. Nossa plataforma de VOIP e PABX na nuvem garante que sua empresa tenha um atendimento ágil, de qualidade e sempre disponível. Com integração direta com sistemas de CRM e ferramentas especializadas como IXC, SGP e Hubsoft, você consegue otimizar cada interação, proporcionando um atendimento excepcional, mesmo nos momentos de maior demanda.
                        </p>
                    </div>
                </aside>

                <aside className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex items-center">
                        <p>
                            Com suporte especializado 24 horas por dia, 7 dias por semana, incluindo feriados, nossa missão é potencializar a comunicação e ajudar sua empresa a atender seus clientes de forma eficiente, personalizada e sem falhas. Pronto para transformar seu atendimento? A Phonevox tem a solução completa que você precisa.
                        </p>
                    </div>
                    <Image src="/images/callcenter-3.webp" alt="callcenter" width={1920} height={1080} className="h-[450px] object-contain lg:object-fill  rounded-3xl" />
                </aside>

            </div>
        </LayoutLanding>
    );
}
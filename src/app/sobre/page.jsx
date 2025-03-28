import LayoutLanding from "@/LayoutLanding";
import Image from "next/image";

export const generateMetadata = () => {
    return {
        title: "Sobre - Phonevox",
        description: "Descubra a história da Phonevox, sua infraestrutura moderna e seu compromisso com soluções VOIP e PABX na nuvem, focando em inovação e qualidade no atendimento.",
        openGraph: {
            title: "Sobre - Phonevox",
            description: "Descubra a história da Phonevox, sua infraestrutura moderna e seu compromisso com soluções VOIP e PABX na nuvem, focando em inovação e qualidade no atendimento.",
            url: "https://phonevox.com.br/sobre",
            type: "website",
        },
        alternates: {
            canonical: "https://www.phonevox.com.br/sobre",
        },
    };
};

export default function Sobre() {
    return (
        <LayoutLanding>
            <div className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10">
                <main className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-purple-950 text-4xl font-bold">Sobre</h1>
                        <h2 className="text-muted-foreground">Transformando a comunicação empresarial com tecnologia e inovação!</h2>
                    </div>
                </main>

                <aside className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <p>
                            Fundada com o propósito de revolucionar a comunicação empresarial, a Phonevox se tornou referência no mercado de soluções VOIP e PABX na nuvem. Nossa missão é proporcionar tecnologia de ponta para empresas de todos os portes, garantindo qualidade, eficiência e economia nas telecomunicações.
                        </p>
                        <br />
                        <p>
                            Contamos com uma infraestrutura robusta e altamente escalável, capaz de atender às necessidades dos mais diversos segmentos. Nosso time é formado por especialistas em tecnologia e atendimento, sempre focados em oferecer suporte ágil e eficiente.
                        </p>
                        <br />
                        <p>
                            Além disso, integramos nossa URA inteligente a ERPs renomados, como IXCSoft, SGP e Hubsoft, otimizando a experiência do usuário e automatizando processos para um atendimento ainda mais dinâmico.
                        </p>
                    </div>
                    <Image
                        src="/images/callcenter.webp"
                        alt="callcenter"
                        width={1920}
                        height={1080}
                        className="h-full w-full object-cover rounded-3xl"
                    />
                </aside>
            </div>
        </LayoutLanding>
    );
}



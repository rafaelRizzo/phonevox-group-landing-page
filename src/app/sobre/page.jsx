import LayoutLanding from "@/LayoutLanding";
import Image from "next/image";

export default function Sobre() {
    return (
        <>
            <LayoutLanding>
                <div className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                    <main className="flex flex-col gap-2">
                        <div>
                            <h1 className="text-purple-950 text-4xl font-bold">Sobre</h1>
                            <h2 className="text-muted-foreground">O Callcenter que mais cresce no Brasil!</h2>
                        </div>
                    </main>

                    <aside className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <p>
                                A Phonevox oferece soluções completas de VOIP e PABX na nuvem, garantindo atendimento ágil e de alta qualidade. Criamos fluxos de atendimento customizados e integramos nossa URA inteligente aos principais ERPs, como IXCSoft, SGP e Hubsoft, para otimizar cada interação e oferecer um serviço rápido e personalizado.
                            </p>
                            <br />
                            <p>
                                Com números VOIP, sua empresa ganha flexibilidade e controle. A Phonevox assegura que sua comunicação seja sempre eficiente e sem falhas, proporcionando a melhor experiência para seus clientes.
                            </p>

                        </div>
                        <Image src="/images/callcenter.webp" alt="callcenter" width={1920} height={1080} className="h-full w-full object-cover rounded-3xl" />
                    </aside>

                </div>
            </LayoutLanding>
        </>
    );
}

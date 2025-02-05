import Image from "next/image";

export default function Testemunhos({ testemunhos, activeIndex }) {
    return (
        <>
            {/* Testemunhos clientes */}
            <section className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10" >
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Relatos de nossos clientes</h2>
                    <h3 className="text-muted-foreground text-sm">
                        Motivados pela experiência e cordialidade, nosso atendimento é exemplar, não há como não elogiar
                    </h3>
                </div>

                <div className="container-carrousel w-full flex items-center justify-center">
                    {testemunhos.map((testemunho, index) => (
                        <div key={testemunho.id}
                            className={`carousel-card p-10 border rounded-3xl w-full lg:max-w-lg shadow transition-opacity duration-700 ${index === activeIndex ? "active-testemunhal" : "opacity-0 absolute"}`}>
                            <blockquote className="carousel-content">
                                {/* Card top */}
                                <div className="carousel-navigation flex items-center justify-center gap-5 mb-5">
                                    <div className="caroulse-photo-cliente">
                                        <div className="min-h-12 min-w-12 max-h-12 max-w-12 rounded-full border border-purple-700/15 bg-zinc-100 overflow-hidden aspect-square relative">
                                            <div className="absolute flex h-full w-full top-0"></div>
                                            <Image
                                                src={testemunho.foto}
                                                alt={`Foto de ${testemunho.nome}`}
                                                className="w-full h-full object-cover"
                                                width={200}
                                                height={200}
                                                loading="lazy"
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
                                            className="w-[150px] h-[150px] -z-10 opacity-20"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="card-text-testemunho text-3xl font-serif break-words break-normal overflow-hidden text-purple-950">
                                        <span>{testemunho.texto}</span>
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="carousel-footer flex flex-col items-center justify-center gap-1 mt-5">
                                    <cite className="carousel-client-name text-sm text-purple-800">{testemunho.nome}</cite>
                                    <span className="carousel-client-position text-purple-950/50 text-xs">
                                        {testemunho.empresa}
                                    </span>
                                </div>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </section >
        </>
    );
}
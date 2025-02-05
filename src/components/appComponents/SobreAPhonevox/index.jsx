export default function SobreAPhonevox() {
    return (
        <>
            {/* Card falando sobre a empresa */}
            <aside className="max-w-7xl p-5 my-5 mx-auto">
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
                            <div className="flex-1 font-light text-purple-800 text-2xl mt-2">1M</div>
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
        </>
    );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export default function Solucoes() {
    return (
        <>
            {/* Soluções */}
            <section id="solucoes" className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
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
                                    <p className="text-md">Atendimento 24/7</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Distribuição automática de chamadas</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Ligações gravadas para registro</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Relatórios detalhados mensais</p>
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
                                    <p className="text-md">Desbloqueio de clientes</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Atendimento via CHAT e TELEFONE</p>
                                </li>
                            </ul>

                            <Link href="https://wa.me/551832568300" target="_blank">
                                <Button className="bg-primary-purple w-full mt-5">
                                    Saiba mais
                                </Button>
                            </Link>
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
                                    <p className="text-md">PABX em nuvem</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Consultoria</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Planos com minutos ilimitados</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">0800 sem tarifação</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Integração com tecnologias modernas</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Flexibilidade geográfica</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Redução de problemas como interferências de sinal</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Vários canais de saídas e entradas simultâneos</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-purple-600 min-h-4 min-w-4" />
                                    <p className="text-md">Melhor qualidade de áudio e som</p>
                                </li>
                            </ul>

                            <Link href="https://wa.me/551832568300" target="_blank">
                                <Button className="bg-primary-purple w-full mt-5">
                                    Saiba mais
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

            </section >
        </>
    );
}
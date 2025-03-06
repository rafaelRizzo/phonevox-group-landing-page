import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export default function Solucoes() {
    return (
        <>
            {/* Soluções */}
            <section id="solucoes" className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Nossas soluções</h2>
                    <h3 className="text-muted-foreground text-sm">Oferecemos soluções de atendimento personalizadas para empresas de todos os tamanhos, com especialização em VOIP e PABX na nuvem!</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

                    <Card className="p-5 shadow-none border-purple-950/20 bg-purple-500/[0.025] min-h-[600px]">
                        <CardTitle className="text-center text-2xl mt-4">
                            <h5>Chatbot</h5>
                        </CardTitle>

                        <CardDescription className="text-center">
                            <p>A partir de R$ 287,00/mês</p>

                            <Link href="https://wa.me/558003533000" target="_blank">
                                <Button className="bg-purple-700 hover:bg-purple-800 w-full mt-5">
                                    Saiba mais
                                </Button>
                            </Link>
                        </CardDescription>

                        <Separator className="my-5" />

                        <CardContent>
                            <ul className="flex flex-col gap-2.5 mt-5">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">API Oficial e QR code</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Fluxo de atendimento personalizado</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Personalização de mensagens</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Análises e métricas avançadas</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Atendimento humano e bot híbrido</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Gestão de filas</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Transferência de atendimentos</p>
                                </li>

                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Usuários ilimitados</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Relatórios detalhados</p>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="relative mt-5 lg:mt-0 ">
                        <div className="bg-purple-600 border-purple-600 text-zinc-50 min-h-10 absolute rounded-t-lg -top-6 left-0 right-0 flex items-center justify-center text-center">
                            🔥 MAIS BUSCADO
                        </div>

                        <Card className="p-5 shadow-none border-purple-600 rounded-t-none min-h-[600px]">

                            <CardTitle className="text-center text-2xl mt-4">
                                <h5 className="text-purple-950">Call Center</h5>
                                <h6 className="text-purple-800">para provedores</h6>
                            </CardTitle>

                            <CardDescription className="text-center">
                                <p>A partir de R$ 907,00/mês</p>
                                <Link href="https://wa.me/558003533000" target="_blank">
                                    <Button className="bg-purple-700 hover:bg-purple-800 w-full mt-5">
                                        Saiba mais
                                    </Button>
                                </Link>
                            </CardDescription>

                            <Separator className="my-5" />

                            <CardContent>
                                <ul className="flex flex-col gap-2.5 mt-5">
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Atendimento 24/7</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Distribuição automática de chamadas</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Ligações gravadas para registro</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Relatórios detalhados mensais</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Treinamentos constantes</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Registro no seu ERP</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Dashboard em tempo real</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Desbloqueio de clientes</p>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                        <p className="text-md">Atendimento via CHAT e TELEFONE</p>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="p-5 shadow-none border-purple-950/20 bg-purple-500/[0.025] min-h-[600px]">
                        <CardTitle className="text-center text-2xl mt-4">
                            <h5>VOIP</h5>
                        </CardTitle>

                        <CardDescription className="text-center">
                            <p>A partir de R$ 67,00/mês</p>

                            <Link href="https://wa.me/558003533000" target="_blank">
                                <Button className="bg-purple-700 hover:bg-purple-800 w-full mt-5">
                                    Saiba mais
                                </Button>
                            </Link>
                        </CardDescription>

                        <Separator className="my-5" />

                        <CardContent>
                            <ul className="flex flex-col gap-2.5 mt-5">
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">PABX em nuvem</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Consultoria</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Planos com minutos ilimitados</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">0800 sem tarifação</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Integração com tecnologias modernas</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Flexibilidade geográfica</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Redução de problemas como interferências de sinal</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Vários canais de saídas e entradas simultâneos</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaCheck className="text-emerald-500 min-h-4 min-w-4" />
                                    <p className="text-md">Melhor qualidade de áudio e som</p>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                </div>

            </section >
        </>
    );
}
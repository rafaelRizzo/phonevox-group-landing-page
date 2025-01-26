import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="border-b border-purple-950/10" aria-label="Navegação principal">
                <ul className="flex flex-col lg:flex-row items-center justify-between max-w-5xl px-5 py-3.5 mx-auto">
                    {/* Logo */}
                    <li>
                        <Link href="/" aria-label="Página inicial">
                            <Image src="/logo-phonevox.webp" alt="Logo da empresa Phonevox" width={200} height={50} className="max-h-[42px]" loading="lazy" />
                        </Link>
                    </li>

                    {/* Menu de navegação */}
                    <li className="hidden lg:flex w-full flex-col justify-center lg:justify-end lg:flex-row items-center gap-5 text-muted-foreground text-sm">
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link href="/" aria-label="Ir para a página inicial">Home</Link>
                            </li>
                            <li>
                                <Link href="/" aria-label="Informações sobre a empresa">Sobre</Link>
                            </li>
                            <li>
                                <Link href="/" aria-label="Nossas soluções">Soluções</Link>
                            </li>
                            <li>
                                <Link href="/" aria-label="Contato da empresa">Contato</Link>
                            </li>
                            <li>
                                <Link href="https://central.phonevox.com.br/" target="_blank" aria-label="Área do cliente">
                                    <Button className="bg-primary-purple rounded-md">Área do cliente</Button>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}
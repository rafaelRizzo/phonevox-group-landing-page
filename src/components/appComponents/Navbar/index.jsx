"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const getLink = (hash) => (isHome ? hash : `/${hash}`);

    return (
        <>
            {/* Navbar */}
            <nav className="hidden lg:block border-b border-purple-950/10 " aria-label="breadcrumb">
                <ul className="flex flex-col lg:flex-row items-center justify-between max-w-7xl px-5 py-3.5 mx-auto">
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
                                <Link href={getLink("#sobre")} aria-label="Informações sobre a empresa">Sobre</Link>
                            </li>
                            <li>
                                <Link href={getLink("#solucoes")} aria-label="Nossas soluções">Soluções</Link>
                            </li>
                            <li>
                                <Link href={getLink("#contato")} aria-label="Contato da empresa">Contato</Link>
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

            {/* NAVBAR MOBILE */}
            <nav className="block lg:hidden border-b border-purple-950/10 " aria-label="breadcrumb">
                <ul className="flex items-center justify-between max-w-5xl px-5 py-3.5 mx-auto min-h-[70px] max-h-[70px] relative">
                    {/* Logo */}
                    <li>
                        <Link href="/" aria-label="Página inicial">
                            <Image src="/logo-phonevox.webp" alt="Logo da empresa Phonevox" width={200} height={50} className="max-h-[42px]" loading="lazy" />
                        </Link>
                    </li>

                    {/* Menu de navegação */}
                    <div>
                        <Button className={`bg-primary-purple`} onClick={() => { setOpenNav(!openNav) }} aria-label="Menu hamburguer">
                            <RxHamburgerMenu />
                        </Button>
                    </div>

                    <li className={`${openNav ? 'open-menu open' : 'open-menu'} overflow-hidden w-full flex-col gap-5 text-purple-950 text-sm absolute mt-[71px] top-0 left-0 right-0 bg-zinc-50 z-50`}>
                        <ul className="flex flex-col py-6 px-5 text-center gap-5">
                            <li>
                                <Link className="flex border border-transparent hover:border-purple-700 rounded-md w-full justify-center p-2" href="/" onClick={() => { setOpenNav(false) }} aria-label="Ir para a página inicial">Home</Link>
                            </li>
                            <li>
                                <Link className="flex border border-transparent hover:border-purple-700 rounded-md w-full justify-center p-2" href={getLink("#sobre")} onClick={() => { setOpenNav(false) }} aria-label="Informações sobre a empresa">Sobre</Link>
                            </li>
                            <li>
                                <Link className="flex border border-transparent hover:border-purple-700 rounded-md w-full justify-center p-2" href={getLink("#solucoes")} onClick={() => { setOpenNav(false) }} aria-label="Nossas soluções">Soluções</Link>
                            </li>
                            <li>
                                <Link className="flex border border-transparent hover:border-purple-700 rounded-md w-full justify-center p-2" href={getLink("#contato")} onClick={() => { setOpenNav(false) }} aria-label="Contato da empresa">Contato</Link>
                            </li>
                            <li>
                                <Link className="flex w-full justify-center p-2 bg-primary-purple text-zinc-50 rounded-md" href="https://central.phonevox.com.br/" target="_blank" aria-label="Área do cliente">
                                    Área do cliente
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}

import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image";

export default function Rodape() {
    return (
        <>
            {/* Rodapé */}
            <footer className="bg-purple-700 p-5 py-8  mt-10 text-sm">

                <div className="mx-auto max-w-5xl">
                    {/* Logo e texto descritivo */}
                    <div className="flex flex-col items-center lg:flex-row justify-between">
                        <div className="flex flex-col items-center max-w-xs gap-2">
                            <Image src="/logo-phonevox-white.webp" alt="Logo da empresa" width={200} height={200} loading="lazy" />
                            <p className="text-purple-300 font-light">#A GENTE NÃO PARA NUNCA</p>
                        </div>

                        <div className="grid grid-cols-1 place-content-center place-items-center lg:place-items-start lg:place-content-start text-center lg:text-start lg:flex text-purple-100 gap-10 mt-10 lg:mt-0">
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
                                    <li>
                                        <Link href="mailto:contato@phonevox.com.br" target="_blank" className="hover:underline">
                                            contato@phonevox.com.br
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://wa.me/551832568300" target="_blank" className="hover:underline">+55 18 3256-8300</Link>
                                    </li>
                                    <li>
                                        <Link href="https://wa.me/551832568300" target="_blank" className="hover:underline">Trabalhe conosco</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-sharing">
                                <h4 className="mb-2 font-medium">Redes sociais</h4>
                                <ul className="flex gap-5 text-purple-200">
                                    <li>
                                        <Link href="https://www.instagram.com/phonevox.group" target="_blank" aria-label="Instagram Phonevox Group" className="hover:underline">
                                            <IoLogoInstagram className="hover:scale-105 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/phonevox" target="_blank" aria-label="Linkedin Phonevox Group" className="hover:underline">
                                            <FaLinkedinIn className="hover:scale-105 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.facebook.com/phonevoxcontactcenter" target="_blank" aria-label="Facebook Phonevox Group" className="hover:underline">
                                            <IoLogoFacebook className="hover:scale-105 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.tiktok.com/@phonevox" target="_blank" aria-label="Tiktok Phonevox Group" className="hover:underline">
                                            <FaTiktok className="hover:scale-105 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-10 border-t border-purple-50/50"></div>

                    <div className="flex flex-col items-center justify-center text-purple-300 text-xs" >
                        <p>Feito por <Link href={"https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216"} target="_blank" className="hover:underline">Rafael Rizzo Breschi</Link></p>
                        <p>&copy; 2025 Phonevox Group. Todos os direitos reservados</p>
                    </div>

                </div>

            </footer>

        </>
    );
}
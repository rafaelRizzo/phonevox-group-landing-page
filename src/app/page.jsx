"use client"

import LayoutLanding from "@/LayoutLanding";

import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

import Main from "@/components/appComponents/Main";
import PorQueAPhonevox from "@/components/appComponents/PorQueAPhonevox";
import SobreAPhonevox from "@/components/appComponents/SobreAPhonevox";
import Parceiros from "@/components/appComponents/Parceiros";
import Testemunhos from "@/components/appComponents/Testemunhos";
import SloganSecundario from "@/components/appComponents/SloganSecundario";
import Faq from "@/components/appComponents/Faq";
import Solucoes from "@/components/appComponents/Solucoes";
import Ajuda from "@/components/appComponents/Ajuda";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { logos, testemunhos, perguntasFaq } = useAppContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testemunhos.length);
        }, 5000); // Muda o depoimento a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [testemunhos.length]);

    useEffect(() => {
        (function (i, s, g, r, j, y, b, p, t, z, a) { a = s.createElement(r), a.async = 1, a.src = g.concat(b, j, b, y, p, j), s.head.appendChild(a), a.onload = function () { opa.init(g, t, z) } })(window, document, 'https://opa.phonevox.com.br', 'script', 'js', 'opa', '/', '.', '67991bccfec2f0dbc73601e5', '{"google_credential":"","google_oauth":"","facebook_appid":"","permitir_login_anonimo":"on"}');
    }, []);

    return (
        <LayoutLanding>
            <Main />

            <PorQueAPhonevox />

            <SobreAPhonevox />

            <Solucoes />

            <Parceiros logos={logos} />

            <Testemunhos testemunhos={testemunhos} activeIndex={activeIndex} />

            <SloganSecundario />

            <Faq perguntasFaq={perguntasFaq} />

            <Ajuda />
        </LayoutLanding>
    );
}

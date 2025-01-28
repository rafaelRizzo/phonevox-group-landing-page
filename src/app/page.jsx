"use client"

import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

import Navbar from "@/components/appComponents/Navbar";
import Main from "@/components/appComponents/Main";
import PorQueAPhonevox from "@/components/appComponents/PorQueAPhonevox";
import SobreAPhonevox from "@/components/appComponents/SobreAPhonevox";
import Parceiros from "@/components/appComponents/Parceiros";
import Testemunhos from "@/components/appComponents/Testemunhos";
import SloganSecundario from "@/components/appComponents/SloganSecundario";
import Faq from "@/components/appComponents/Faq";
import Rodape from "@/components/appComponents/Rodape";
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
        const jsonConfig = JSON.stringify({
            google_credential: process.env.NEXT_PUBLIC_GOOGLE_CREDENTIAL,
            google_oauth: process.env.NEXT_PUBLIC_GOOGLE_OAUTH,
            facebook_appid: process.env.NEXT_PUBLIC_FACEBOOK_APPID,
            permitir_login_anonimo: process.env.NEXT_PUBLIC_PERMITIR_LOGIN_ANONIMO,
        });

        (function (i, s, g, r, j, y, b, p, t, z, a) {
            // Cria um elemento <script>
            a = s.createElement(r);
            a.async = true; // Define que o script será carregado de forma assíncrona
            a.src = g.concat(b, j, b, y, p, j); // Monta a URL do script a ser carregado

            // Adiciona o <script> no <head> do documento
            s.body.appendChild(a);

            // Callback executado quando o script é carregado
            a.onload = function () {
                if (typeof opa !== "undefined" && opa.init) {
                    // Inicializa a função 'opa.init' com os parâmetros necessários
                    opa.init(g, t, z);
                } else {
                    console.error("opa.init não está disponível");
                }
            };
        })(window, document, "https://opa.phonevox.com.br", "script", "js", "opa", "/", ".", process.env.NEXT_PUBLIC_API_KEY, jsonConfig);
    }, []);

    return (
        <>

            <Navbar />

            <Main />

            <PorQueAPhonevox />

            <SobreAPhonevox />

            <Solucoes />

            <Parceiros logos={logos} />

            <Testemunhos testemunhos={testemunhos} activeIndex={activeIndex} />

            <SloganSecundario />

            <Faq perguntasFaq={perguntasFaq} />

            <Ajuda />

            <Rodape />
        </>
    );
}

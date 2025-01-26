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

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Usando o usePathname

const breadcrumbMap = {
    "callcenter": {
        name: "Call Center",
        description: "Conheça os nossos serviços de call center, com soluções personalizadas para empresas de todos os tamanhos, garantindo eficiência e qualidade no atendimento."
    },
    "sobre": {
        name: "Sobre",
        description: "Descubra a história da Phonevox, sua infraestrutura moderna e seu compromisso com soluções VOIP e PABX na nuvem, focando em inovação e qualidade no atendimento."
    },
    "solucoes": {
        name: "Soluções",
        description: "Veja todas as soluções que oferecemos, com foco em VOIP, PABX na nuvem e soluções personalizadas para o seu negócio."
    },
};

export default function Breadcrumbs() {
    const pathname = usePathname(); // Usando o usePathname para obter o caminho atual
    const [jsonLd, setJsonLd] = useState(null);

    useEffect(() => {
        if (!pathname) return; // Verifica se o pathname está disponível

        const pathSegments = pathname.split("/").filter(Boolean); // Remove strings vazias

        // Adiciona uma entrada para a home (caso esteja na página inicial)
        const breadcrumbItems = pathSegments.map((segment, index) => {
            const url = "/" + pathSegments.slice(0, index + 1).join("/");
            const mapped = breadcrumbMap[segment] || { name: segment.replace(/-/g, " "), description: "" };

            return {
                "@type": "ListItem",
                "position": index + 1,
                "name": mapped.name,
                "item": `https://phonevox.com.br${url}`,
                "description": mapped.description,
            };
        });

        // Ajusta a estrutura do breadcrumb para incluir a página inicial
        const jsonData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 0,
                    "name": "Início",
                    "item": "https://phonevox.com.br", // Página inicial
                    "description": "Página inicial da Phonevox",
                },
                ...breadcrumbItems,
            ],
        };

        setJsonLd(jsonData);
    }, [pathname]); // O efeito será acionado sempre que o pathname mudar

    if (!jsonLd) return null; // Evita erro de renderização no SSR

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

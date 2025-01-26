import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

// Importando a fonte Poppins com o estilo e peso desejado
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',  // Isso ajuda a garantir um carregamento rápido da fonte
});
export const metadata = {
  title: "Phonevox - Callcenter 24/7 com VOIP e PABX para Empresas",
  description: "A Phonevox oferece soluções inovadoras de atendimento ao cliente para empresas de todos os portes. Aumente a produtividade com VOIP, PABX na nuvem, call center e suporte 24/7.",
  keywords: "atendimento ao cliente, soluções VOIP, PABX na nuvem, call center, suporte 24/7, empresas, sistema de atendimento empresarial, soluções de telecomunicação, suporte issabel, suporte magnus, suporte asterisk, suporte freepbx",
  author: "Phonevox Group",
  robots: "index, follow",
  language: "pt-BR", // Indicando o idioma para o Google

  openGraph: {
    title: "Soluções de Atendimento 24/7 para Empresas com Phonevox",
    description: "Soluções de atendimento empresarial com VOIP, PABX na nuvem e suporte 24/7 para sua empresa.",
    url: "https://www.phonevox.com.br/",
    type: "website",
    siteName: "Phonevox - Atendimento para Callcenter e Suporte VOIP",
  },

  // Favicon and Icons
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    android: "/favicon/favicon.ico",
    other: "/favicon/favicon.ico", // Ícone para dispositivos maiores
  },

  // Dados Estruturados (Schema Markup - JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Phonevox",
    "url": "https://www.phonevox.com.br",
    "logo": "https://www.phonevox.com.br/logo-phonevox.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-18-3256-8300",
      "contactType": "Customer Service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. José Bonifácio, 481-C",
      "addressLocality": "Santo Anastácio",
      "addressRegion": "SP",
      "postalCode": "19360-000",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.facebook.com/phonevoxgroup",
      "https://www.instagram.com/phonevoxgroup",
      "https://www.linkedin.com/company/phonevoxgroup"
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

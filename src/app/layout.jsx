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
  title: "Phonevox - Call Center, VOIP e PABX na Nuvem para Empresas",
  description: "Call Center completo com soluções VOIP, PABX, números VoIP, integração com IXC, SGP, Hubsoft e suporte especializado 24/7. Otimize com a Phonevox!",
  keywords: "call center, contact center, callcenter, integracao ixc, telefonia em nuvem, telefonia inteligente, integracao com erp e telefonia, fornecedores callcenter, VOIP, PABX na nuvem, números VoIP, IXC, ixcsoft, SGP, Hubsoft, atendimento empresarial, suporte 24/7, telecomunicação, suporte asterisk, suporte freepbx, suporte magnus, suporte issabel, telefonia IP, callcenter são paulo, callcenter região de são paulo",
  robots: "index, follow",
  language: "pt-BR",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Phonevox - Call Center, VOIP e PABX na Nuvem para Empresas",
    description: "Soluções completas para Call Center, VOIP, PABX e números VoIP com integração IXC, SGP e Hubsoft.",
    url: "https://www.phonevox.com.br/",
    siteName: "Phonevox",
    type: "website",
  },
  canonical: "https://www.phonevox.com.br",
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
  },
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

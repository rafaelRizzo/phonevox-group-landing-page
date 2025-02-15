import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Parceiros({ logos }) {
    return (
        <section className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10">
            {/* Título */}
            <div className="text-center px-5">
                <h2 className="font-semibold text-2xl">Nossos parceiros</h2>
                <h3 className="text-muted-foreground text-sm">Empresas que confiam em nosso potencial de potencializar seu atendimento</h3>
            </div>

            {/* Carrossel Marquee */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* Primeira linha de logos */}
                <Marquee pauseOnHover className="transition-all duration-1000 ease-in-out [--duration:60s]">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center min-w-[160px] max-w-[160px] mx-2"
                        >
                            <Card className="shadow-none border-none">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image
                                        src={logo}
                                        alt={`Logo ${index + 1}`}
                                        width={180}
                                        height={180}
                                        className="brightness-0 recolor-logos"
                                        loading="lazy"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Marquee>


                {/* Gradientes laterais */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

// export default function Parceiros({ logos }) {
//     return (
//         <>
//             {/* Parceiros */}
//             <section className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10" >
//                 <div className="text-center px-5">
//                     <h2 className="font-semibold text-2xl">Nossos parceiros</h2>
//                     <h3 className="text-muted-foreground text-sm">Empresas que confiam em nosso potencial de potencializar seu atendimento</h3>
//                 </div>

//                 <div className="mx-auto select-none">
//                     <Carousel
//                         plugins={[
//                             Autoplay({
//                                 delay: 2000,  // Intervalo entre cada slide (3 segundos)
//                                 disableOnInteraction: false,  // Permite que o autoplay continue mesmo após interação
//                             }),
//                         ]}
//                         opts={{
//                             align: "start",
//                             dragFree: true,  // Desabilita o drag manual,

//                         }}
//                         className="w-full max-w-sm lg:max-w-4xl"
//                     >
//                         <CarouselContent>
//                             {logos.map((logo, index) => {
//                                 return (
//                                     <CarouselItem key={index} className="md:basis-1/3 lg:max-w-[180px] user-select-none">
//                                         <div className="p-1">
//                                             <Card className="shadow-none border-none ">
//                                                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                                                     <Image src={logo} alt={logo} width={200} height={200} className="brightness-0 recolor-logos" loading="lazy" />
//                                                 </CardContent>
//                                             </Card>
//                                         </div>
//                                     </CarouselItem>
//                                 )
//                             })}
//                         </CarouselContent>
//                     </Carousel>
//                 </div>

//             </section >
//         </>
//     );
// }
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq({ perguntasFaq }) {
    return (
        <>
            {/* Faq */}
            <section className="max-w-7xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Perguntas frequentes</h2>
                    <h3 className="text-muted-foreground text-sm">
                        Encontre respostas rápidas para as dúvidas mais comuns
                    </h3>
                </div>

                {/* Accordion com perguntas e respostas */}
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {perguntasFaq.map((pergunta) => (
                            <AccordionItem value={pergunta.id} key={pergunta.id}>
                                <AccordionTrigger>{pergunta.question}</AccordionTrigger>
                                <AccordionContent>
                                    {pergunta.link ? (
                                        <span>
                                            {pergunta.answer.split(pergunta.link)[0]}
                                            <a
                                                href={pergunta.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                {pergunta.link}
                                            </a>
                                            {pergunta.answer.split(pergunta.link)[1]}
                                        </span>
                                    ) : (
                                        pergunta.answer
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    );
}

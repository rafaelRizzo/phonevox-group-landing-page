import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq({ perguntasFaq }) {
    return (
        <>
            {/* Faq */}
            <section className="max-w-5xl p-5 my-5 mx-auto flex flex-col gap-10">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-2xl">Perguntas frequentes</h2>
                    <h3 className="text-muted-foreground text-sm">Encontre respostas rápidas para as dúvidas mais comuns</h3>
                </div>

                {/* Acordion com perguntas e respostas */}
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {perguntasFaq.map((pergunta) => (
                            <AccordionItem value={pergunta.id} key={pergunta.id}>
                                <AccordionTrigger>{pergunta.question}</AccordionTrigger>
                                <AccordionContent>
                                    {pergunta.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    );
}
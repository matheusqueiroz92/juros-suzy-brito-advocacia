"use client";

import { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MessageCircle,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animar seção
              gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
              );
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const faqs = [
    {
      question: "Vou precisar entrar com processo?",
      answer:
        "Nem sempre. Em muitos casos, conseguimos negociar extrajudicialmente com base na análise do contrato. A ação judicial só é recomendada quando não há acordo e há abusos claros.",
      icon: FileText,
    },
    {
      question: "Posso sofrer abusos mesmo pagando em dia?",
      answer:
        "Sim. O fato de pagar regularmente não impede que haja cobranças ilegais ou taxas acima do permitido. A irregularidade pode estar no próprio contrato.",
      icon: AlertTriangle,
    },
    {
      question:
        "Eu não estou endividado. Ainda assim posso revisar o contrato?",
      answer:
        "Sim. O objetivo da revisão é garantir que você pague apenas o que é legal e justo, independentemente de estar em débito ou não.",
      icon: CheckCircle,
    },
    {
      question:
        "Estou com nome sujo por causa da dívida. Posso entrar com ação?",
      answer:
        "Sim. Mesmo com o nome negativado, é possível revisar o contrato. Em alguns casos, o nome pode ser limpo durante o processo, dependendo da situação e da decisão judicial.",
      icon: CheckCircle,
    },
    {
      question: "Quanto tempo demora para ter uma resposta?",
      answer:
        "A análise inicial começa assim que você relata seu caso pelo WhatsApp. O tempo pode variar conforme o caso, mas o objetivo é ser ágil, claro e direto desde o primeiro contato.",
      icon: Clock,
    },
    {
      question: "O que preciso enviar para analisar minha dívida?",
      answer:
        "Normalmente é solicitado documentos como o contrato, extratos de pagamentos e o valor total cobrado. Com isso, já conseguimos uma análise preliminar.",
      icon: FileText,
    },
    {
      question: "Esse tipo de revisão funciona mesmo?",
      answer:
        "Sim, desde que feita com critério jurídico. Já ajudamos diversas pessoas a reduzir suas dívidas e sair do sufoco. Tudo com base na lei e em decisões judiciais atuais.",
      icon: CheckCircle,
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-secondary text-secondary px-4 py-2 text-sm font-medium"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ - Perguntas Frequentes
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Esclarecendo suas dúvidas sobre{" "}
            <span className="text-secondary">juros abusivos</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Respostas diretas e claras para as principais dúvidas sobre revisão
            contratual e como podemos ajudar você a recuperar o que é seu.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                  <div className="flex items-center space-x-6 w-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <faq.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="font-bold text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="pl-18">
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 shadow-2xl border border-primary/10">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl lg:text-4xl font-serif font-bold text-primary mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas e
                avaliar seu caso de forma personalizada e gratuita.
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/5571999999999", "_blank")
                }
                className="group relative bg-gradient-to-r from-primary via-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-10 py-6 text-xl font-bold animate-button-glow transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border-0 shadow-xl hover:shadow-2xl"
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>

                {/* Content */}
                <div className="relative flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 animate-pulse" />
                  <span className="font-extrabold">Falar com Especialista</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

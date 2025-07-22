"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Gavel,
  Shield,
  Users,
  Lightbulb,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { gsap } from "gsap";

const Solucoes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animar processo
              gsap.fromTo(
                ".process-step",
                { opacity: 0, x: -50 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.8,
                  stagger: 0.2,
                  ease: "power2.out",
                }
              );

              // Animar estatísticas
              gsap.fromTo(
                ".stat-item",
                { opacity: 0, scale: 0.8 },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "back.out(1.7)",
                }
              );

              // Animar linha do tempo
              gsap.fromTo(
                ".timeline-line",
                { scaleX: 0 },
                {
                  scaleX: 1,
                  duration: 1.5,
                  ease: "power2.out",
                }
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

  const services = [
    {
      icon: FileText,
      title: "Análise de Contratos",
      subtitle: "Identificação de abusos",
      description:
        "Levantamento completo de cláusulas abusivas e valores indevidos",
    },
    {
      icon: Gavel,
      title: "Revisão Contratual",
      subtitle: "Redução de dívidas",
      description:
        "Adequação de taxas e restituição de valores pagos indevidamente",
    },
    {
      icon: Shield,
      title: "Defesa Legal",
      subtitle: "Proteção de direitos",
      description:
        "Contestação de cobranças e exclusão de negativações indevidas",
    },
    {
      icon: Users,
      title: "Acompanhamento",
      subtitle: "Suporte completo",
      description: "Atualizações constantes e acesso direto ao profissional",
    },
  ];

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge and Title */}
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-4 bg-secondary text-secondary-foreground"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Nossas Soluções
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-6">
            A revisão de contratos bancários pode salvar seu patrimônio
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções jurídicas especializadas para proteger seus
            direitos contra práticas abusivas de instituições financeiras
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-4xl font-serif font-bold mb-6">
                Pronto para recuperar o que é seu?
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Não deixe que práticas abusivas continuem prejudicando suas
                finanças. Entre em contato agora e descubra como podemos ajudar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5577991112884?text=Ol%C3%A1%2C%20Suzy%20Brito%20Advocacia!%20Visitei%20o%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20revis%C3%A3o%20do%20meu%20contrato%20e%20juros%20abusivos.%20Poderiam%20me%20ajudar%3F",
                      "_blank"
                    )
                  }
                  className="bg-white text-primary px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:bg-secondary hover:-translate-y-1 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </button>
                <button
                  onClick={() => {
                    const element = document.querySelector("#sobre");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group border-2 border-white/80 text-white hover:border-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center transform hover:text-primary hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex items-center space-x-2">
                    <span>Conhecer a Advogada</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solucoes;

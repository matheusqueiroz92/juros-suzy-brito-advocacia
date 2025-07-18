"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  CreditCard,
  Calculator,
  Shield,
  AlertTriangle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { gsap } from "gsap";

const Problemas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animar cards
              gsap.fromTo(
                ".problem-card",
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: "power2.out",
                }
              );

              // Animar seção de imagem
              gsap.fromTo(
                ".image-section",
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
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

  const problems = [
    {
      icon: TrendingUp,
      title: "Juros Abusivos em Financiamentos",
      description:
        "Sente que as parcelas só aumentam? Taxas de juros acima do permitido podem estar elevando sua dívida.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: CreditCard,
      title: "Cobranças de Tarifas Indevidas",
      description:
        "Você identificou taxas não contratadas, duplicadas ou valores sem explicação em sua conta ou cartão? Há grandes chances da sua dívida estar sendo ampliada de forma irregular.",
      color: "text-red-800",
      bgColor: "bg-red-800/10",
    },
    {
      icon: Calculator,
      title: "Juros Sobre Juros",
      description:
        "A sensação é que a dívida está virando uma bola de neve? Pode ser que estejam cobrando juros de forma errada, fazendo ela crescer sem você perceber.",
      color: "text-slate-600",
      bgColor: "bg-slate-600/10",
    },
    {
      icon: Shield,
      title: "Taxas de Cadastro e Seguros Embutidos",
      description:
        "Você está pagando taxas de abertura de crédito, cadastro, avaliação ou seguros? Elas podem ser canceladas!",
      color: "text-teal-900",
      bgColor: "bg-teal-900/10",
    },
  ];

  return (
    <section
      id="problemas"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Problemas Comuns
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Você está enfrentando alguma destas situações?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bancos e financeiras muitas vezes aplicam cobranças que passam
            despercebidas e comprometem sua situação financeira. Veja se alguma
            dessas situações está afetando o seu contrato.
          </p>
        </div>

        {/* Problem Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="problem-card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-lg"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 ${problem.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image and Text Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="image-section relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-center justify-center h-64 lg:h-80">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary">
                        Imagem aqui!
                      </h3>
                      <p className="text-muted-foreground">
                        Ilustração relacionada ao tempo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-4xl font-serif font-bold text-primary leading-tight">
              O problema pode estar crescendo enquanto você adia a solução.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Revisar seu contrato no momento certo pode evitar prejuízos
              maiores — como juros indevidos, cobranças duplicadas e tarifas
              abusivas que afetam diretamente seu bolso.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  Juros que crescem exponencialmente
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  Taxas não contratadas
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  Cobranças duplicadas
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  Seguros embutidos sem autorização
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() =>
                window.open("https://wa.me/5571999999999", "_blank")
              }
            >
              Preciso de mais informações
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problemas;

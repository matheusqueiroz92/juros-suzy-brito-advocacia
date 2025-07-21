"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Clock,
  TrendingUp,
  User,
  Quote,
  Shield,
  FilePen,
} from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";

const Sobre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animar imagem
              gsap.fromTo(
                imageRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
              );

              // Animar conteúdo
              gsap.fromTo(
                contentRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
              );

              // Animar badges
              gsap.fromTo(
                ".badge-item",
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.1,
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

  const badges = [
    {
      icon: Award,
      text: "Especialista em Direito Bancário",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      icon: Clock,
      text: "Mais de 10 anos de experiência",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      icon: TrendingUp,
      text: "Centenas de casos de sucesso",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      icon: User,
      text: "OAB/BA 66.418",
      color: "bg-primary/10 text-primary border-primary/20",
    },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Section */}
          <div ref={imageRef} className="space-y-6">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-lg overflow-hidden">
                <div className="relative h-96 lg:h-[500px]">
                  {/* Imagem da Dra. Suzy */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                      <Image
                        src="/foto-suzy-sobre.webp"
                        alt="Dra. Suzy Brito - Advogada Especialista em Direito Bancário"
                        fill
                        className="object-cover rounded-xl"
                        priority
                      />
                      {/* Overlay sutil para melhorar contraste */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>

                      {/* Card com nome da Dra. Suzy - posicionado no canto inferior direito */}
                      <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                        <div className="bg-gradient-to-r from-primary to-primary/90 backdrop-blur-sm rounded-lg p-3 lg:p-4 shadow-xl border border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                          <div className="text-white space-y-1">
                            <div className="font-bold text-sm lg:text-base leading-tight">
                              Dra. Suzy Brito
                            </div>
                            <div className="text-xs lg:text-sm opacity-90 font-medium">
                              Advogada Especialista
                            </div>
                          </div>
                          {/* Elemento decorativo */}
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full opacity-80"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vetores geométricos animados - reduzido para 3 */}
                  <div className="absolute top-4 right-4 w-8 h-8 animate-geometric-float">
                    <div className="w-full h-full border-2 border-primary/30 rounded-lg"></div>
                  </div>
                  <div
                    className="absolute top-8 left-4 w-6 h-6 animate-geometric-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="w-full h-full border-2 border-secondary/30 rounded-full"></div>
                  </div>
                  <div
                    className="absolute bottom-8 right-8 w-10 h-10 animate-geometric-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="w-full h-full border-2 border-primary/20 transform rotate-45"></div>
                  </div>

                  {/* Formas flutuantes - reduzido para 3 */}
                  <div className="absolute top-2 left-1/2 w-3 h-3 animate-shape-pulse">
                    <div className="w-full h-full bg-primary/20 rounded-full"></div>
                  </div>
                  <div
                    className="absolute top-16 right-2 w-2 h-2 animate-shape-pulse"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="w-full h-full bg-secondary/30 rounded-full"></div>
                  </div>
                  <div
                    className="absolute bottom-16 left-2 w-2 h-2 animate-shape-pulse"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="w-full h-full bg-primary/25 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary rounded-full p-4 shadow-lg">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-4 shadow-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8 flex flex-col gap-3">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary leading-tight">
                Sobre o Escritório
              </h2>
              <div className="space-y-4 text-md text-muted-foreground leading-relaxed">
                <p>
                  Nosso escritório foi fundado com a missão de proteger os
                  direitos dos consumidores contra práticas abusivas de
                  instituições financeiras. Atuamos com determinação na
                  identificação e combate a cobranças indevidas, juros
                  excessivos e cláusulas contratuais abusivas.
                </p>
                <p>
                  Com uma equipe altamente especializada em Direito Bancário e
                  do Consumidor, já auxiliamos centenas de clientes a
                  recuperarem valores pagos indevidamente e a reduzirem
                  significativamente suas dívidas através de processos de
                  revisão contratual.
                </p>
              </div>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`badge-item ${badge.color} px-4 py-3 text-md font-medium flex items-center space-x-2`}
                >
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.text}</span>
                </Badge>
              ))}
            </div>

            {/* Testimonial Card - movido para baixo da imagem */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0 shadow-lg">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-md text-muted-foreground leading-relaxed italic">
                      &ldquo;Acredito que todos merecem acesso à justiça,
                      especialmente quando se trata de enfrentar grandes
                      instituições financeiras. Meu compromisso é usar meu
                      conhecimento e experiência para garantir que meus clientes
                      sejam tratados com justiça.&rdquo;
                    </p>
                    <div className="flex items-center space-x-2">
                      <FilePen className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-primary">
                        Dra. Suzy Brito
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

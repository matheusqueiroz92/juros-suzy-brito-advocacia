"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  ArrowRight,
  Scale,
  TrendingUp,
  Shield,
  CheckCircle,
  Gavel,
} from "lucide-react";
import { gsap } from "gsap";
// import Image from "next/image";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const hammerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();

      // Animar elementos do lado esquerdo
      tl.fromTo(
        leftContentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      ).fromTo(
        rightContentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      // Animar martelo
      gsap.to(hammerRef.current, {
        rotation: 15,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "bottom center",
      });

      // Animar elementos flutuantes de martelo
      gsap.to(".hammer-element", {
        y: -30,
        rotation: 360,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-secondary/10 overflow-hidden"
    >
      {/* Background Elements - Martelos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 hammer-element">
          <Gavel className="w-full h-full text-primary/20" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 hammer-element">
          <Gavel className="w-full h-full text-secondary/30" />
        </div>
        <div className="absolute bottom-40 left-20 w-10 h-10 hammer-element">
          <Gavel className="w-full h-full text-primary/25" />
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 hammer-element">
          <Gavel className="w-full h-full text-secondary/25" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Conteúdo da esquerda - 60% */}
          <div ref={leftContentRef} className="lg:col-span-3 space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge
                variant="outline"
                className="border-secondary text-primary px-4 py-2 text-sm rounded-lg"
              >
                <Scale className="w-6 h-6 mr-2" />
                Advocacia Especializada
              </Badge>
              <Badge
                variant="outline"
                className="border-secondary text-primary px-4 py-2 text-sm rounded-lg"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Revisão de Contratos
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-serif font-extrabold text-primary leading-tight">
              Suspeita que está pagando{" "}
              <span className="text-secondary">mais do que deveria</span> no seu
              financiamento ou cartão?
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Descubra se há cobranças abusivas no seu contrato. A cobrança
              irregular de juros abusivos em contratos bancários e
              financiamentos é uma prática abusiva que pode ser contestada
              judicialmente.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-primary via-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-10 py-6 text-xl font-bold animate-button-glow transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden border-0"
                onClick={() =>
                  window.open("https://wa.me/5571999999999", "_blank")
                }
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
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  const element = document.querySelector("#problemas");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Saiba mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">
                  Mais de 10 anos de experiência
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">
                  Centenas de casos de sucesso
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image - 40% */}
          <div ref={rightContentRef} className="lg:col-span-2 relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-lg overflow-hidden">
                <div className="relative h-80 lg:h-96">
                  {/* Placeholder para imagem relacionada ao tema */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-6">
                      {/* Martelo animado */}
                      <div
                        ref={hammerRef}
                        className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto shadow-lg"
                      >
                        <Gavel className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary">
                          Justiça Financeira
                        </h3>
                        <p className="text-muted-foreground max-w-xs">
                          Protegendo seus direitos contra práticas abusivas
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Elementos decorativos */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-secondary/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/20 rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary rounded-full p-4 shadow-lg">
                <CheckCircle className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-4 shadow-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary/30 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowRight className="w-6 h-6 text-primary rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

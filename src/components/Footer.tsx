"use client";

import { Linkedin, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import Image from "next/image";
import logoFooter from "../../public/logo-rodape.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/suzy-brito-advocacia",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/suzybrito.advocacia",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5571999999999",
      icon: MessageCircle,
    },
  ];

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Problemas", href: "#problemas" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Sobre", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  const policyLinks = [
    { name: "Política de Privacidade", href: "/politica-privacidade" },
    { name: "Termos de Uso", href: "/termos-uso" },
    { name: "Política de Cookies", href: "/politica-cookies" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="group">
              <Image
                src={logoFooter}
                alt="Suzy Brito Advocacia"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Advocacia especializada em revisão de contratos bancários e defesa
              contra cobranças de juros abusivos. Atuamos em todo o território
              nacional com atendimento personalizado.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-secondary/30 hover:to-secondary/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-110"
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>

          <div></div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 group">
              Links Rápidos
              <span className="block w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary/50 transition-all duration-300 group-hover:w-full mt-2"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group relative text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 flex items-center space-x-2 hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-2 h-2 bg-secondary/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary/50 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 group">
              Políticas
              <span className="block w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary/50 transition-all duration-300 group-hover:w-full mt-2"></span>
            </h4>
            <ul className="space-y-3">
              {policyLinks.map((policy, index) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="group relative text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 flex items-center space-x-2 hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-2 h-2 bg-secondary/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></span>
                    <span className="relative">
                      {policy.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-secondary/50 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              <p className="group">
                &copy; {new Date().getFullYear()} Suzy Brito Advocacia e
                Consultoria Jurídica. Todos os direitos reservados.
                <span className="block w-0 h-0.5 bg-secondary/30 transition-all duration-300 group-hover:w-full mt-1"></span>
              </p>
              <p className="mt-2 group">
                OAB/BA 66.418
                <span className="block w-0 h-0.5 bg-secondary/30 transition-all duration-300 group-hover:w-full mt-1"></span>
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="group relative w-12 h-12 bg-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-secondary/80 text-secondary-foreground rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 hover:shadow-xl"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5 transition-all duration-300 group-hover:-translate-y-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

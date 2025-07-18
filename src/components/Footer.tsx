"use client";

import {
  Linkedin,
  Instagram,
  MessageCircle,
  Scale,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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

  const contactInfo = [
    { icon: Phone, text: "(71) 99999-9999" },
    { icon: Mail, text: "contato@suzibrito.adv.br" },
    { icon: MapPin, text: "Salvador/BA" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">Suzy Brito</h3>
                <p className="text-sm text-primary-foreground/80">
                  Advocacia Especializada
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Especialistas em direito bancário e do consumidor, dedicados a
              proteger seus direitos contra práticas abusivas de instituições
              financeiras.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2">
              {policyLinks.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {policy.name}
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
              <p>
                &copy; 2024 Suzy Brito Advocacia. Todos os direitos reservados.
              </p>
              <p className="mt-1">OAB/BA 66.418</p>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

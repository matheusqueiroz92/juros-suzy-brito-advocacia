"use client";

import { useState, useEffect } from "react";

import {
  Menu,
  X,
  Linkedin,
  Instagram,
  MessageCircle,
  AlertTriangle,
  Lightbulb,
  User,
  HelpCircle,
  Mail,
  Home,
} from "lucide-react";
import Image from "next/image";
import logoHeader from "../../public/logo-header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "#inicio", icon: Home },
    { name: "Problemas", href: "#problemas", icon: AlertTriangle },
    { name: "Soluções", href: "#solucoes", icon: Lightbulb },
    { name: "Sobre", href: "#sobre", icon: User },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
    { name: "Contato", href: "#contato", icon: Mail },
  ];

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
      href: "https://wa.me/5577991112894?text=Ol%C3%A1%2C%20Suzy%20Brito%20Advocacia!%20Visitei%20o%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20revis%C3%A3o%20do%20meu%20contrato%20e%20juros%20abusivos.%20Poderiam%20me%20ajudar%3F",
      icon: MessageCircle,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <Image
              src={logoHeader}
              alt="Suzy Brito Advocacia"
              width={220}
              height={100}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-sm font-medium text-foreground hover:text-primary transition-all duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                <item.icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </span>
                <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 text-muted-foreground hover:text-primary rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:shadow-lg hover:-translate-y-1"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden group p-3 text-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-b-xl shadow-lg">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 rounded-xl transition-all duration-300 flex items-center space-x-3 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-4 px-4 py-3 border-t border-gray-100 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    aria-label={social.name}
                    style={{ animationDelay: `${(index + 6) * 50}ms` }}
                  >
                    <social.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

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
      href: "https://wa.me/5571999999999",
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src={logoHeader}
              alt="Suzy Brito Advocacia"
              width={220}
              height={100}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-1"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
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
                className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200 flex items-center space-x-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 px-3 py-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
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

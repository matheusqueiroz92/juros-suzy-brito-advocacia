"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Calendar,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

const Contato = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animar formulário
              gsap.fromTo(
                formRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
              );

              // Animar informações
              gsap.fromTo(
                infoRef.current,
                { opacity: 0, x: -50 },
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Configurações do EmailJS
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        from_phone: formData.telefone,
        message: formData.mensagem,
        to_email: "suzibrito.adv@gmail.com", // E-mail da advogada
        subject: `Nova mensagem do site - ${formData.nome}`,
      };

      // Enviar e-mail usando EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setStatusMessage(
          "Mensagem enviada com sucesso! Entraremos em contato em breve."
        );

        // Reset do formulário
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          mensagem: "",
        });
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Erro ao enviar mensagem. Abrindo WhatsApp para contato direto..."
      );

      // Fallback: Abrir WhatsApp com os dados do formulário
      setTimeout(() => {
        const whatsappMessage = `Olá! Gostaria de falar sobre meu caso.

Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}

Mensagem: ${formData.mensagem}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(
          `https://wa.me/5577991112894?text=${encodedMessage}`,
          "_blank"
        );
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-secondary text-secondary-foreground"
          >
            <Mail className="w-4 h-4 mr-2" />
            Entre em Contato
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Vamos conversar sobre seu caso
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco para uma análise personalizada do seu caso.
            Nossa equipe está pronta para ajudar você a recuperar o que é seu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card de Informações de Contato - Lado Esquerdo */}
          <div ref={infoRef}>
            <Card className="bg-primary text-white border-0 shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                {/* Header do Card */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-2xl text-secondary font-serif font-bold">
                    Fale Conosco
                  </h3>
                </div>

                {/* Texto introdutório */}
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Pronto para resolver seus problemas com juros abusivos? Nossa
                  equipe especializada está à disposição para te ajudar!
                  <br />
                  <span className="text-secondary">
                    Entre em contato conosco agora mesmo.
                  </span>
                </p>

                {/* Informações de contato */}
                <div className="space-y-8 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-medium">Email</p>
                      <p className="text-white font-semibold text-sm">
                        suzibrito.adv@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-medium">
                        Telefone
                      </p>
                      <p className="text-white font-semibold text-sm">
                        (77) 99111-2894
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-xs font-medium">
                        Endereço
                      </p>
                      <p className="text-white font-semibold text-sm">
                        Rua 07 de setembro, nº 22. Centro. Itapetinga-BA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botão WhatsApp */}
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5577991112894?text=Ol%C3%A1%2C%20Suzy%20Brito%20Advocacia!%20Visitei%20o%20site%20e%20gostaria%20de%20conversar%20sobre%20a%20revis%C3%A3o%20do%20meu%20contrato%20e%20juros%20abusivos.%20Poderiam%20me%20ajudar%3F",
                      "_blank"
                    )
                  }
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Card do Formulário - Lado Direito */}
          <div ref={formRef}>
            <Card className="bg-white border-0 shadow-2xl rounded-2xl overflow-hidden">
              <CardContent className="p-8 lg:p-10">
                {/* Header do Card */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Envie uma mensagem
                  </h3>
                </div>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="nome"
                      className="text-sm font-medium text-primary"
                    >
                      Nome
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-primary"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="telefone"
                      className="text-sm font-medium text-primary"
                    >
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg"
                      placeholder="(xx) 99999-9999"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="mensagem"
                      className="text-sm font-medium text-primary"
                    >
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg min-h-[80px]"
                      placeholder="Digite sua mensagem..."
                    />
                  </div>

                  {/* Botão Enviar */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white border-0 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Enviar mensagem</span>
                      </div>
                    )}
                  </Button>

                  {/* Feedback de Status */}
                  {submitStatus !== "idle" && (
                    <div
                      className={`mt-4 p-4 rounded-lg flex items-center space-x-3 ${
                        submitStatus === "success"
                          ? "bg-green-50 border border-green-200 text-green-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="text-sm font-medium">
                        {statusMessage}
                      </span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

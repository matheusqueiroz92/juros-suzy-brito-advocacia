"use client";

import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoHeader from "../../../public/logo-header.png";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="group">
              <Image
                src={logoHeader}
                alt="Suzy Brito Advocacia"
                width={220}
                height={100}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Link
              href="/"
              className="group flex items-center space-x-2 text-primary hover:text-secondary transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="font-medium">Voltar ao site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Política de Privacidade
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sua privacidade é fundamental para nós. Esta política descreve como
            coletamos, usamos e protegemos suas informações pessoais.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-muted-foreground">
            <span>
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Informações Coletadas */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Informações que Coletamos
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Informações Pessoais
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Nome completo e informações de contato</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Endereço de e-mail e número de telefone</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Informações sobre seu caso jurídico</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Documentos e informações relacionadas ao seu contrato
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Informações Técnicas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Endereço IP e dados de navegação</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Informações sobre dispositivo e navegador</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cookies e tecnologias similares</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Como Usamos */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Como Usamos suas Informações
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Prestação de Serviços
                </h3>
                <p className="text-muted-foreground">
                  Para analisar seu caso, fornecer consultoria jurídica e
                  representá-lo em processos relacionados a juros abusivos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Comunicação
                </h3>
                <p className="text-muted-foreground">
                  Para entrar em contato sobre seu caso, enviar atualizações e
                  responder suas dúvidas e solicitações.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Melhorias do Site
                </h3>
                <p className="text-muted-foreground">
                  Para analisar o uso do site, melhorar nossa presença online e
                  otimizar a experiência do usuário.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Cumprimento Legal
                </h3>
                <p className="text-muted-foreground">
                  Para cumprir obrigações legais, regulamentares e profissionais
                  aplicáveis ao exercício da advocacia.
                </p>
              </div>
            </div>
          </section>

          {/* Compartilhamento */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Compartilhamento de Informações
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações
                pessoais com terceiros, exceto nas seguintes situações:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Com seu consentimento
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Quando você autorizar explicitamente o compartilhamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Para prestação de serviços
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Com parceiros e prestadores de serviços essenciais para
                      seu caso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Obrigação legal
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Quando exigido por lei, ordem judicial ou autoridade
                      competente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Segurança */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Segurança das Informações
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Medidas de Proteção
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Criptografia SSL/TLS para transmissão de dados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Controle de acesso rigoroso às informações</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Backup regular e seguro dos dados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monitoramento contínuo de segurança</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Seus Direitos
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Acessar suas informações pessoais</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Corrigir dados incorretos ou incompletos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Solicitar a exclusão de seus dados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Revogar consentimento a qualquer momento</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
                Dúvidas sobre Privacidade?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Se você tiver dúvidas sobre esta política ou sobre como tratamos
                suas informações, entre em contato conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contato@suzibrito.adv.br"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  Enviar E-mail
                </a>
                <a
                  href="https://wa.me/5571999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PoliticaPrivacidade;

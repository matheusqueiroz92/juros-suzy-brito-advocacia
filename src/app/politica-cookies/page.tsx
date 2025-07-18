"use client";

import { ArrowLeft, Cookie, Settings, Shield, Eye, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoHeader from "../../../public/logo-header.png";

const PoliticaCookies = () => {
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
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Política de Cookies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entenda como utilizamos cookies e tecnologias similares para
            melhorar sua experiência em nosso site.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-muted-foreground">
            <span>
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* O que são Cookies */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                O que são Cookies?
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos de texto que são armazenados no
                seu dispositivo (computador, tablet ou celular) quando você
                visita um site. Eles nos ajudam a melhorar sua experiência de
                navegação e a entender como você utiliza nosso site.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Funções dos Cookies
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Lembrar suas preferências e configurações</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Analisar como você utiliza nosso site</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Melhorar a funcionalidade e segurança</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Personalizar o conteúdo para você</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tipos de Cookies */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Tipos de Cookies que Utilizamos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    Cookies Essenciais
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Necessários para o funcionamento básico do site. Eles não
                  podem ser desativados.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Autenticação e segurança</li>
                  <li>• Preferências de idioma</li>
                  <li>• Funcionalidades básicas</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    Cookies de Análise
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Nos ajudam a entender como você utiliza o site para
                  melhorá-lo.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Estatísticas de uso</li>
                  <li>• Páginas mais visitadas</li>
                  <li>• Tempo de permanência</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    Cookies de Funcionalidade
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Lembram suas escolhas para personalizar sua experiência.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Preferências de layout</li>
                  <li>• Configurações salvas</li>
                  <li>• Personalização</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    Cookies de Marketing
                  </h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Utilizados para mostrar conteúdo relevante e melhorar
                  campanhas.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Publicidade personalizada</li>
                  <li>• Redes sociais</li>
                  <li>• Análise de campanhas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies de Terceiros */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Cookies de Terceiros
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Alguns cookies são definidos por serviços de terceiros que
                aparecem em nossas páginas. Estes cookies são utilizados para:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">G</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Google Analytics
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Para analisar o tráfego do site e entender como os
                      visitantes interagem com nosso conteúdo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">W</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Para permitir a integração com o WhatsApp Business e
                      facilitar o contato.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-semibold">S</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Redes Sociais
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Para permitir o compartilhamento de conteúdo e integração
                      com redes sociais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gerenciamento de Cookies */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Como Gerenciar Cookies
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Configurações do Navegador
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Chrome: Configurações → Privacidade e Segurança</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Firefox: Opções → Privacidade e Segurança</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Safari: Preferências → Privacidade</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Edge: Configurações → Cookies e Permissões</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Impacto da Desativação
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Algumas funcionalidades podem não funcionar</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Preferências não serão lembradas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Experiência menos personalizada</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Análises limitadas de uso</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Duração dos Cookies */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Duração dos Cookies
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-green-700 mb-3">
                    Cookies de Sessão
                  </h3>
                  <p className="text-green-600 text-sm">
                    São excluídos automaticamente quando você fecha o navegador.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">
                    Cookies Persistentes
                  </h3>
                  <p className="text-blue-600 text-sm">
                    Permanecem no seu dispositivo por um período específico ou
                    até serem excluídos.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-purple-700 mb-3">
                    Cookies de Terceiros
                  </h3>
                  <p className="text-purple-600 text-sm">
                    Seguem as políticas de duração definidas pelos respectivos
                    serviços.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Atualizações */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Atualizações desta Política
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Cookies pode ser atualizada periodicamente para
                refletir mudanças em nossas práticas ou por outros motivos
                operacionais, legais ou regulamentares.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                  Notificação de Mudanças
                </h3>
                <p className="text-indigo-600">
                  Quando fizermos alterações significativas, notificaremos você
                  através de um aviso em nosso site ou por outros meios
                  apropriados.
                </p>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
                Dúvidas sobre Cookies?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Se você tiver dúvidas sobre nossa Política de Cookies ou sobre
                como gerenciar suas preferências, entre em contato conosco.
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

export default PoliticaCookies;

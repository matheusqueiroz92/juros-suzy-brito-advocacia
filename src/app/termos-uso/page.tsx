"use client";

import {
  ArrowLeft,
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logoHeader from "../../../public/logo-header.png";

const TermosUso = () => {
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
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Termos de Uso
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leia atentamente estes termos antes de utilizar nossos serviços. Ao
            acessar e usar este site, você concorda em cumprir estes termos.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-muted-foreground">
            <span>
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Aceitação dos Termos */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Aceitação dos Termos
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site da Suzy Brito Advocacia, você
                reconhece que leu, entendeu e concorda em cumprir estes Termos
                de Uso. Se você não concordar com qualquer parte destes termos,
                não deve utilizar nossos serviços.
              </p>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Elegibilidade
                </h3>
                <p className="text-muted-foreground">
                  Para utilizar nossos serviços, você deve ter pelo menos 18
                  anos de idade e capacidade legal para celebrar contratos. Se
                  você for menor de idade, deve ter o consentimento de um
                  responsável legal.
                </p>
              </div>
            </div>
          </section>

          {/* Descrição dos Serviços */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Descrição dos Serviços
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A Suzy Brito Advocacia oferece serviços jurídicos especializados
                em:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Revisão de Contratos
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Análise de contratos bancários</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Identificação de cláusulas abusivas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Cálculo de juros indevidos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Defesa Jurídica
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Ações de revisão contratual</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Defesa em ações de cobrança</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Consultoria especializada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Uso Aceitável */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Uso Aceitável
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em utilizar nossos serviços apenas para fins
                legais e legítimos. É proibido:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-1">
                      Uso inadequado
                    </h3>
                    <p className="text-red-600 text-sm">
                      Utilizar informações falsas ou enganosas ao solicitar
                      nossos serviços.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-1">
                      Interferência
                    </h3>
                    <p className="text-red-600 text-sm">
                      Tentar interferir no funcionamento do site ou acessar
                      áreas restritas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-1">
                      Reprodução não autorizada
                    </h3>
                    <p className="text-red-600 text-sm">
                      Copiar, distribuir ou modificar conteúdo sem autorização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Limitações de Responsabilidade */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Limitações de Responsabilidade
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-orange-700 mb-3">
                  Informações do Site
                </h3>
                <p className="text-orange-600 leading-relaxed">
                  As informações disponíveis neste site são fornecidas
                  &ldquo;como estão&rdquo; e podem conter imprecisões ou erros.
                  Não garantimos a precisão, completude ou atualidade das
                  informações.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-orange-700 mb-3">
                  Consulta Jurídica
                </h3>
                <p className="text-orange-600 leading-relaxed">
                  O conteúdo deste site não constitui consulta jurídica. Para
                  obter orientação específica sobre seu caso, entre em contato
                  conosco para agendar uma consulta.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-orange-700 mb-3">
                  Limitação de Danos
                </h3>
                <p className="text-orange-600 leading-relaxed">
                  Em nenhuma circunstância seremos responsáveis por danos
                  diretos, indiretos, incidentais ou consequenciais decorrentes
                  do uso de nossos serviços.
                </p>
              </div>
            </div>
          </section>

          {/* Propriedade Intelectual */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Propriedade Intelectual
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, imagens,
                logotipos, design e código, é propriedade da Suzy Brito
                Advocacia e está protegido por direitos autorais e outras leis
                de propriedade intelectual.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Permissões
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Visualização para uso pessoal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Compartilhamento de links diretos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Restrições
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Reprodução sem autorização</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Uso comercial não autorizado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Modificações */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                Modificações dos Termos
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a
                qualquer momento. As modificações entrarão em vigor
                imediatamente após sua publicação no site.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                <h3 className="text-lg font-semibold text-yellow-700 mb-3">
                  Notificação de Mudanças
                </h3>
                <p className="text-yellow-600">
                  Recomendamos que você revise periodicamente estes termos. O
                  uso continuado do site após as modificações constitui
                  aceitação dos novos termos.
                </p>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-6">
                Dúvidas sobre os Termos?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Se você tiver dúvidas sobre estes termos ou sobre nossos
                serviços, entre em contato conosco.
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

export default TermosUso;

"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      // Aguardar um pouco antes de mostrar o banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
    localStorage.setItem("cookiesAccepted", "all");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essential: true,
        analytics: true,
        functional: true,
        marketing: true,
      })
    );
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem("cookiesAccepted", "selected");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences)
    );
    setIsVisible(false);
    setIsSettingsOpen(false);
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
    localStorage.setItem("cookiesAccepted", "rejected");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essential: true,
        analytics: false,
        functional: false,
        marketing: false,
      })
    );
    setIsVisible(false);
  };

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    if (type === "essential") return; // Essenciais não podem ser desabilitados

    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay para quando as configurações estiverem abertas */}
      {isSettingsOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsSettingsOpen(false)}
        />
      )}

      {/* Banner Principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-2 duration-500">
        <div className="bg-white border-t border-gray-200 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Conteúdo */}
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Utilizamos cookies para melhorar sua experiência
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Utilizamos cookies essenciais e opcionais para analisar o
                      tráfego do site, personalizar conteúdo e melhorar sua
                      experiência.
                      <Link
                        href="/politica-cookies"
                        className="text-primary hover:underline ml-1"
                      >
                        Saiba mais
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </button>
                <button
                  onClick={rejectAll}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Rejeitar Todos
                </button>
                <button
                  onClick={acceptAll}
                  className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Aceitar Todos
                </button>
              </div>

              {/* Botão Fechar */}
              <button
                onClick={rejectAll}
                className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 p-1 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Configurações */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-primary">
                  Configurações de Cookies
                </h2>
              </div>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo */}
            <div className="p-6 space-y-6">
              <p className="text-muted-foreground">
                Selecione quais tipos de cookies você permite que utilizemos. Os
                cookies essenciais são necessários para o funcionamento do site.
              </p>

              {/* Tipos de Cookies */}
              <div className="space-y-4">
                {/* Essenciais */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-primary">
                        Cookies Essenciais
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Necessários para o funcionamento básico do site. Não podem
                      ser desabilitados.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.essential}
                      disabled
                      className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">A</span>
                      </div>
                      <h3 className="font-semibold text-primary">
                        Cookies de Análise
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Nos ajudam a entender como você utiliza o site para
                      melhorá-lo.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={() => handlePreferenceChange("analytics")}
                      className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Funcionalidade */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">F</span>
                      </div>
                      <h3 className="font-semibold text-primary">
                        Cookies de Funcionalidade
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lembram suas escolhas para personalizar sua experiência.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.functional}
                      onChange={() => handlePreferenceChange("functional")}
                      className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 font-semibold">M</span>
                      </div>
                      <h3 className="font-semibold text-primary">
                        Cookies de Marketing
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Utilizados para mostrar conteúdo relevante e melhorar
                      campanhas.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.marketing}
                      onChange={() => handlePreferenceChange("marketing")}
                      className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200">
              <button
                onClick={rejectAll}
                className="flex-1 px-4 py-2 text-sm font-medium text-muted-foreground border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Rejeitar Todos
              </button>
              <button
                onClick={acceptSelected}
                className="flex-1 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;

// Configurações do EmailJS
// Você precisará substituir estes valores pelos seus próprios após configurar o EmailJS

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_tnkp5yh", // Service ID atual
  TEMPLATE_ID: "template_heamkvj", // Template ID atual
  PUBLIC_KEY: "qxJZYIOLe8Sm3RMEf", // Public Key atual
};

// Template de e-mail que será enviado
export const EMAIL_TEMPLATE = {
  subject: "Nova mensagem do site - Suzy Brito Advocacia",
  to_email: "suzibrito.adv@gmail.com",
};

// Configuração alternativa usando SMTP (mais confiável)
export const EMAILJS_SMTP_CONFIG = {
  SERVICE_ID: "service_yb42ze5", // Mesmo Service ID
  TEMPLATE_ID: "template_heamkvj", // Mesmo Template ID
  PUBLIC_KEY: "qxJZYIOLe8Sm3RMEf", // Mesma Public Key
};

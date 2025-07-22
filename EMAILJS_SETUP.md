# Configuração do EmailJS para Envio de E-mails

## 📧 Como Configurar o EmailJS

### 1. Criar Conta no EmailJS

1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

### 2. Configurar o Serviço de E-mail

1. No dashboard, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" (ou outro provedor de e-mail)
4. Conecte sua conta Gmail (suzibrito.adv@gmail.com)
5. Anote o **Service ID** gerado

### 3. Criar Template de E-mail

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use o seguinte template HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Nova Mensagem do Site</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2
        style="color: #530b21; border-bottom: 2px solid #e9cd65; padding-bottom: 10px;"
      >
        📧 Nova Mensagem do Site - Suzy Brito Advocacia
      </h2>

      <div
        style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;"
      >
        <h3 style="color: #530b21; margin-top: 0;">Informações do Cliente:</h3>
        <p><strong>Nome:</strong> {{from_name}}</p>
        <p><strong>E-mail:</strong> {{from_email}}</p>
        <p><strong>Telefone:</strong> {{from_phone}}</p>
      </div>

      <div
        style="background-color: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;"
      >
        <h3 style="color: #530b21; margin-top: 0;">Mensagem:</h3>
        <p style="white-space: pre-wrap;">{{message}}</p>
      </div>

      <div
        style="margin-top: 30px; padding: 15px; background-color: #e9cd65; border-radius: 8px; text-align: center;"
      >
        <p style="margin: 0; color: #530b21; font-weight: bold;">
          ⚡ Responda rapidamente para não perder este cliente!
        </p>
      </div>

      <div
        style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;"
      >
        <p>
          Esta mensagem foi enviada através do formulário de contato do site.
        </p>
        <p>Data: {{date}}</p>
      </div>
    </div>
  </body>
</html>
```

4. Configure os campos:

   - **To Email**: suzibrito.adv@gmail.com
   - **Subject**: Nova mensagem do site - {{from_name}}
   - **From Name**: Suzy Brito Advocacia
   - **Reply To**: {{from_email}}

5. Salve o template e anote o **Template ID**

### 4. Obter a Public Key

1. Vá para "Account" → "API Keys"
2. Copie a **Public Key**

### 5. Atualizar as Configurações

1. Abra o arquivo `src/lib/emailjs-config.ts`
2. Substitua os valores pelos seus:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_xxxxxxxxx", // Seu Service ID
  TEMPLATE_ID: "template_xxxxxxxxx", // Seu Template ID
  PUBLIC_KEY: "public_key_xxxxxxxxx", // Sua Public Key
};
```

### 6. Testar o Formulário

1. Execute o projeto: `npm run dev`
2. Vá para a seção de contato
3. Preencha e envie o formulário
4. Verifique se o e-mail chegou em suzibrito.adv@gmail.com

## 🔧 Configurações Adicionais

### Variáveis de Ambiente (Opcional)

Para maior segurança, você pode usar variáveis de ambiente:

1. Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_xxxxxxxxx
```

2. Atualize o arquivo de configuração:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};
```

## 📱 Funcionalidades Implementadas

✅ **Envio de e-mail real** para suzibrito.adv@gmail.com  
✅ **Template HTML personalizado** com as cores do escritório  
✅ **Feedback visual** de sucesso/erro para o usuário  
✅ **Validação de campos** obrigatórios  
✅ **Loading state** durante o envio  
✅ **Reset automático** do formulário após sucesso  
✅ **Tratamento de erros** com mensagem amigável

## 🚀 Próximos Passos

1. Configure o EmailJS seguindo as instruções acima
2. Teste o formulário
3. Personalize o template de e-mail se necessário
4. Configure notificações no Gmail para não perder mensagens

## 💡 Dicas

- O plano gratuito do EmailJS permite 200 e-mails por mês
- Para mais volume, considere um plano pago
- Configure filtros no Gmail para organizar as mensagens do site
- Teste regularmente para garantir que está funcionando

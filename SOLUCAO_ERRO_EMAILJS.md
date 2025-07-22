# 🔧 Solução para Erro de Autenticação EmailJS

## ❌ **Erro Atual:**

```
412 - Gmail_API: Request had insufficient authentication scopes
```

## 🎯 **Causa do Problema:**

O Gmail não tem as permissões necessárias para enviar e-mails através do EmailJS.

## ✅ **Soluções (Tente na Ordem):**

### **Solução 1: Reconfigurar Gmail (Recomendado)**

#### **Passo 1: Remover Serviço Atual**

1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Faça login na sua conta
3. Vá para **"Email Services"**
4. Clique no serviço Gmail atual
5. Clique em **"Delete"** para remover

#### **Passo 2: Criar Novo Serviço Gmail**

1. Clique em **"Add New Service"**
2. Escolha **"Gmail"**
3. Clique em **"Connect Account"**
4. **IMPORTANTE**: Durante a autenticação:
   - ✅ Marque **TODAS** as permissões solicitadas
   - ✅ Clique em **"Allow"** para todas as solicitações
   - ✅ **NÃO** cancele o processo
   - ✅ Aguarde a confirmação completa

#### **Passo 3: Verificar Permissões**

1. Após conectar, clique no novo serviço
2. Verifique se aparece **"Connected"** em verde
3. Anote o novo **Service ID** (pode ser diferente)

### **Solução 2: Usar EmailJS SMTP (Alternativa)**

Se o Gmail continuar com problemas, use o SMTP do EmailJS:

#### **Passo 1: Configurar SMTP**

1. No EmailJS, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"EmailJS"** (não Gmail)
4. Configure com:
   - **Email**: suzibrito.adv@gmail.com
   - **Name**: Suzy Brito Advocacia

#### **Passo 2: Atualizar Configuração**

```typescript
// src/lib/emailjs-config.ts
export const EMAILJS_CONFIG = {
  SERVICE_ID: "novo_service_id_smtp", // Novo Service ID do SMTP
  TEMPLATE_ID: "template_heamkvj", // Mesmo Template ID
  PUBLIC_KEY: "qxJZYIOLe8Sm3RMEf", // Mesma Public Key
};
```

### **Solução 3: Usar Outlook/Hotmail**

#### **Passo 1: Configurar Outlook**

1. No EmailJS, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Outlook"**
4. Conecte com suzibrito.adv@gmail.com (se tiver conta Outlook)

## 🔍 **Verificação do Template**

### **Passo 1: Verificar Template**

1. Vá para **"Email Templates"**
2. Abra o template `template_heamkvj`
3. Verifique se os campos estão corretos:
   - **To Email**: suzibrito.adv@gmail.com
   - **Subject**: Nova mensagem do site - {{from_name}}
   - **Reply To**: {{from_email}}

### **Passo 2: Testar Template**

1. No template, clique em **"Test"**
2. Preencha os campos de teste
3. Clique em **"Send Test"**
4. Verifique se o e-mail chega

## 🧪 **Teste do Formulário**

### **Passo 1: Teste Local**

1. Execute: `npm run dev`
2. Vá para a seção de contato
3. Preencha o formulário
4. Envie e verifique o console

### **Passo 2: Verificar Console**

- ✅ **Sucesso**: Status 200
- ❌ **Erro**: Status 412 ou outro

## 📧 **Configuração Manual do Gmail (Se Necessário)**

### **Passo 1: Verificar Configurações Gmail**

1. Acesse [myaccount.google.com](https://myaccount.google.com/)
2. Vá para **"Segurança"**
3. Verifique se **"Acesso a app menos seguro"** está ativado
4. Se não estiver, ative temporariamente

### **Passo 2: Verificar Permissões**

1. Vá para **"Permissões"**
2. Procure por **"EmailJS"**
3. Se encontrar, remova e reconecte

## 🚀 **Solução Rápida (Temporária)**

Se precisar de uma solução imediata, vou implementar um fallback:

```typescript
// No componente Contato.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Tentar EmailJS primeiro
    const result = await emailjs.send(/* ... */);
  } catch (error) {
    // Fallback: Abrir WhatsApp
    window.open(
      `https://wa.me/5577991112884?text=Olá! Gostaria de falar sobre meu caso. Nome: ${formData.nome}, Email: ${formData.email}, Telefone: ${formData.telefone}, Mensagem: ${formData.mensagem}`,
      "_blank"
    );
  }
};
```

## 📞 **Suporte EmailJS**

Se nada funcionar:

1. Acesse [emailjs.com/support](https://www.emailjs.com/support)
2. Abra um ticket explicando o erro 412
3. Inclua os logs do console

## ✅ **Checklist de Verificação**

- [ ] Serviço Gmail reconectado
- [ ] Todas as permissões autorizadas
- [ ] Template configurado corretamente
- [ ] Service ID atualizado
- [ ] Teste realizado com sucesso
- [ ] E-mail chegando na caixa

## 🎯 **Próximos Passos**

1. **Tente a Solução 1** (reconfigurar Gmail)
2. Se não funcionar, **tente a Solução 2** (SMTP)
3. **Teste o formulário** após cada mudança
4. **Me informe** o resultado para ajustes adicionais

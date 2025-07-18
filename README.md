# Suzy Brito Advocacia - Landing Page

Landing page moderna e responsiva para o escritório de advocacia Suzy Brito, especializado em juros abusivos e revisão de contratos bancários.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **ShadCN/ui** - Componentes UI modernos e acessíveis
- **Lucide React** - Ícones vetoriais
- **GSAP** - Animações avançadas
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas

## 🎨 Design e UX

- **Paleta de Cores**: Baseada nas cores do escritório (#FEFEFE, #530B21, #E9CD65)
- **Tipografia**: Inter (sans-serif) e Playfair Display (serif)
- **Responsividade**: Adaptável a todos os tamanhos de tela
- **Animações**: GSAP para transições suaves e elegantes
- **Acessibilidade**: Componentes acessíveis e navegação por teclado

## 📱 Seções da Landing Page

1. **Header** - Navegação fixa com menu e redes sociais
2. **Hero** - Seção principal com CTA e apresentação
3. **Problemas** - Cards informativos sobre problemas comuns
4. **Soluções** - Serviços oferecidos pelo escritório
5. **Sobre** - Informações sobre a advogada e escritório
6. **FAQ** - Perguntas frequentes em accordion
7. **Contato** - Formulário de contato e informações
8. **Footer** - Links rápidos e políticas

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd juros-suzy-brito-advocacia

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm run start

# Linting
npm run lint
```

## 🌐 Deploy

O projeto está configurado para deploy na VPS da Hostinger com:

- **Domínio**: https://suzibrito.adv.br/
- **Sistema**: AlmaLinux
- **Servidor Web**: NGINX
- **Process Manager**: PM2

### Configuração de Produção

```bash
# Build do projeto
npm run build

# Configurar PM2
pm2 start npm --name "suzy-brito-advocacia" -- start

# Configurar NGINX (exemplo)
server {
    listen 80;
    server_name suzibrito.adv.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 SEO e Performance

- **Meta Tags** otimizadas para mecanismos de busca
- **Open Graph** para compartilhamento em redes sociais
- **Schema.org** para rich snippets
- **Lazy Loading** de imagens e componentes
- **Compressão** e otimização automática

## 🔧 Configurações

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SITE_URL=https://suzibrito.adv.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5571999999999
```

### Personalização

- **Cores**: Edite as variáveis CSS em `src/app/globals.css`
- **Conteúdo**: Atualize os textos nos componentes
- **Contatos**: Modifique as informações de contato nos componentes
- **Redes Sociais**: Atualize os links nas configurações

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout principal com metadados
│   └── page.tsx             # Página principal
├── components/
│   ├── ui/                  # Componentes ShadCN/ui
│   ├── Header.tsx           # Cabeçalho com navegação
│   ├── Hero.tsx             # Seção principal
│   ├── Problemas.tsx        # Seção de problemas
│   ├── Solucoes.tsx         # Seção de soluções
│   ├── Sobre.tsx            # Seção sobre
│   ├── FAQ.tsx              # Perguntas frequentes
│   ├── Contato.tsx          # Formulário de contato
│   └── Footer.tsx           # Rodapé
└── lib/
    └── utils.ts             # Utilitários
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto, entre em contato:

- **Email**: contato@suzibrito.adv.br
- **WhatsApp**: (71) 99999-9999
- **Website**: https://suzibrito.adv.br

---

Desenvolvido com ❤️ para o escritório Suzy Brito Advocacia

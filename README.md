# cloudflare-frontend

Repositório dedicado ao código frontend configurado para Cloudflare Pages. Este projeto utiliza React e React Router para criar uma interface de usuário dinâmica, capaz de consumir APIs e exibir conteúdo dinamicamente.

## Requisitos

- Node.js
- NPM ou Yarn

## Instalação e Execução Local

1. Clone este repositório:
```bash
git clone https://github.com/rafaell1995/cloudflare-frontend.git
cd cloudflare-frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Acesse `http://localhost:3000` para ver a aplicação em funcionamento.

## Build e Deploy no Cloudflare Pages

1. Construa a aplicação para produção:
```bash
npm run build
```

2. Configure o Cloudflare Pages para apontar para a pasta `build`.

# Afiliado Store - Projeto Next.js 🚀

Bem-vindo ao repositório Afiliado Store, um projeto Next.js voltado para afiliados que desejam compartilhar links de produtos de diferentes plataformas como Amazon, Magazine Luiza e Mercado Livre.

## Sobre o Projeto

O Afiliado Store é uma aplicação web que permite aos afiliados postarem links de produtos, visualizarem os últimos produtos postados, obterem mais informações sobre um produto específico, e gerenciarem esses produtos por meio de um painel de administração.

### Tecnologias Utilizadas

- **Frontend:**
  - [Next.js 14](https://nextjs.org/) 🌐
  - [TailwindCSS](https://tailwindcss.com/) 💅
  - [Shadcn UI](https://ui.shadcn.com/) 🎨

- **Backend:**
  - [Prisma](https://www.prisma.io/) (integrado com MongoDB) 🛠️
  - API para CRUD de produtos e extração de dados de URL 📦

## Funcionalidades

### Página Principal (page.tsx)

- Mostra os últimos produtos postados pelos afiliados. 📰

### Página do Produto \([id].tsx\)

- Exibe mais informações sobre um produto específico.
- Inclui um link para redirecionamento ao site do produto.
- Adiciona metadados do produto na URL para facilitar o compartilhamento. 🛍️

### Painel de Administração

- Página para visualizar todos os produtos cadastrados.
- Possibilidade de editar, deletar e pesquisar produtos. 🧑‍💼

### Página de Cadastro de Produtos

- Integração com a API do backend para realizar um scrap da URL.
- Facilita o cadastro de novos produtos. 📝
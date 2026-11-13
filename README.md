# 🚀 Portfólio Pessoal | Guilherme Miguel

Um portfólio moderno e interativo focado em **User-Centered Design (UCD)** e alta performance. Desenvolvido para apresentar meus projetos, habilidades e identidade visual, o sistema utiliza uma arquitetura front-end leve e fluida, com forte apelo estético através de técnicas de *Glassmorphism*.

## ✨ Funcionalidades Principais

* **Design Responsivo e Moderno:** Interface totalmente adaptável a qualquer dispositivo, construída com Tailwind CSS utilizando efeitos de desfoque (backdrop-blur) e transições suaves (fade-up animations).
* **Integração Musical (Spotify):** Uma página dedicada à "Trilha Sonora" do código, utilizando um widget nativo do Spotify otimizado com `loading="lazy"` para não impactar a performance geral do site e contornar restrições de Cross-Origin (CORS).
* **Roteamento Dinâmico (SPA):** Navegação instantânea e sem recarregamentos entre as páginas da aplicação utilizando o React Router DOM.
* **Gestão de Assets Estáticos:** Estruturação otimizada de compilação (Build) através do Vite, servindo currículos (PDF) e imagens de background diretamente da pasta raiz (`public`) para máxima velocidade de carregamento e prevenção de erros 404 em produção.

## 🛠️ Stack Tecnológica

As seguintes ferramentas foram usadas na construção do projeto:

* **[React](https://reactjs.org/)** - Biblioteca principal para construção da interface.
* **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para um código mais seguro e escalável.
* **[Vite](https://vitejs.dev/)** - Ferramenta de build e servidor de desenvolvimento ultrarrápido.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário para estilização ágil e design de interface.
* **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas da aplicação.

## ⚙️ Arquitetura e Deploy

O projeto segue um fluxo de **Integração e Entrega Contínua (CI/CD)**. O versionamento de código é gerido via **Git/GitHub**, e o deploy automatizado é realizado através da plataforma **Vercel**. 

A decisão arquitetural de utilizar componentes nativos (Iframes) em detrimento de uma API Restful customizada no backend foi tomada visando garantir a estabilidade a longo prazo, reduzir o tempo de carregamento da página e entregar a experiência original do player para o usuário.

## 🚀 Como executar o projeto localmente

Pré-requisitos: Ter o [Node.js](https://nodejs.org/en/) e o Git instalados na sua máquina.

```bash
# Clone este repositório
$ git clone [https://github.com/migueltonji/portfolio.git](https://github.com/migueltonji/portfolio.git)

# Acesse a pasta do projeto no terminal/cmd
$ cd meu-portfolio

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
